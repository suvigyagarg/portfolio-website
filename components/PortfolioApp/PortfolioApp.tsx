'use client';
import { useState } from 'react';

import Loader         from '@/components/Loader/Loader';
import CosmosCanvas   from '@/components/CosmosCanvas/CosmosCanvas';
import RevealObserver from '@/components/RevealObserver/RevealObserver';
import Nav            from '@/components/Nav/Nav';
import Hero           from '@/components/Hero/Hero';
import Works          from '@/components/Works/Works';
import Faculties      from '@/components/Faculties/Faculties';
import Vocation       from '@/components/Vocation/Vocation';
import Commissions    from '@/components/Commissions/Commissions';
import Writings       from '@/components/Writings/Writings';
import Connect        from '@/components/Connect/Connect';
import Footer         from '@/components/Footer/Footer';

export default function PortfolioApp() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Loader onLoaded={() => setLoaded(true)} />
      <CosmosCanvas loaded={loaded} />
      <div className="grain"   aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />

      <Nav />

      <main>
        <Hero        loaded={loaded} />
        <Works       />
        <Faculties   />
        <Vocation    />
        <Commissions />
        <Writings    />
        <Connect     />
      </main>

      <Footer />
      <RevealObserver />
    </>
  );
}
