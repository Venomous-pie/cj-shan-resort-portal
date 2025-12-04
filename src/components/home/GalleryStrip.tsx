import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage1 from '@/assets/hero-resort-1.jpg';
import heroImage2 from '@/assets/hero-resort-2.jpg';
import galleryDining from '@/assets/gallery-dining.jpg';
import galleryKayak from '@/assets/gallery-kayak.jpg';
import gallerySpa from '@/assets/gallery-spa.jpg';
import roomHoneymoon from '@/assets/room-honeymoon.jpg';

const galleryImages = [
  { src: heroImage1, alt: 'Beachfront cabanas at sunset', caption: 'Your Private Paradise' },
  { src: galleryDining, alt: 'Oceanfront dining experience', caption: 'Taste the Sea' },
  { src: heroImage2, alt: 'Infinity pool with ocean view', caption: 'Endless Horizons' },
  { src: galleryKayak, alt: 'Kayaking adventures', caption: 'Island Adventures' },
  { src: gallerySpa, alt: 'Relaxing spa treatment', caption: 'Rejuvenate' },
  { src: roomHoneymoon, alt: 'Overwater bungalow sunset', caption: 'Romance Awaits' },
];

const GalleryStrip = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-forest relative overflow-hidden">
      {/* Top Wave */}
      <svg
        className="absolute top-0 left-0 w-full h-16"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C480,0 960,60 1440,0 L1440,0 L0,0 Z"
          fill="hsl(40, 47%, 91%)"
        />
      </svg>

      <div className="container mx-auto px-6 lg:px-12 mb-12 mt-8">
        <div className="flex items-end justify-between">
          <div>
            <span className="font-display italic text-palm text-lg">~ Captured Moments ~</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-sand mt-3">
              Experience the Resort
            </h2>
          </div>
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full bg-sand/10 border border-sand/30 flex items-center justify-center text-sand hover:bg-sand/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-sand/10 border border-sand/30 flex items-center justify-center text-sand hover:bg-sand/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Scroll */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto custom-scroll pb-8 px-6 lg:px-12 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'thin' }}
      >
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[300px] md:w-[400px] lg:w-[500px] snap-center group relative overflow-hidden rounded-organic"
            style={{
              height: index % 2 === 0 ? '350px' : '400px',
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <span className="font-display text-2xl text-sand">{image.caption}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryStrip;
