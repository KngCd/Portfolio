import { ArrowUp } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import { useState, useEffect } from 'react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsVisible(latest > 500);
    });

    return () => unsubscribe();
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 md:p-4 rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-2xl transition-colors z-50"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
    </motion.button>
  );
}
