import { motion } from 'framer-motion';
import { galleryImages } from '../data/restaurantData';
import { SectionHeading } from './SectionHeading';
import { SmartImage } from './SmartImage';

export function GallerySection() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <SectionHeading eyebrow="Galerie" title="Stimmungsvolle Bildwelt für Restaurant, Terrasse, Küche und Atmosphäre." description="Die Galerie zeigt die wichtigsten Eindrücke in einem hochwertigen, editorischen Raster." />
      <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {galleryImages.map((image, index) => (
          <motion.figure key={image.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.02 }} className="overflow-hidden rounded-[1.5rem] shadow-soft">
            <SmartImage src={image.image} alt={image.title} className="h-56 w-full object-cover transition duration-700 hover:scale-[1.03]" />
            <figcaption className="bg-white px-5 py-4 text-sm font-medium text-pine-900">{image.title}</figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}