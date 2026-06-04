"use client";
import { INK, LABELS, LIGHT, ORBITS } from "@/constants/animation";
import { useEffect, useRef } from "react";

interface Props {
  loaded: boolean;
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}
function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

export default function CosmosCanvas({ loaded }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const startRef = useRef(0);
  const loadedRef = useRef(loaded);

  useEffect(() => {
    loadedRef.current = loaded;
  }, [loaded]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) return;

   
    const INTRO_MS =  2600;

    startRef.current = performance.now();

    let W = 0,
      H = 0,
      DPR = 1,
      CX = 0,
      CY = 0,
      SCALE = 1;
    let stars: {
      x: number;
      y: number;
      s: number;
      a: number;
      tw: number;
      tws: number;
    }[] = [];
    let mx = 0,
      my = 0,
      tmx = 0,
      tmy = 0;
    let scrollFade = 1;
    let rafId = 0;

    const ink = (a: number) => `rgba(${INK[0]},${INK[1]},${INK[2]},${a})`;

    function seedStars() {
      stars = [];
      const n = Math.round((W * H) / 14000);
      for (let i = 0; i < n; i++) {
        stars.push({
          x: Math.random(),
          y: Math.random(),
          s: Math.random() * 1.4 + 0.3,
          a: Math.random() * 0.5 + 0.12,
          tw: Math.random() * Math.PI * 2,
          tws: Math.random() * 1.6 + 0.4,
        });
      }
    }

    function resize() {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas!.width = W * DPR;
      canvas!.height = H * DPR;
      canvas!.style.width = W + "px";
      canvas!.style.height = H + "px";
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      CX = W / 2;
      CY = H * 0.46;
      SCALE = Math.min(W, H);
      seedStars();
    }

    function computeScrollFade() {
      const hero = document.querySelector(
        ".hero-section",
      ) as HTMLElement | null;
      const h = hero ? hero.offsetHeight : H;
      const y = window.scrollY || 0;
      const t = Math.min(1, y / (h * 0.85));
      scrollFade = 1 - easeInOut(t) * 0.86;
    }

    function sphere(x: number, y: number, r: number, alpha: number) {
      if (r < 0.4 || alpha <= 0) return;
      const lx = x - r * 0.4,
        ly = y - r * 0.4;
      const g = ctx.createRadialGradient(lx, ly, r * 0.1, x, y, r);
      g.addColorStop(
        0,
        `rgba(${LIGHT[0]},${LIGHT[1]},${LIGHT[2]},${0.95 * alpha})`,
      );
      g.addColorStop(
        0.32,
        `rgba(${INK[0] + 70},${INK[1] + 64},${INK[2] + 56},${0.9 * alpha})`,
      );
      g.addColorStop(1, `rgba(${INK[0]},${INK[1]},${INK[2]},${alpha})`);
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = ink(0.5 * alpha);
      ctx.stroke();
    }

    function frame(now: number) {
      const elapsed = now - startRef.current;
      const t = elapsed / 1000;
      const introT = Math.min(1, elapsed / INTRO_MS);
      const e = easeOutCubic(introT);

      mx += (tmx - mx) * 0.05;
      my += (tmy - my) * 0.05;
      const par = 26 * scrollFade;
      const ox = CX + mx * par,
        oy = CY + my * par;
      const globalA = e * scrollFade;

      ctx.clearRect(0, 0, W, H);
      if (globalA <= 0.001) {
        rafId = requestAnimationFrame(frame);
        return;
      }


      for (const s of stars) {
        const tw = 0.6 + 0.4 * Math.sin(t * s.tws + s.tw);
        ctx.beginPath();
        ctx.arc(s.x * W, s.y * H, s.s, 0, Math.PI * 2);
        ctx.fillStyle = ink(s.a * tw * globalA * 0.8);
        ctx.fill();
      }

      ctx.save();
      for (let i = 0; i < ORBITS.length; i++) {
        const o = ORBITS[i];
        const rr = o.r * SCALE;
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

      // central luminary
      const sunR = (14 + 30 * e) * (0.9 + 0.04 * Math.sin(t * 0.6));
      const halo = ctx.createRadialGradient(
        ox,
        oy,
        sunR * 0.4,
        ox,
        oy,
        sunR * 4,
      );
      halo.addColorStop(0, ink(0.1 * globalA));
      halo.addColorStop(1, ink(0));
      ctx.beginPath();
      ctx.arc(ox, oy, sunR * 4, 0, Math.PI * 2);
      ctx.fillStyle = halo;
      ctx.fill();
      sphere(ox, oy, sunR, globalA);
      for (let k = 1; k <= 2; k++) {
        ctx.beginPath();
        ctx.arc(ox, oy, sunR + 7 * k, 0, Math.PI * 2);
        ctx.lineWidth = 1;
        ctx.strokeStyle = ink(0.1 * globalA);
        ctx.stroke();
      }

      // orbiting bodies
      for (let i = 0; i < ORBITS.length; i++) {
        const o = ORBITS[i];
        const rr = o.r * SCALE;
        const ang = o.phase + t * o.speed;
        const bx = ox + Math.cos(ang) * rr;
        const by = oy + Math.sin(ang) * rr;
        const bodyA =
          globalA * Math.max(0, Math.min(1, (introT - 0.1 - i * 0.05) / 0.4));
        sphere(bx, by, o.size * (0.6 + 0.4 * e), bodyA);
        if (o.moon) {
          const mang = ang + t * o.moon.speed;
          const mx2 = bx + Math.cos(mang) * o.moon.r;
          const my2 = by + Math.sin(mang) * o.moon.r;
          ctx.beginPath();
          ctx.arc(bx, by, o.moon.r, 0, Math.PI * 2);
          ctx.lineWidth = 1;
          ctx.strokeStyle = ink(0.08 * bodyA);
          ctx.stroke();
          sphere(mx2, my2, o.moon.size, bodyA);
        }
      }

      // orbiting text labels
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (let i = 0; i < LABELS.length; i++) {
        const L = LABELS[i];
        const rr = L.r * SCALE;
        const ang = L.phase + t * L.speed;
        const lx = ox + Math.cos(ang) * rr;
        const ly = oy + Math.sin(ang) * rr * 0.92;
        const labelA =
          globalA * Math.max(0, Math.min(1, (introT - 0.3 - i * 0.07) / 0.4));
        if (labelA <= 0.01) continue;
        const fs = Math.max(8, Math.min(12, SCALE * 0.012));
        ctx.save();
        ctx.translate(lx, ly);
        ctx.font = `400 ${fs}px 'Helvetica Neue', Helvetica, Arial, sans-serif`;
        ctx.fillStyle = ink(0.5 * labelA);
        const txt = L.text,
          ls = fs * 0.28;
        let total = 0;
        const widths: number[] = [];
        for (const c of txt) {
          const w = ctx.measureText(c).width;
          widths.push(w);
          total += w + ls;
        }
        total -= ls;
        let cx = -total / 2;
        for (let j = 0; j < txt.length; j++) {
          ctx.fillText(txt[j], cx + widths[j] / 2, 0);
          cx += widths[j] + ls;
        }
        ctx.restore();
      }

      rafId = requestAnimationFrame(frame);
    }

      window.addEventListener(
        "mousemove",
        (e) => {
          tmx = e.clientX / W - 0.5;
          tmy = e.clientY / H - 0.5;
        },
        { passive: true },
      );


    window.addEventListener("scroll", computeScrollFade, { passive: true });
    window.addEventListener("resize", resize);

    resize();
    computeScrollFade();
    rafId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", computeScrollFade);
    };

  }, []);

  useEffect(() => {
    if (loaded) startRef.current = performance.now();
  }, [loaded]);

  return <canvas id="cosmos" ref={canvasRef} />;
}
