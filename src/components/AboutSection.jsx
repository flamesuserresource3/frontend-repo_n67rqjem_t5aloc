import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 40%'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -20]);
  const y2 = useTransform(scrollYProgress, [0, 1], [60, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-gradient-to-b from-black to-[#07070a] py-24 text-white">
      <div className="pointer-events-none absolute -left-10 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <motion.div style={{ y: y1, opacity }}>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">About Me</h2>
          <p className="mt-4 text-white/80">
            I’m a Computer Science undergrad passionate about full‑stack development, graphics, and human‑centered design. I love bringing ideas to life with clean design, thoughtful animations, and scalable systems.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-white/80 md:grid-cols-3">
            <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">React + Vite</li>
            <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Node / Python</li>
            <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">FastAPI</li>
            <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">MongoDB</li>
            <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Framer Motion</li>
            <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Three / Spline</li>
          </ul>
        </motion.div>
        <motion.div style={{ y: y2, opacity }} className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-2xl">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-white/60">Degree</p>
              <p className="font-medium">B.Tech, Computer Science</p>
            </div>
            <div>
              <p className="text-white/60">Focus</p>
              <p className="font-medium">Web, AI, 3D Interfaces</p>
            </div>
            <div>
              <p className="text-white/60">Location</p>
              <p className="font-medium">Your City, Country</p>
            </div>
            <div>
              <p className="text-white/60">Looking for</p>
              <p className="font-medium">Internships & Projects</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
