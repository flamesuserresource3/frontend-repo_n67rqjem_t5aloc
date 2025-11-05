import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'Neural Notes',
    desc: 'AI‑powered note summarizer with FastAPI backend and React frontend.',
    tags: ['FastAPI', 'React', 'OpenAI'],
  },
  {
    title: 'Campus Connect',
    desc: 'Social platform for clubs and events with real‑time updates.',
    tags: ['MongoDB', 'WebSockets', 'Tailwind'],
  },
  {
    title: 'Visio Render',
    desc: 'Interactive 3D visualizer built with Spline and custom shaders.',
    tags: ['Spline', 'Three.js', 'Framer Motion'],
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 30%'] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <section id="projects" ref={ref} className="relative bg-[#07070a] py-24 text-white">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-black to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2 style={{ y, opacity }} className="text-3xl font-semibold tracking-tight md:text-4xl">
          Featured Projects
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl transition-opacity group-hover:opacity-70" />
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/80">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/10 px-2 py-1 text-xs text-white/80">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between text-sm">
                <a href="#" className="text-cyan-300 hover:text-cyan-200">View case study →</a>
                <span className="text-white/50">2025</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
