import { useState } from 'react';

const navItems = [
  { label: 'Startseite', href: '#home' },
  { label: 'Über uns', href: '#about' },
  { label: 'Speisekarte', href: '#menu' },
  { label: 'Getränke', href: '#drinks' },
  { label: 'Events', href: '#events' },
  { label: 'Galerie', href: '#gallery' },
  { label: 'Reservierung', href: '#reservation' },
  { label: 'Services', href: '#services' },
  { label: 'Kontakt', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-[rgba(245,240,230,0.85)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pine-800 text-sm font-semibold text-cream shadow-soft">
            GW
          </div>
          <div>
            <div className="font-display text-2xl leading-none text-pine-900">Grün-Weiß</div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-pine-600">Café-bistro</div>
          </div>
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-pine-900/10 bg-white text-pine-900 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Navigation öffnen"
        >
          <span className="text-xl">☰</span>
        </button>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-pine-900 transition hover:bg-white hover:text-pine-800"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {open ? (
        <div className="border-t border-pine-900/10 bg-cream px-4 py-4 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2 sm:grid-cols-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-pine-900/10 bg-white px-4 py-3 text-sm font-medium text-pine-900"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}