import { motion, useInView } from 'motion/react';
import { useRef, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const images = [
    { src: '/assets/one.jpg', alt: 'Gallery Image 1' },
    { src: '/assets/two.jpg', alt: 'Gallery Image 2' },
    { src: '/assets/three.JPG', alt: 'Gallery Image 3' },
    { src: '/assets/four.jpg', alt: 'Gallery Image 4' },
    { src: '/assets/five.jpg', alt: 'Gallery Image 5' },
    { src: '/assets/six.jpg', alt: 'Gallery Image 6' },
    { src: '/assets/seven.jpeg', alt: 'Gallery Image 7' },
    { src: '/assets/eight.png', alt: 'Gallery Image 8' },
    { src: '/assets/nine.jpg', alt: 'Gallery Image 9' },
    { src: '/assets/ten.jpg', alt: 'Gallery Image 10' },
    { src: '/assets/eleven.jpg', alt: 'Gallery Image 11' },
    { src: '/assets/twelve.jpg', alt: 'Gallery Image 12' },
    { src: '/assets/thirteen.jpg', alt: 'Gallery Image 13' },
    { src: '/assets/fourteen.jpg', alt: 'Gallery Image 14' },
  ];

  return (
    <section
      id="gallery"
      ref={ref}
      className="flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto py-16 md:py-20 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-zinc-100/70 dark:bg-zinc-950/30 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-zinc-100/70 dark:bg-zinc-950/30 rounded-full blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="space-y-3 mb-10"
      >
        <motion.p
          className="text-sm md:text-base text-zinc-500 tracking-widest uppercase font-semibold"
        >
          Moments & Memories
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50"
        >
          Gallery
        </motion.h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="-mt-4 mb-8 text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed"
      >
        A few snapshots from my journey—moments that shaped how I learn, build, and grow.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        {/* Carousel Container */}
        <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
          <div className="flex gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl mx-2 bg-zinc-100 dark:bg-zinc-900">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-white/85 dark:bg-zinc-900/85 text-xs font-semibold text-zinc-900 dark:text-zinc-50 backdrop-blur-sm">
                    {index + 1}/{images.length}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-x-0 top-1/2 flex items-center justify-between px-4 pointer-events-none">
          <button
            type="button"
            onClick={scrollPrev}
            className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-white/95 dark:bg-zinc-950/95 text-zinc-700 dark:text-zinc-300 shadow-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-200 w-11 h-11"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-white/95 dark:bg-zinc-950/95 text-zinc-700 dark:text-zinc-300 shadow-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-200 w-11 h-11"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}