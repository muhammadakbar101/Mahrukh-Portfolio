import React, { useEffect, useRef } from 'react';

const COLS = 80;
const LEVELS = 11;
const MAJOR_EVERY = 4;
const POINTER_HILL = 0.55;
const TIME_SPEED = 4e-5;

function createNoise(seed: number) {
  const perm = new Uint8Array(512);
  let n = seed;
  const rand = () => ((n = (n * 1664525 + 1013904223) >>> 0) / 4294967296);
  const idx = [...Array(256).keys()].sort(() => rand() - 0.5);
  for (let i = 0; i < 512; i++) perm[i] = idx[i & 255];
  const vals = Float32Array.from({ length: 256 }, rand);
  const smooth = (t: number) => t * t * (3 - 2 * t);
  const sample = (x: number, y: number) => vals[perm[(x & 255) + perm[y & 255]]];
  const value = (x: number, y: number) => {
    const ix = Math.floor(x);
    const iy = Math.floor(y);
    const fx = smooth(x - ix);
    const fy = smooth(y - iy);
    const a = sample(ix, iy);
    const b = sample(ix + 1, iy);
    const c = sample(ix, iy + 1);
    const d = sample(ix + 1, iy + 1);
    return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
  };
  return (x: number, y: number) => value(x, y) * 0.7 + value(x * 2.1 + 17, y * 2.1 + 31) * 0.3;
}

export const TopoCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const motionEnabled = document.documentElement.classList.contains('motion');
    const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
    const noise = createNoise(1337);

    let width = 0;
    let height = 0;
    let cell = 0;
    let rows = 0;
    let field = new Float32Array(0);
    const ptr = { x: -1e4, y: -1e4, tx: -1e4, ty: -1e4, h: 0, th: 0 };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      cell = width / COLS;
      rows = Math.ceil(height / cell) + 1;
      field = new Float32Array(81 * (rows + 1));
    };

    const drawLevel = (level: number) => {
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < COLS; c++) {
          const i = field[r * 81 + c];
          const o = field[r * 81 + c + 1];
          const s = field[(r + 1) * 81 + c + 1];
          const l = field[(r + 1) * 81 + c];
          const mask = (i > level ? 1 : 0) | ((o > level ? 1 : 0) << 1) | ((s > level ? 1 : 0) << 2) | ((l > level ? 1 : 0) << 3);
          if (mask === 0 || mask === 15) continue;

          const x = c * cell;
          const y = r * cell;
          const topX = x + (cell * (level - i)) / (o - i);
          const topY = y;
          const rightX = x + cell;
          const rightY = y + (cell * (level - o)) / (s - o);
          const botX = x + (cell * (level - l)) / (s - l);
          const botY = y + cell;
          const leftX = x;
          const leftY = y + (cell * (level - i)) / (l - i);

          switch (mask) {
            case 1:
            case 14:
              ctx.moveTo(leftX, leftY);
              ctx.lineTo(topX, topY);
              break;
            case 2:
            case 13:
              ctx.moveTo(topX, topY);
              ctx.lineTo(rightX, rightY);
              break;
            case 3:
            case 12:
              ctx.moveTo(leftX, leftY);
              ctx.lineTo(rightX, rightY);
              break;
            case 4:
            case 11:
              ctx.moveTo(rightX, rightY);
              ctx.lineTo(botX, botY);
              break;
            case 6:
            case 9:
              ctx.moveTo(topX, topY);
              ctx.lineTo(botX, botY);
              break;
            case 7:
            case 8:
              ctx.moveTo(leftX, leftY);
              ctx.lineTo(botX, botY);
              break;
            case 5:
              ctx.moveTo(leftX, leftY);
              ctx.lineTo(topX, topY);
              ctx.moveTo(rightX, rightY);
              ctx.lineTo(botX, botY);
              break;
            case 10:
              ctx.moveTo(topX, topY);
              ctx.lineTo(rightX, rightY);
              ctx.moveTo(botX, botY);
              ctx.lineTo(leftX, leftY);
              break;
          }
        }
      }
    };

    const draw = (now: number) => {
      const t = now * TIME_SPEED;
      let min = Infinity;
      let max = -Infinity;
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= COLS; c++) {
          let v = noise(c * 0.045 + t, r * 0.045 - t * 0.6);
          if (ptr.h > 0.001) {
            const dx = c * cell - ptr.x;
            const dy = r * cell - ptr.y;
            v += ptr.h * Math.exp(-(dx * dx + dy * dy) / 48400);
          }
          const scaled = v * LEVELS;
          field[r * 81 + c] = scaled;
          if (scaled < min) min = scaled;
          if (scaled > max) max = scaled;
        }
      }

      ctx.clearRect(0, 0, width, height);
      for (let pass = 0; pass < 2; pass++) {
        ctx.beginPath();
        for (let lv = Math.ceil(min); lv <= max; lv++) {
          if ((lv % MAJOR_EVERY === 0) === Boolean(pass)) drawLevel(lv);
        }
        ctx.strokeStyle = pass ? 'rgba(90, 99, 48, 0.34)' : 'rgba(90, 99, 48, 0.17)';
        ctx.lineWidth = pass ? 1.4 : 1;
        ctx.stroke();
      }
    };

    resize();
    draw(performance.now());

    let rafId = 0;
    let lastDraw = 0;
    const loop = (now: number) => {
      const moving =
        Math.abs(ptr.tx - ptr.x) + Math.abs(ptr.ty - ptr.y) > 0.5 ||
        Math.abs(ptr.th - ptr.h) > 0.005;
      if (!document.hidden && now - lastDraw >= (moving ? 33 : 160)) {
        lastDraw = now;
        if (ptr.x < -9e3) {
          ptr.x = ptr.tx;
          ptr.y = ptr.ty;
        }
        ptr.x += (ptr.tx - ptr.x) * 0.15;
        ptr.y += (ptr.ty - ptr.y) * 0.15;
        ptr.h += (ptr.th - ptr.h) * 0.08;
        draw(now);
      }
      rafId = requestAnimationFrame(loop);
    };

    if (motionEnabled) {
      rafId = requestAnimationFrame(loop);
    }

    const onResize = () => {
      resize();
      draw(performance.now());
    };
    const onMove = (e: PointerEvent) => {
      ptr.tx = e.clientX;
      ptr.ty = e.clientY;
      ptr.th = POINTER_HILL;
    };
    const onLeave = () => {
      ptr.th = 0;
    };

    window.addEventListener('resize', onResize);
    if (finePointer && motionEnabled) {
      window.addEventListener('pointermove', onMove, { passive: true });
      document.documentElement.addEventListener('pointerleave', onLeave);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="topo" aria-hidden="true" />;
};
