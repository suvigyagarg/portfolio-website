'use client';

import CosmosCanvas from '@/components/animations/CosmosCanvas/CosmosCanvas';
import Loader from '@/components/animations/Loader/Loader';
import RevealObserver from '@/components/animations/RevealObserver/RevealObserver';
import Commissions from '@/components/sections/Commissions/Commissions';
import Connect from '@/components/sections/Connect/Connect';
import Faculties from '@/components/sections/Faculties/Faculties';
import Footer from '@/components/sections/Footer/Footer';
import Hero from '@/components/sections/Hero/Hero';
import Nav from '@/components/sections/Nav/Nav';
import Vocation from '@/components/sections/Vocation/Vocation';
import Works from '@/components/sections/Works/Works';
import About from '@/components/sections/About/About';
import { useState } from 'react';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Loader onLoaded={() => setLoaded(true)} />
      <CosmosCanvas loaded={loaded} />
      <div className="grain" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
      <Nav />
      <main>
        <Hero loaded={loaded} />
        <About />
        <Faculties />
        <Vocation />
        <Commissions />
        <Works />
        <Connect />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
