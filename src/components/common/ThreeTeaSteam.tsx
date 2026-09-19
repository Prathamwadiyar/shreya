'use client';

import React, { useEffect, useRef } from 'react';

/**
 * ThreeTeaSteam
 * A lightweight, high-performance particle steam canvas that renders organic,
 * curling vapor rising from hot tea, reacting softly to mouse movement.
 */
export function ThreeTeaSteam({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 300);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const onResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', onResize);

    // Particle system
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      maxAlpha: number;
      life: number;
      maxLife: number;
      oscillationSpeed: number;
      oscillationDistance: number;
      initialX: number;
    }

    const particles: Particle[] = [];
    const maxParticles = 42;

    const createParticle = (): Particle => {
      const startX = width * 0.5 + (Math.random() - 0.5) * 60;
      const startY = height * 0.85;
      const maxLife = 180 + Math.random() * 120;
      return {
        x: startX,
        initialX: startX,
        y: startY,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -(0.8 + Math.random() * 0.9),
        radius: 14 + Math.random() * 18,
        alpha: 0,
        maxAlpha: 0.12 + Math.random() * 0.14,
        life: 0,
        maxLife,
        oscillationSpeed: 0.02 + Math.random() * 0.02,
        oscillationDistance: 15 + Math.random() * 25,
      };
    };

    for (let i = 0; i < maxParticles / 2; i++) {
      const p = createParticle();
      p.life = Math.random() * p.maxLife;
      p.y -= (p.life / p.maxLife) * (height * 0.6);
      particles.push(p);
    }

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      if (particles.length < maxParticles && frame % 5 === 0) {
        particles.push(createParticle());
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;

        // Upward floating motion with gentle sinusoidal drift
        p.y += p.vy;
        p.x = p.initialX + Math.sin(p.life * p.oscillationSpeed) * p.oscillationDistance;
        p.radius += 0.22; // Expands as it rises

        // Fade in, then smoothly fade out
        const progress = p.life / p.maxLife;
        if (progress < 0.2) {
          p.alpha = (progress / 0.2) * p.maxAlpha;
        } else {
          p.alpha = (1 - progress) * p.maxAlpha;
        }

        if (p.life >= p.maxLife || p.y < 0) {
          particles.splice(i, 1);
          continue;
        }

        // Draw soft steam puff with warm amber/cream radiant gradient
        const gradient = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, p.radius
        );
        gradient.addColorStop(0, `rgba(247, 241, 229, ${p.alpha * 0.9})`);
        gradient.addColorStop(0.5, `rgba(228, 179, 99, ${p.alpha * 0.4})`);
        gradient.addColorStop(1, 'rgba(247, 241, 229, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 z-10 ${className}`}
      aria-hidden="true"
    />
  );
}
