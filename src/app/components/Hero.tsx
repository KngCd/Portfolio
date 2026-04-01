import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

const PROFILE_IMAGE_SRC = '/assets/Formal.jpg';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto relative pt-24 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-900/5 dark:from-zinc-50/10 dark:to-zinc-950/10 rounded-full blur-3xl" />
            <img
              src={PROFILE_IMAGE_SRC}
              alt="King Cedrick C. Panaligan"
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-zinc-200 dark:border-zinc-800 shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 order-2 lg:order-1"
        >
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 tracking-wider uppercase"
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight"
            >
              King Cedrick C. Panaligan
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-zinc-800 dark:text-zinc-200 font-semibold"
            >
              Aspiring IT Professional
            </motion.h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed"
          >
            Driven by a passion for technology and innovation, I'm dedicated to creating meaningful solutions 
            that make a positive impact. I believe in leveraging technology to solve real-world problems and 
            contribute to building a better digital future.
          </motion.p>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToSection('skills')}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2"
        aria-label="Scroll down"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-zinc-400" />
      </motion.button>
    </section>
  );
}