import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
      scrolled ? 'backdrop-blur bg-black/40 border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#hero" onClick={(e) => handleNav(e, 'hero')} className="font-semibold tracking-tight text-white">
          <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">B.Tech CSE</span> • Portfolio
        </a>
        <ul className="hidden gap-6 text-sm text-white/90 md:flex">
          <li><a href="#about" onClick={(e) => handleNav(e, 'about')} className="hover:text-white">About</a></li>
          <li><a href="#projects" onClick={(e) => handleNav(e, 'projects')} className="hover:text-white">Projects</a></li>
          <li><a href="#contact" onClick={(e) => handleNav(e, 'contact')} className="hover:text-white">Contact</a></li>
        </ul>
        <a
          href="#contact"
          onClick={(e) => handleNav(e, 'contact')}
          className="rounded-full bg-white/10 px-4 py-2 text-sm text-white shadow-inner shadow-white/10 ring-1 ring-white/20 hover:bg-white/20"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
