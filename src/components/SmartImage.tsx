import { useState } from 'react';
import { defaultFallbackImage } from '../data/restaurantData';

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
};

export function SmartImage({ src, alt, className, fallbackSrc = defaultFallbackImage }: SmartImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return <img src={currentSrc} alt={alt} className={className} loading="lazy" decoding="async" onError={() => setCurrentSrc(fallbackSrc)} />;
}