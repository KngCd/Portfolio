import { motion, useInView } from 'motion/react';
import { useRef, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
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
  ];

  return (
    <section
      id="gallery"
      ref={ref}
      className="flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto py-12 md:py-14"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-8"
      >
        Gallery
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="-mt-4 mb-8 text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed"
      >
        A few snapshots from my journey—moments that shaped how I learn, build, and grow.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        {/* Carousel Container */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-square overflow-hidden rounded-2xl shadow-xl mx-2"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-white/90 dark:bg-zinc-800/90 hover:bg-white dark:hover:bg-zinc-700 transition-all shadow-lg hover:scale-110"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-zinc-900 dark:text-zinc-50" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-white/90 dark:bg-zinc-800/90 hover:bg-white dark:hover:bg-zinc-700 transition-all shadow-lg hover:scale-110"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-zinc-900 dark:text-zinc-50" />
        </button>
      </motion.div>
    </section>
  );
}