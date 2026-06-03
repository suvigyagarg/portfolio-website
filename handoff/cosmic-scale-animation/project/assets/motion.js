/* =========================================================================
   motion.js — page choreography
   · hero name letter reveal + staggered intro
   · nav dock on scroll
   · scroll-reveal observer
   · writings: asymmetric excerpt-plate reveal on hover, siblings dim
   ========================================================================= */
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- split hero name into animatable characters --------------------- */
  const name = document.querySelector('.hero-name');
  if (name) {
    const words = name.textContent.trim().split(' ');
    name.textContent = '';
    words.forEach((w, wi) => {
      const wordEl = document.createElement('span');
      wordEl.className = 'word';
      [...w].forEach((c) => {
        const ch = document.createElement('span');
        ch.className = 'ch';
        ch.textContent = c;
        wordEl.appendChild(ch);
      });
      name.appendChild(wordEl);
      if (wi < words.length - 1) name.appendChild(document.createTextNode(' '));
    });
  }

  /* ---- intro choreography (gated behind the loader) -------------------- */
  // Text emerges from the background → foreground: it scales up out of a
  // blur, as if rushing toward the viewer (no left-to-right sweep).
  function runIntro() {
    const nameEl = document.querySelector('.hero-name');
    const pop = { duration: 1400, easing: 'cubic-bezier(.18,.74,.24,1)', fill: 'both' };
    if (nameEl) {
      nameEl.style.transformOrigin = '50% 58%';
      nameEl.animate(
        [{ opacity: 0, transform: 'scale(.46)', filter: 'blur(16px)' },
         { opacity: 1, transform: 'scale(1)', filter: 'blur(0)' }],
        { ...pop, delay: 1150 }
      );
    }
    const fadeUps = [
      ['.hero-eyebrow', 900],
      ['.hero-role', 1950],
      ['.hero-intro', 2200],
      ['.scroll-cue', 2550],
    ];
    fadeUps.forEach(([sel, delay]) => {
      const el = document.querySelector(sel);
      if (!el) return;
      el.animate(
        [{ opacity: 0, transform: 'scale(.9)', filter: 'blur(7px)' },
         { opacity: 1, transform: 'scale(1)', filter: 'blur(0)' }],
        { duration: 1100, delay, easing: 'cubic-bezier(.18,.74,.24,1)', fill: 'both' }
      );
    });
  }

  // Load sequence: the loader core focuses first (~1s, CSS), then we lift the
  // veil + bring the cosmos into focus + (re)start the orbital intro, and only
  // then does the text come through.
  function boot() {
    document.body.classList.add('loaded');
    if (window.__cosmos && window.__cosmos.restart) window.__cosmos.restart();
    runIntro();
  }
  if (reduce) {
    document.body.classList.add('loaded');
    document.querySelectorAll('.hero-eyebrow,.hero-role,.hero-intro,.scroll-cue').forEach(el => el.style.opacity = 1);
    document.querySelectorAll('.hero-name .ch').forEach(c => c.style.transform = 'none');
  } else {
    window.addEventListener('load', () => setTimeout(boot, 950));
    // safety: never trap behind the loader if 'load' is delayed
    setTimeout(() => { if (!document.body.classList.contains('loaded')) boot(); }, 2600);
  }

  /* ---- nav dock on scroll --------------------------------------------- */
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('docked', (window.scrollY || 0) > window.innerHeight * 0.5);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- scroll reveal --------------------------------------------------- */
  let ioFired = false;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { ioFired = true; en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  const reveals = [...document.querySelectorAll('.reveal')];
  reveals.forEach((el) => io.observe(el));

  // safety net: in some embedded/preview environments IntersectionObserver
  // never fires. A scroll-driven fallback reveals anything in view; and if the
  // observer still hasn't fired after a grace period, drive reveals manually.
  const revealInView = () => {
    reveals.forEach((el) => {
      if (el.classList.contains('in')) return;
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) el.classList.add('in');
    });
  };
  window.addEventListener('scroll', () => { if (!ioFired) revealInView(); }, { passive: true });
  setTimeout(() => { if (!ioFired) { revealInView(); /* keep listener live for the rest */ } }, 1500);
  // ultimate guard: never let content stay invisible
  setTimeout(() => { if (!ioFired) reveals.forEach((el) => el.classList.add('in')); }, 4000);

  /* ---- writings: asymmetric hover reveal ------------------------------ */
  const list = document.querySelector('.writing-list');
  const plate = document.querySelector('.writing-plate');
  if (list && plate) {
    const plImg = plate.querySelector('.pl-img');
    const plExcerpt = plate.querySelector('.pl-excerpt');
    const plBody = plate.querySelector('.pl-body');
    const plTag = plate.querySelector('.pl-tag');
    const entries = [...list.querySelectorAll('.entry')];

    entries.forEach((entry, i) => {
      entry.addEventListener('mouseenter', () => {
        list.classList.add('hovering');
        entries.forEach((e) => e.classList.remove('active'));
        entry.classList.add('active');

        plExcerpt.textContent = entry.dataset.excerpt || '';
        if (plBody) plBody.textContent = entry.dataset.lorem || '';
        plTag.textContent = entry.dataset.tag || '';

        // asymmetric placement: alternate sides + vertical offset, anchored to row
        const listRect = list.getBoundingClientRect();
        const rowRect = entry.getBoundingClientRect();
        const top = rowRect.top - listRect.top - 40;
        const side = i % 2 === 0 ? 'right' : 'left';
        plate.style.top = Math.max(-30, top) + 'px';
        if (side === 'right') {
          plate.style.right = (i % 4 === 0 ? '2%' : '8%');
          plate.style.left = 'auto';
          plate.style.setProperty('--tilt', '2.4deg');
        } else {
          plate.style.left = (i % 4 === 1 ? '4%' : '10%');
          plate.style.right = 'auto';
          plate.style.setProperty('--tilt', '-2.6deg');
        }
        plate.classList.add('show');
      });
    });

    list.addEventListener('mouseleave', () => {
      list.classList.remove('hovering');
      entries.forEach((e) => e.classList.remove('active'));
      plate.classList.remove('show');
    });
  }

  /* ---- current year in colophon --------------------------------------- */
  const yr = document.querySelector('[data-year]');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---- demo plates: screenshot poster + hover pop-out video ----------- */
  const YT = 'https://www.youtube-nocookie.com/embed/';
  const thumb = (id) => 'https://img.youtube.com/vi/' + id + '/maxresdefault.jpg';
  document.querySelectorAll('.plate[data-video]').forEach((pl) => {
    const id = pl.dataset.video;
    // resting state: a real screenshot of the clip (kept monochrome via CSS)
    const poster = document.createElement('img');
    poster.className = 'poster';
    poster.alt = 'demo screenshot';
    poster.loading = 'lazy';
    poster.referrerPolicy = 'no-referrer';
    poster.src = thumb(id);
    poster.onerror = () => { poster.onerror = null; poster.src = 'https://img.youtube.com/vi/' + id + '/hqdefault.jpg'; };
    pl.insertBefore(poster, pl.firstChild);

    let frame = null, timer = null;
    pl.addEventListener('mouseenter', () => {
      if (frame) return;
      timer = setTimeout(() => {
        frame = document.createElement('iframe');
        frame.className = 'vid';
        frame.setAttribute('frameborder', '0');
        frame.allow = 'autoplay; encrypted-media; picture-in-picture';
        frame.src = YT + id + '?autoplay=1&mute=1&controls=0&loop=1&playlist=' + id +
          '&modestbranding=1&rel=0&playsinline=1&showinfo=0&disablekb=1';
        pl.appendChild(frame);
        requestAnimationFrame(() => pl.classList.add('playing'));
      }, 170);
    });
    pl.addEventListener('mouseleave', () => {
      clearTimeout(timer);
      pl.classList.remove('playing');
      if (frame) { const f = frame; frame = null; setTimeout(() => f.remove(), 550); }
    });
  });

  /* ---- contact form: graceful demo submit ----------------------------- */
  const form = document.getElementById('contact-form');
  const formDone = document.getElementById('form-done');
  if (form && formDone) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      formDone.classList.add('show');
    });
  }
})();
