import { useEffect, useRef, useState } from 'react';
import { galleryImages } from '../data/content';
import { FadeIn, SectionLabel } from './shared';
import type { Theme } from '../types';

export function GallerySection({ theme }: { theme: Theme }) {
  const [lightbox, setLightbox] = useState<(typeof galleryImages)[number] | null>(null);
  const [mobileIndex, setMobileIndex] = useState(0);
  const mobileTrackRef = useRef<HTMLDivElement | null>(null);
  const borderColor = theme === 'dark' ? '#242424' : '#E5E5E5';
  const mobileSlides = galleryImages;

  const goToSlide = (nextIndex: number) => {
    const normalizedIndex = (nextIndex + mobileSlides.length) % mobileSlides.length;
    setMobileIndex(normalizedIndex);

    const track = mobileTrackRef.current;
    if (!track) return;

    const wrapper = track.firstElementChild as HTMLElement | null;
    if (!wrapper) return;

    const slide = wrapper.children.item(normalizedIndex) as HTMLElement | null;
    if (!slide) return;

    const targetLeft =
      slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2;

    track.scrollTo({
      left: Math.max(targetLeft, 0),
      behavior: 'smooth',
    });
  };

  const prevSlide = () => goToSlide(mobileIndex - 1);
  const nextSlide = () => goToSlide(mobileIndex + 1);

  useEffect(() => {
    if (!lightbox) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightbox(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setMobileIndex((currentIndex) => {
        const next = (currentIndex + 1) % mobileSlides.length;

        const track = mobileTrackRef.current;
        if (!track) return next;

        const wrapper = track.firstElementChild as HTMLElement | null;
        if (!wrapper) return next;

        const slide = wrapper.children.item(next) as HTMLElement | null;
        if (!slide) return next;

        const targetLeft =
          slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2;

        track.scrollTo({
          left: Math.max(targetLeft, 0),
          behavior: 'smooth',
        });

        return next;
      });
    }, 3800);

    return () => window.clearInterval(timer);
  }, [mobileSlides.length]);
  
  return (
    <section id="gallery" className="py-32 px-6 border-t" style={{ borderColor }}>
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <SectionLabel>Gallery</SectionLabel>
          <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight mt-2 mb-14">Moments</h2>
        </FadeIn>

        <div className="md:hidden relative -mx-6 px-6">
          <div className="overflow-x-auto scrollbar-none pb-2" ref={mobileTrackRef} style={{ scrollSnapType: 'x mandatory' }}>
            <div className="flex gap-4 w-max">
              {mobileSlides.map((image, index) => (
                <FadeIn key={image.id} delay={index * 0.03} className="shrink-0 snap-start w-[88vw] max-w-[88vw] sm:w-[72vw] sm:max-w-[72vw]">
                  <GalleryItem image={image} theme={theme} onClick={() => setLightbox(image)} mobile />
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-8 pointer-events-none">
            <button
              type="button"
              onClick={prevSlide}
              className="pointer-events-auto h-10 w-10 rounded-full border flex items-center justify-center backdrop-blur-md transition-all duration-500 hover:-translate-y-0.5 hover:shadow-md"
              style={{ backgroundColor: theme === 'dark' ? 'rgba(14,14,14,0.9)' : 'rgba(255,255,255,0.92)', borderColor }}
              aria-label="Previous gallery image"
            >
              <span className="text-sm">‹</span>
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="pointer-events-auto h-10 w-10 rounded-full border flex items-center justify-center backdrop-blur-md transition-all duration-500 hover:-translate-y-0.5 hover:shadow-md"
              style={{ backgroundColor: theme === 'dark' ? 'rgba(14,14,14,0.9)' : 'rgba(255,255,255,0.92)', borderColor }}
              aria-label="Next gallery image"
            >
              <span className="text-sm">›</span>
            </button>
          </div>
        </div>

        <div className="hidden md:block columns-2 xl:columns-3 gap-4">
          {galleryImages.map((image, index) => (
            <FadeIn key={image.id} delay={index * 0.04}>
              <GalleryItem image={image} theme={theme} onClick={() => setLightbox(image)} />
            </FadeIn>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8" style={{ backgroundColor: 'rgba(0,0,0,0.93)', backdropFilter: 'blur(16px)' }} onClick={() => setLightbox(null)}>
          <div className="relative max-w-4xl w-full" style={{ maxHeight: '85vh' }} onClick={(event) => event.stopPropagation()}>
            <img src={lightbox.src ?? `/assets/${lightbox.id}.jpg`} alt={lightbox.alt} className="rounded-2xl object-cover w-full" style={{ maxHeight: '80vh' }} />
            <div className="absolute bottom-4 left-4 text-white text-sm font-medium opacity-60 px-3 py-1.5 rounded-lg" style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }}>
              {lightbox.alt}
            </div>
            <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-white text-sm transition-opacity hover:opacity-70" style={{ backgroundColor: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

function GalleryItem({ image, theme, onClick, mobile = false }: { image: (typeof galleryImages)[number]; theme: Theme; onClick: () => void; mobile?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-2xl cursor-pointer mb-4 break-inside-avoid border" style={{ backgroundColor: theme === 'dark' ? '#0e0e0e' : '#f0f0f0', borderColor: theme === 'dark' ? '#242424' : '#e5e5e5' }} onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <img src={image.src ?? `/assets/${image.id}.jpg`} alt={image.alt} className="w-full object-cover block" style={{ height: mobile ? '52vh' : `${image.h}px`, minHeight: mobile ? '320px' : undefined, transform: hovered ? 'scale(1.04)' : 'scale(1)', transition: 'transform 0.55s cubic-bezier(0.16,1,0.3,1), opacity 0.35s ease' }} />
      <div className="absolute inset-0 flex items-end p-4" style={{ background: 'linear-gradient(transparent 35%, rgba(0,0,0,0.6))', opacity: hovered ? 1 : 0, transition: 'opacity 0.35s ease' }}>
        <span className="text-white text-sm font-medium">{image.alt}</span>
      </div>
    </div>
  );
}
