import { ArrowDown, Code2, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const PROFILE_IMAGE_SRC = '/assets/Formal.jpg';

export function Hero() {
  const [typingText, setTypingText] = useState('Network Engineer');
  const [phraseIndex, setPhraseIndex] = useState(0);

  const roles = [
    'Network Engineer',
    'QA Specialist',
    'IT Support Specialist',
  ];

  const longestRole = roles.reduce((longest, current) =>
    current.length > longest.length ? current : longest,
    roles[0]
  );

  useEffect(() => {
    let charIndex = 0;
    let typingTimeout: ReturnType<typeof setTimeout>;
    let pauseTimeout: ReturnType<typeof setTimeout>;

    const currentRole = roles[phraseIndex];

    const typeRole = () => {
      if (charIndex < currentRole.length) {
        setTypingText(currentRole.slice(0, charIndex + 1));
        charIndex += 1;
        typingTimeout = setTimeout(typeRole, 65);
        return;
      }

      pauseTimeout = setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % roles.length);
      }, 1400);
    };

    setTypingText('');
    typingTimeout = setTimeout(typeRole, 250);

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(pauseTimeout);
    };
  }, [phraseIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto relative pt-20 pb-24 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-zinc-100/70 dark:bg-zinc-900/30 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-zinc-100/70 dark:bg-zinc-900/30 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        {/* Profile Image with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center relative"
        >
          <div className="relative">
            {/* Animated ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-zinc-300 rounded-full blur-lg opacity-30"
              style={{ padding: '2px' }}
            />
            
            {/* Inner glow */}
            <div className="absolute inset-0 bg-zinc-100/60 dark:bg-zinc-950/40 rounded-full blur-2xl" />
            
            {/* Profile Image */}
            <img
              src={PROFILE_IMAGE_SRC}
              alt="King Cedrick C. Panaligan"
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-white dark:border-zinc-900 shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 order-2 lg:order-1"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 text-white border border-zinc-800"
            >
              <Zap className="w-4 h-4 text-white" />
              <span className="text-sm font-medium">Open to Work</span>
            </motion.div>
          </motion.div>

          {/* Main heading */}
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm md:text-base text-zinc-500 tracking-widest uppercase font-semibold"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight"
            >
              King Cedrick C. Panaligan
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-zinc-900 dark:text-zinc-100 font-bold"
            >
              <span className="whitespace-nowrap inline-flex items-center gap-2">
                <span>Aspiring</span>
                <span className="inline-flex items-center gap-1 relative">
                  <span className="inline-flex items-center">
                    {typingText}
                    <span className="inline-block w-0.5 h-[1.05em] bg-zinc-900 dark:bg-zinc-100 animate-pulse" />
                  </span>
                  <span className="invisible">{longestRole}</span>
                </span>
              </span>
            </motion.h2>
          </div>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl leading-relaxed"
          >
            Passionate about building and improving technology solutions that enhance user experiences and operational efficiency. 
            Driven by curiosity, adaptability, and a commitment to learning new tools and technologies in an ever-evolving IT landscape.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 rounded-lg bg-zinc-900 text-white font-semibold hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('skills')}
              className="px-8 py-3 rounded-lg border-2 border-zinc-300 text-zinc-900 dark:text-zinc-100 font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-900/50 transition-all"
            >
              Explore Skills
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection('skills')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-label="Scroll down"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 text-zinc-900 dark:text-zinc-100" />
        </div>
      </motion.button>
    </section>
  );
}