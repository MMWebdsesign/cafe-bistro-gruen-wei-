import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { drinkCategories } from '../data/restaurantData';
import { SectionHeading } from './SectionHeading';

export function DrinksSection() {
  const [openCategory, setOpenCategory] = useState(drinkCategories[0]?.title ?? '');

  return (
    <section id="drinks" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading eyebrow="Getränke" title="Die Getränkekarte ist aufklappbar und auf dem Handy besser lesbar." description="Jede Kategorie öffnet sich bei Klick und zeigt die Getränke sauber untereinander." />

      <div className="mt-8 grid gap-5">
        {drinkCategories.map((category, index) => (
          <motion.article
            key={category.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="glass-panel rounded-[2rem] p-4 shadow-soft"
          >
            <button
              type="button"
              onClick={() => setOpenCategory(openCategory === category.title ? '' : category.title)}
              className="flex w-full items-center justify-between gap-4 rounded-[1.5rem] bg-white px-5 py-4 text-left transition hover:bg-pine-100/60"
            >
              <div>
                <h3 className="font-display text-3xl text-pine-900">{category.title}</h3>
                {category.intro ? <p className="mt-1 max-w-2xl text-sm leading-7 text-slate-600">{category.intro}</p> : null}
              </div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold">
                <span>{openCategory === category.title ? 'Schließen' : 'Öffnen'}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 bg-cream text-lg text-pine-900">
                  {openCategory === category.title ? '−' : '+'}
                </span>
              </div>
            </button>
            <AnimatePresence initial={false}>
              {openCategory === category.title ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={`${category.title}-${item.name}-${item.number ?? item.price}`} className="rounded-[1.5rem] border border-pine-900/10 bg-white p-4">
                        <div className="flex items-start gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-pine-900 text-sm font-semibold text-cream">
                            {item.number ?? itemIndex + 1}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-start justify-between gap-3">
                              <h4 className="text-base font-semibold text-pine-900">{item.name}</h4>
                              <div className="rounded-full bg-pine-100 px-3 py-1 text-sm font-semibold text-pine-900">{item.price}</div>
                            </div>
                            {item.description ? <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-700">{item.description}</p> : null}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.article>
        ))}
      </div>
    </section>
  );
}