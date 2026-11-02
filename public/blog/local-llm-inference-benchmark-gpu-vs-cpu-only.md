---
title: "Benchmarking Local LLMs: Where VRAM Limits, MoE, and PLE Architecture Collide"
publishedAt: "2026-08-08"
summary: "Benchmarking Google Gemma 4 (MoE, dense, PLE) and Mistral Small 3.2 on an NVIDIA GeForce RTX 4060 Ti (16GB VRAM, Intel Core i7-12700F, 32GB RAM) vs an Intel Core i5-13420H (16GB RAM, no discrete GPU) across VRAM offloading, prompt eval, and token generation."
---

Running large language models locally has evolved rapidly with new architectural patterns like Mixture of Experts (MoE) and Parameter-Level Effective (PLE) architectures. To understand real-world inference characteristics across consumer hardware, I benchmarked a series of local models using [Ollama](https://ollama.com).

The test suite covers two distinct hardware environments:
1. **GPU Setup:** NVIDIA GeForce RTX 4060 Ti (16GB VRAM), Intel Core i7-12700F, 32GB RAM testing `gemma4:26b` (MoE), `gemma4:12b` (dense), and `mistral-small3.2:24b` (dense).
2. **CPU-only Setup:** Intel Core i5-13420H (16GB RAM, no discrete GPU) testing the lightweight `gemma4:e4b` and `gemma4:e2b` models.

The two setups sit side by side as reference points for different bottleneck classes (high-bandwidth VRAM vs. system RAM bandwidth, and dense vs. sparse/PLE architectures).

---

## Benchmark Results

### 1. GPU Results (NVIDIA GeForce RTX 4060 Ti 16GB VRAM, Intel Core i7-12700F, 32GB RAM)

All models tested on GPU were quantized using standard `Q4_K_M` for an apples-to-apples comparison on quantization level.

| Model | Placement | VRAM Used | Prompt Eval Rate | Generation Rate | Load Time (Cold) |
|---|---|---|---|---|---|
| `gemma4:26b` (MoE, 26B A4B) | 56% CPU / 44% GPU | 15 ± 1 GB | 53 ± 13 tok/s | 32 ± 1 tok/s | 22s ± 1s |
| `gemma4:12b` (dense) | 100% GPU | 13 ± 1 GB | 113 ± 34 tok/s | 32 ± 1 tok/s | 1s ± 0.5s |
| `mistral-small3.2:24b` (dense) | 63% CPU / 37% GPU | 13 ± 1 GB | 571 ± 240 tok/s | 4 ± 1 tok/s | 1s ± 0.5s |

### 2. CPU-only Results (Intel Core i5-13420H, 16GB RAM)

Tested on battery-efficient mobile silicon with integrated graphics, running fully on CPU:

| Model | Placement | Prompt Eval Rate | Generation Rate | Load Time (Cold) |
|---|---|---|---|---|
| `gemma4:e4b` | 100% CPU | 26 ± 4 tok/s | 10 ± 4 tok/s | 2s ± 0.5s |
| `gemma4:e2b` | 100% CPU | 72 ± 5 tok/s | 21 ± 5 tok/s | 2s ± 0.5s |

---

## Model Specifications (`ollama show`)

Here is the structural breakdown of each model retrieved via `ollama show`:

| Field | `gemma4:e2b` | `gemma4:e4b` | `gemma4:26b` | `gemma4:12b` | `mistral-small3.2:24b` |
|---|---|---|---|---|---|
| **Architecture** | gemma4 | gemma4 | gemma4 (MoE, 26B A4B) | gemma4 (dense) | mistral3 (dense) |
| **Total Parameters** | 5.1B | 8.0B | 25.8B | 11.9B | 24.0B |
| **Active Params / Token** | ~2.3B effective (PLE) | ~4.5B effective (PLE) | 3.8B | 11.9B (all active) | 24.0B (all active) |
| **Context Length** | 131,072 | 131,072 | 262,144 | 262,144 | 131,072 |
| **Embedding Length** | 1,536 | 2,560 | 2,816 | 3,840 | 5,120 |
| **Quantization** | Q4_K_M | Q4_K_M | Q4_K_M | Q4_K_M | Q4_K_M |
| **Vision** | Yes | Yes | Yes | Yes | Yes |
| **Audio** | Yes | Yes | No | Yes | No |
| **Tools** | Yes | Yes | Yes | Yes | Yes |
| **Thinking** | Yes | Yes | Yes | Yes | No |
| **Default Temperature** | 1.0 | 1.0 | 1.0 | 1.0 | 0.15 |

---

## Key Findings & Architecture Insights

### 1. Cold-Start Overhead on Large Footprints
The cold start for `gemma4:26b` required **22s ± 1s** while streaming **15 ± 1 GB** of model weights across PCIe into VRAM and system memory. On the Intel Core i5-13420H (16GB RAM, no discrete GPU), `e2b` and `e4b` had much faster cold starts (**2s ± 0.5s**) due to their smaller footprint.

### 2. Full GPU Offload Doubles Prompt Evaluation
When a model fits entirely into VRAM (`gemma4:12b` at 100% GPU offload), prompt evaluation hits **113 ± 34 tok/s**, roughly doubling the split-memory `gemma4:26b` (53 ± 13 tok/s). 

Interestingly, on CPU-only, `gemma4:e2b` reached **72 ± 5 tok/s prompt eval**. The PLE architecture minimizes the active computation path during prompt ingest, making it feel remarkably snappy even on the Intel Core i5-13420H processor.

### 3. Generation Speed is Memory-Bandwidth Bound
A common misconception is that generation rate correlates linearly with active parameter count. However:
- `gemma4:12b` (11.9B active params, 100% GPU) produced **32 ± 1 tok/s**.
- `gemma4:26b` (3.8B active params, 56% CPU / 44% GPU) produced **32 ± 1 tok/s**.

Why did the MoE model match the fully offloaded 12B model?
- In `gemma4:26b`, only 3.8B parameters are activated per token step, dramatically reducing per-token memory read demands over the PCIe/system RAM bus.
- In `gemma4:12b`, all 11.9B parameters must be read from VRAM on every single token step.

The two differing bottlenecks (slower PCIe/RAM fetching 3.8B params vs. faster VRAM fetching 11.9B params) converged at the exact same output generation rate of **32 ± 1 tok/s**.

### 4. The 262K Context Tax on VRAM Allocation
Both `gemma4:26b` and `gemma4:12b` support a massive **262,144 token context window**. When Ollama calculates layer offloading, it pre-allocates KV cache headroom for this context window. This large default KV allocation is why `26b` split 56/44 across CPU and GPU on the 16GB NVIDIA GeForce RTX 4060 Ti rather than fitting more layers into VRAM.

### 5. Why Mistral Small 3.2 24B Dropped to 4 ± 1 tok/s
Despite having fewer total parameters (24.0B) than Gemma 4 26B (25.8B), `mistral-small3.2:24b` produced a sluggish **4 ± 1 tok/s**.

Checking `ollama ps` revealed the culprit:
- Mistral Small 3.2 uses a wider embedding dimension (5120) and a dense transformer architecture.
- Its uncompressed on-disk footprint at Q4_K_M is **~36 GB**.
- On the 16GB NVIDIA GeForce RTX 4060 Ti, Ollama was forced to place **63% on CPU RAM and only 37% on GPU**.
- Because every token generation step must sweep all 24B dense parameters across the slow system RAM bus, generation throughput ground to a halt. In contrast, its prompt eval remained high (571 ± 240 tok/s) because batch matrix multiplication is compute-bound and saturates parallel execution units.

---

## Actionable Recommendations

### 1. Right-Sizing CPU-only Deployments
If running on an Intel Core i5-13420H (16GB RAM, no discrete GPU):
- Use **`gemma4:e2b`** as the default interactive driver: at **21 ± 5 tok/s**, it feels fluid for conversational chat and agentic workflows.
- Reserve **`gemma4:e4b`** (**10 ± 4 tok/s**) for tasks requiring deeper reasoning or higher fidelity tool execution.
- Avoid running `12b` or `26b` CPU-only on 16GB machines; memory starvation and single-digit token rates will result.

### 2. Clamp `num_ctx` Unless Long-Context is Essential
The default 131k–262k context sizes consume gigabytes of VRAM/RAM for KV caches. If working on standard tasks, restrict the context window in your Modelfile or API call:

```dockerfile
FROM gemma4:26b
PARAMETER num_ctx 16384
```

Clamping `num_ctx` to 16k or 32k frees several gigabytes of VRAM, allowing Ollama to offload more layers to the GPU.

### 3. Leverage Multi-Token Prediction (MTP) Drafters
Google released dedicated speculative-decoding drafter weights alongside Gemma 4. MTP drafters predict multiple future tokens per step and verify them in a single forward pass, providing up to **~3x generation throughput gains** on memory-bandwidth-bound setups.

Ollama introduced native Gemma 4 MTP support in [v0.23.1](https://github.com/ollama/ollama/releases/tag/v0.23.1).

### 4. Switch to Quantization-Aware Training (QAT) Checkpoints
For memory-constrained setups, standard post-training quantization (PTQ) can degrade output quality at low bitrates. DeepMind's official QAT checkpoints retain higher fidelity per byte, making 3-bit or 4-bit runs much more capable on limited RAM.

---

## References & Further Reading

- [Google DeepMind — Gemma 4 Overview](https://deepmind.google/models/gemma/gemma-4/)
- [Google AI for Developers — Gemma 4 Model Card](https://ai.google.dev/gemma/docs/core/model_card_4)
- [Google AI for Developers — Speed-up Gemma 4 with Multi-Token Prediction](https://ai.google.dev/gemma/docs/mtp/overview)
- [Google Blog — Accelerating Gemma 4 with Multi-Token Prediction Drafters](https://blog.google/innovation-and-ai/technology/developers-tools/multi-token-prediction-gemma-4/)
- [Hugging Face — Welcome Gemma 4: Frontier Multimodal Intelligence on Device](https://huggingface.co/blog/gemma4)
- [Ollama — Gemma 4 MTP Speculative Decoding (PR #15980)](https://github.com/ollama/ollama/pull/15980)