import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { events } from '../data/restaurantData';
import { SectionHeading } from './SectionHeading';
import { SmartImage } from './SmartImage';

const now = new Date('2026-07-27T00:00:00Z');

export function EventsSection() {
  const [showAllPast, setShowAllPast] = useState(false);
  const { upcoming, past } = useMemo(() => {
    const upcomingEvents = events.filter((event) => new Date(event.startDate) >= now);
    const pastEvents = events.filter((event) => new Date(event.startDate) < now).sort((left, right) => +new Date(right.startDate) - +new Date(left.startDate));
    return { upcoming: upcomingEvents, past: pastEvents };
  }, []);
  const visiblePast = showAllPast ? past : past.slice(0, 6);

  return (
    <section id="events" className="bg-pine-900/5 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Events" title="Veranstaltungen in einer ruhigen Kartenansicht mit klarer Trennung von kommend und vergangen." description="Die neuesten sechs vergangenen Einträge sind sofort sichtbar, ältere Events erscheinen erst nach Klick." />

        <div className="mt-8 grid gap-8">
          <div>
            <div className="mb-3 flex items-center justify-between gap-4">
              <h3 className="font-display text-2xl text-pine-900">Kommende Veranstaltungen</h3>
            </div>
            {upcoming.length > 0 ? (
              <div className="mt-4 grid gap-5 lg:grid-cols-2">
                {upcoming.map((event) => <EventCard key={event.title + event.dateLabel} event={event} />)}
              </div>
            ) : null}
          </div>

          <div>
            <h3 className="font-display text-2xl text-pine-900">Vergangene Veranstaltungen</h3>
            <div className="mt-4 grid gap-5 lg:grid-cols-2 2xl:grid-cols-3">
              {visiblePast.map((event) => <EventCard key={event.title + event.dateLabel} event={event} />)}
            </div>
            {past.length > 6 ? (
              <div className="mt-6 flex justify-center">
                <button type="button" onClick={() => setShowAllPast((value) => !value)} className="rounded-full border border-pine-900/10 bg-white px-5 py-3 text-sm font-semibold text-pine-900 shadow-soft transition hover:border-gold">
                  {showAllPast ? 'Weniger anzeigen' : 'Mehr anzeigen'}
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function EventCard({ event }: { event: typeof events[number] }) {
  return (
    <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
      <SmartImage src={event.image} fallbackSrc={event.fallbackImage} alt={event.title} className="h-48 w-full object-cover" />
      <div className="p-5">
        <div className="text-xs uppercase tracking-[0.28em] text-gold">{event.dateLabel}</div>
        <h4 className="mt-2 font-display text-2xl text-pine-900">{event.title}</h4>
        <div className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
          {event.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {event.ctaLabel ? (
          <a href={event.ctaHref} className="mt-5 inline-flex rounded-full bg-pine-800 px-5 py-2 text-sm font-semibold text-cream transition hover:bg-pine-700">
            {event.ctaLabel}
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}