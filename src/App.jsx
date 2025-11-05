import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero3D />
        <AboutSection />
        <ProjectsSection />

        {/* Contact / Footer */}
        <section id="contact" className="relative bg-[#07070a] py-20">
          <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-[#07070a] to-transparent" />
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Let’s build something great</h2>
              <p className="mt-3 max-w-2xl text-white/80">
                I’m open to internships, freelance projects, and collaborations. Drop a message and I’ll get back soon.
              </p>
              <div className="mt-6 flex flex-col gap-3 text-sm md:flex-row md:items-center">
                <a
                  href="mailto:you@example.com"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 font-medium text-black hover:bg-white/90"
                >
                  you@example.com
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-2 font-medium text-white hover:bg-white/20"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-2 font-medium text-white hover:bg-white/20"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-white/60">
              <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
              <a href="#hero" className="hover:text-white">Back to top ↑</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
