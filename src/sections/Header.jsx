import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Button from '../components/Button';
import Container from '../components/Container';

function Header({ siteName, links, cta }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center pt-4 sm:pt-5">
      <Container className="pointer-events-auto flex flex-col gap-2">
        <div className="flex items-center justify-between gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-2xl sm:gap-4 sm:px-6 sm:py-3">
          <button
            type="button"
            onClick={() => scrollTo('#hero')}
            className="shrink-0 text-sm font-semibold tracking-tight text-white sm:text-base"
          >
            {siteName}
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollTo(link.href)}
                className="rounded-full px-3 py-1.5 text-sm text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Button
              variant="primary"
              onClick={() => scrollTo('#hero')}
              className="px-3 py-2 text-xs sm:px-6 sm:py-2.5 sm:text-sm"
            >
              {cta}
            </Button>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/[0.06] p-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-2xl lg:hidden">
            {links.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollTo(link.href)}
                className="rounded-xl px-4 py-3 text-left text-sm text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}
      </Container>
    </header>
  );
}

export default Header;
