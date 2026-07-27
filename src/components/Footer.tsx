import { restaurant, socialLinks } from '../data/restaurantData';

export function Footer() {
  return (
    <footer className="border-t border-pine-900/10 bg-pine-950 px-4 pb-[calc(2.5rem+env(safe-area-inset-bottom))] pt-10 text-cream sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-display text-3xl">{restaurant.name}</div>
          <p className="mt-2 max-w-xl text-sm leading-7 text-sand/80">Ein moderner Auftritt für das Café-bistro Grün-weiß mit allen wichtigen Bereichen kompakt und hochwertig dargestellt.</p>
        </div>
        <div className="space-y-2 text-sm text-sand/80">
          <div>{restaurant.address.join(' · ')}</div>
          <div>{restaurant.phone} · {restaurant.email}</div>
          <div className="flex flex-wrap gap-4">
            <a href="#about" className="hover:text-white">Über uns</a>
            <a href="#menu" className="hover:text-white">Speisekarte</a>
            <a href="#events" className="hover:text-white">Events</a>
            <a href={socialLinks[0].href} className="hover:text-white">Facebook</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-xs uppercase tracking-[0.28em] text-sand/60">
        Impressum · Datenschutzerklärung · Cookie-Einstellungen
      </div>
    </footer>
  );
}