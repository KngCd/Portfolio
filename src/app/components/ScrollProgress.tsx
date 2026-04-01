import { motion, useScroll } from 'motion/react';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-zinc-900 dark:bg-zinc-100 origin-left z-[100]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
