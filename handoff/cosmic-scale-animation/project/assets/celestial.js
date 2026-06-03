/* =========================================================================
   celestial.js — sprite-based cosmic animation
   Shaded ink spheres of varying sizes orbiting like a Renaissance armillary
   / Copernican diagram, with drawing orbit rings, stardust, and orbiting
   letterspaced text labels. Assembles (intro), settles, then recedes into a
   faint ambient layer driven by scroll. Monochrome on parchment.
   ========================================================================= */
(function () {
  const canvas = document.getElementById('cosmos');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ink + parchment in rgb
  const INK = [33, 29, 24];
  const LIGHT = [248, 244, 236];

  let W = 0, H = 0, DPR = 1, CX = 0, CY = 0, SCALE = 1;
  const ink = (a) => `rgba(${INK[0]},${INK[1]},${INK[2]},${a})`;

  // ----- scene definition (positions are unit-space, scaled to viewport) ---
  // central luminary + a family of orbiting bodies of various sizes.
  const ORBITS = [
    { r: 0.085, speed: 0.42, size: 9,  phase: 0.4,  moon: null },
    { r: 0.150, speed: 0.31, size: 15, phase: 2.1,  moon: { r: 24, size: 4, speed: 2.6 } },
    { r: 0.235, speed: 0.205, size: 26, phase: 4.0, moon: { r: 40, size: 6, speed: 1.7 } },
    { r: 0.330, speed: 0.150, size: 12, phase: 1.0,  moon: null },
    { r: 0.430, speed: 0.108, size: 34, phase: 5.2, moon: { r: 54, size: 7, speed: 1.2 } },
    { r: 0.540, speed: 0.074, size: 18, phase: 3.3, moon: null },
  ];

  // orbiting text labels (the "text-based" layer) — Renaissance disciplines
  const LABELS = [
    { text: 'ASTRONOMIA', r: 0.300, speed: 0.061, phase: 0.0 },
    { text: 'GEOMETRIA',  r: 0.395, speed: -0.049, phase: 2.4 },
    { text: 'MVSICA',     r: 0.485, speed: 0.040, phase: 4.3 },
    { text: 'PICTVRA',    r: 0.585, speed: -0.033, phase: 1.2 },
    { text: 'INGEGNO',    r: 0.660, speed: 0.027, phase: 5.5 },
  ];

  let stars = [];
  function seedStars() {
    stars = [];
    const n = Math.round((W * H) / 14000);
    for (let i = 0; i < n; i++) {
      stars.push({
        x: Math.random(), y: Math.random(),
        s: Math.random() * 1.4 + 0.3,
        a: Math.random() * 0.5 + 0.12,
        tw: Math.random() * Math.PI * 2,
        tws: Math.random() * 1.6 + 0.4,
      });
    }
  }

  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W * DPR; canvas.height = H * DPR;
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    CX = W / 2; CY = H * 0.46;
    SCALE = Math.min(W, H);          // unit -> px reference
    seedStars();
  }

  // ----- draw a shaded sphere (engraved look) -----------------------------
  function sphere(x, y, r, alpha) {
    if (r < 0.4 || alpha <= 0) return;
    const lx = x - r * 0.4, ly = y - r * 0.4;
    const g = ctx.createRadialGradient(lx, ly, r * 0.1, x, y, r);
    g.addColorStop(0, `rgba(${LIGHT[0]},${LIGHT[1]},${LIGHT[2]},${0.95 * alpha})`);
    g.addColorStop(0.32, `rgba(${INK[0] + 70},${INK[1] + 64},${INK[2] + 56},${0.9 * alpha})`);
    g.addColorStop(1, `rgba(${INK[0]},${INK[1]},${INK[2]},${alpha})`);
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = g; ctx.fill();
    // crisp terminator ring
    ctx.lineWidth = 1; ctx.strokeStyle = ink(0.5 * alpha); ctx.stroke();
  }

  // ----- intro / scroll state ---------------------------------------------
  const INTRO_MS = reduce ? 1 : 2600;
  let start = performance.now();
  let mx = 0, my = 0, tmx = 0, tmy = 0;       // mouse parallax (target/eased)
  let scrollFade = 1;                          // 1 hero, -> ambient when scrolled

  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
  function easeInOut(t) { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }

  if (!reduce) {
    window.addEventListener('mousemove', (e) => {
      tmx = (e.clientX / W - 0.5);
      tmy = (e.clientY / H - 0.5);
    }, { passive: true });
  }

  function computeScrollFade() {
    const hero = document.querySelector('.hero');
    const h = hero ? hero.offsetHeight : H;
    const y = window.scrollY || window.pageYOffset;
    // 1 at top, eases to ~0.16 ambient by the time hero is scrolled past
    const t = Math.min(1, y / (h * 0.85));
    scrollFade = 1 - easeInOut(t) * 0.86;       // 1 -> 0.14
  }
  window.addEventListener('scroll', computeScrollFade, { passive: true });

  // ----- main loop ---------------------------------------------------------
  function frame(now) {
    const t = (now - start) / 1000;
    const introT = Math.min(1, (now - start) / INTRO_MS);
    const e = easeOutCubic(introT);

    // ease mouse parallax
    mx += (tmx - mx) * 0.05; my += (tmy - my) * 0.05;
    const par = 26 * scrollFade;
    const ox = CX + mx * par, oy = CY + my * par;

    // global opacity: fade in on intro, recede on scroll
    const globalA = e * scrollFade;

    ctx.clearRect(0, 0, W, H);
    if (globalA <= 0.001) { requestAnimationFrame(frame); return; }

    // --- stardust ---
    for (const s of stars) {
      const tw = 0.6 + 0.4 * Math.sin(t * s.tws + s.tw);
      ctx.beginPath();
      ctx.arc(s.x * W, s.y * H, s.s, 0, Math.PI * 2);
      ctx.fillStyle = ink(s.a * tw * globalA * 0.8);
      ctx.fill();
    }

    // --- orbit guide rings (draw themselves during intro) ---
    ctx.save();
    for (let i = 0; i < ORBITS.length; i++) {
      const o = ORBITS[i];
      const rr = o.r * SCALE;
      // each ring sweeps in, staggered
      const local = Math.max(0, Math.min(1, (introT - i * 0.06) / 0.5));
      const sweep = easeOutCubic(local) * Math.PI * 2;
      if (sweep <= 0) continue;
      ctx.beginPath();
      ctx.arc(ox, oy, rr, -Math.PI / 2, -Math.PI / 2 + sweep);
      ctx.lineWidth = 1;
      ctx.strokeStyle = ink(0.14 * globalA);
      ctx.stroke();
    }
    ctx.restore();

    // --- central luminary ---
    const sunR = (14 + 30 * e) * (0.9 + 0.04 * Math.sin(t * 0.6));
    // soft halo
    const halo = ctx.createRadialGradient(ox, oy, sunR * 0.4, ox, oy, sunR * 4);
    halo.addColorStop(0, ink(0.10 * globalA));
    halo.addColorStop(1, ink(0));
    ctx.beginPath(); ctx.arc(ox, oy, sunR * 4, 0, Math.PI * 2); ctx.fillStyle = halo; ctx.fill();
    sphere(ox, oy, sunR, globalA);
    // thin engraved rings around the sun
    for (let k = 1; k <= 2; k++) {
      ctx.beginPath(); ctx.arc(ox, oy, sunR + 7 * k, 0, Math.PI * 2);
      ctx.lineWidth = 1; ctx.strokeStyle = ink(0.10 * globalA); ctx.stroke();
    }

    // --- orbiting bodies ---
    for (let i = 0; i < ORBITS.length; i++) {
      const o = ORBITS[i];
      const rr = o.r * SCALE;
      const ang = o.phase + t * o.speed;
      const bx = ox + Math.cos(ang) * rr;
      const by = oy + Math.sin(ang) * rr;
      const bodyA = globalA * Math.max(0, Math.min(1, (introT - 0.1 - i * 0.05) / 0.4));
      sphere(bx, by, o.size * (0.6 + 0.4 * e), bodyA);
      // a little tick on the orbit
      if (o.moon) {
        const mang = ang * 1.0 + t * o.moon.speed;
        const mx2 = bx + Math.cos(mang) * o.moon.r;
        const my2 = by + Math.sin(mang) * o.moon.r;
        // faint moon-orbit
        ctx.beginPath(); ctx.arc(bx, by, o.moon.r, 0, Math.PI * 2);
        ctx.lineWidth = 1; ctx.strokeStyle = ink(0.08 * bodyA); ctx.stroke();
        sphere(mx2, my2, o.moon.size, bodyA);
      }
    }

    // --- orbiting text labels ---
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    for (let i = 0; i < LABELS.length; i++) {
      const L = LABELS[i];
      const rr = L.r * SCALE;
      const ang = L.phase + t * L.speed;
      const lx = ox + Math.cos(ang) * rr;
      const ly = oy + Math.sin(ang) * rr * 0.92;
      const labelA = globalA * Math.max(0, Math.min(1, (introT - 0.3 - i * 0.07) / 0.4));
      if (labelA <= 0.01) continue;
      const fs = Math.max(9, Math.min(13, SCALE * 0.012));
      ctx.save();
      ctx.translate(lx, ly);
      ctx.font = `600 ${fs}px 'Helvetica Neue', Helvetica, Arial, sans-serif`;
      ctx.fillStyle = ink(0.5 * labelA);
      // letterspacing manually
      const txt = L.text; const ls = fs * 0.28;
      let total = 0; const widths = [];
      for (const c of txt) { const w = ctx.measureText(c).width; widths.push(w); total += w + ls; }
      total -= ls;
      let cx = -total / 2;
      for (let j = 0; j < txt.length; j++) {
        ctx.fillText(txt[j], cx + widths[j] / 2, 0);
        cx += widths[j] + ls;
      }
      ctx.restore();
    }

    requestAnimationFrame(frame);
  }

  resize();
  computeScrollFade();
  window.addEventListener('resize', resize);
  requestAnimationFrame(frame);

  // expose a tiny hook so motion.js can restart intro if needed
  window.__cosmos = { restart() { start = performance.now(); } };
})();
