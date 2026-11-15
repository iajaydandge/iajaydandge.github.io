'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Oneko = dynamic(() => import('./oneko').then((mod) => mod.Oneko), { ssr: false });
const Oinu = dynamic(() => import('./oinu').then((mod) => mod.Oinu), { ssr: false });
const Ousagi = dynamic(() => import('./ousagi').then((mod) => mod.Ousagi), { ssr: false });

export function Pet() {
  const [activePet, setActivePet] = useState<'oneko' | 'oinu' | 'ousagi' | null>(null);

  useEffect(() => {
    // Randomly choose between oneko, oinu, and ousagi on mount
    const rand = Math.random();
    if (rand < 0.33) {
      setActivePet('oneko');
    } else if (rand < 0.66) {
      setActivePet('oinu');
    } else {
      setActivePet('ousagi');
    }
  }, []);

  if (activePet === 'oneko') return <Oneko />;
  if (activePet === 'oinu') return <Oinu />;
  if (activePet === 'ousagi') return <Ousagi />;
  return null;
}

