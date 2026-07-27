import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuCategories } from '../data/restaurantData';
import { SectionHeading } from './SectionHeading';

export function MenuSection() {
  const [openCategory, setOpenCategory] = useState(menuCategories[0]?.title ?? '');

  return (
    <section id="menu" className="bg-pine-950/5 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Speisekarte" title="Unsere Küche ist nach Kategorien aufklappbar und angenehm zu lesen." description="Tippe eine Kategorie an, um die Gerichte darunter einzublenden." />

        <div className="mt-10 grid gap-6">
          {menuCategories.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-panel rounded-[2rem] p-5 shadow-soft"
            >
              <button
                type="button"
                onClick={() => setOpenCategory(openCategory === category.title ? '' : category.title)}
                className="flex w-full flex-col items-start gap-4 rounded-[1.5rem] bg-white px-4 py-4 text-left transition hover:bg-pine-100/60 sm:flex-row sm:items-center sm:justify-between sm:px-5"
              >
                <div className="w-full min-w-0 sm:w-auto">
                  <h3 className="font-display text-2xl text-pine-900 sm:text-3xl">{category.title}</h3>
                  {category.intro ? <p className="mt-1 max-w-2xl text-sm leading-7 text-slate-600">{category.intro}</p> : null}
                </div>
                <div className="flex w-full items-center justify-center gap-3 text-[10px] uppercase tracking-[0.24em] text-gold sm:w-auto sm:justify-end sm:text-xs sm:tracking-[0.3em]">
                  <span>{openCategory === category.title ? 'Schließen' : 'Öffnen'}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/30 bg-cream text-base text-pine-900 sm:h-9 sm:w-9 sm:text-lg">
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
                    <div className="mt-5 space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <div key={`${category.title}-${item.name}-${item.number ?? item.price}`} className="rounded-[1.5rem] border border-pine-900/10 bg-white p-5">
                          <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pine-900 text-sm font-semibold text-cream">
                              {item.number ?? itemIndex + 1}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-start justify-between gap-3">
                                <h4 className="text-lg font-semibold text-pine-900">{item.name}</h4>
                                <div className="rounded-full bg-pine-100 px-3 py-1 text-sm font-semibold text-pine-900">{item.price}</div>
                              </div>
                              {item.description ? <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-700">{item.description}</p> : null}
                              {item.note ? <p className="mt-2 text-xs uppercase tracking-[0.22em] text-gold">{item.note}</p> : null}
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
      </div>
    </section>
  );
}