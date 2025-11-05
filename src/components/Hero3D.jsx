import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero3D() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative h-screen w-full overflow-hidden bg-black">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Atmospheric gradients (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute right-10 top-20 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl" />
      </div>

      {/* Content with parallax */}
      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-widest text-white/70">B.Tech • Computer Science</p>
        <h1 className="bg-gradient-to-r from-white via-cyan-200 to-fuchsia-200 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-7xl">
          Hi, I’m Your Name
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-lg text-white/80">
          I build delightful, performant experiences across web and AI. Explore my work below—scroll to see the depth with subtle parallax motion.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="#projects" className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black hover:bg-white/90">View Projects</a>
          <a href="#contact" className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium text-white hover:bg-white/20">Contact</a>
        </div>
      </motion.div>

      {/* Bottom gradient fade to signal scroll */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
