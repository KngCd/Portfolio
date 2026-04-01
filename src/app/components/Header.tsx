import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const LIGHT_LOGO_SRC = '/assets/logo-lightmode-transparent.png';
const DARK_LOGO_SRC = '/assets/logo-darkmode.png';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Education', id: 'education' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Gallery', id: 'gallery' },
] as const;

export function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<(typeof NAV_ITEMS)[number]['id']>('home');

  const updateThemeAssets = (dark: boolean) => {
    const favicon = document.querySelector<HTMLLinkElement>('#favicon');
    const appleTouch = document.querySelector<HTMLLinkElement>('#apple-touch-icon');

    const light = favicon?.dataset.light ?? LIGHT_LOGO_SRC;
    const darkSrc = favicon?.dataset.dark ?? DARK_LOGO_SRC;
    const href = dark ? darkSrc : light;

    if (favicon) favicon.href = href;
    if (appleTouch) appleTouch.href = href;
  };

  useEffect(() => {
    // Check if user has a preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true' || 
      (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setIsDark(isDarkMode);
    if (isDarkMode) document.documentElement.classList.add('dark');
    updateThemeAssets(isDarkMode);

    // Handle scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let ticking = false;

    const computeActiveSection = () => {
      const headerHeight =
        document.querySelector('header')?.getBoundingClientRect().height ?? 0;
      const offset = headerHeight + 24;

      const sections = NAV_ITEMS
        .map((item) => {
          const el = document.getElementById(item.id);
          if (!el) return null;
          return { id: item.id, rect: el.getBoundingClientRect() };
        })
        .filter(
          (v): v is { id: (typeof NAV_ITEMS)[number]['id']; rect: DOMRect } =>
            Boolean(v)
        );

      if (sections.length === 0) return;

      const inView = sections
        .filter((s) => s.rect.top <= offset && s.rect.bottom > offset)
        .sort((a, b) => b.rect.top - a.rect.top);

      if (inView[0]) {
        setActiveSection(inView[0].id);
        return;
      }

      const closest = sections.reduce((best, cur) => {
        const bestDist = Math.abs(best.rect.top - offset);
        const curDist = Math.abs(cur.rect.top - offset);
        return curDist < bestDist ? cur : best;
      });
      setActiveSection(closest.id);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        computeActiveSection();
        ticking = false;
      });
    };

    computeActiveSection();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', next.toString());
    updateThemeAssets(next);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
    setActiveSection(id as (typeof NAV_ITEMS)[number]['id']);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-zinc-900/50 backdrop-blur-md shadow-lg'
          : 'bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm'
      } border-b border-zinc-200 dark:border-zinc-800`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-4 flex items-center justify-between">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-3 text-xl font-bold text-zinc-900 dark:text-zinc-50 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
        >
          <span className="relative h-9 w-9">
            <img
              src={LIGHT_LOGO_SRC}
              alt="Logo"
              className={`absolute inset-0 h-9 w-9 object-contain transition-opacity duration-300 shadow-lg ${
                isDark ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <img
              src={DARK_LOGO_SRC}
              alt="Logo"
              className={`absolute inset-0 h-9 w-9 object-contain transition-opacity duration-300 ${
                isDark ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </span>
        </motion.button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.id)}
              className={`transition-colors font-medium ${
                activeSection === item.id
                  ? 'text-zinc-900 dark:text-zinc-50'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
              }`}
            >
              {item.label}
            </motion.button>
          ))}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Moon className="w-5 h-5 text-zinc-400" />
            ) : (
              <Sun className="w-5 h-5 text-zinc-600" />
            )}
          </motion.button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Moon className="w-5 h-5 text-zinc-400" />
            ) : (
              <Sun className="w-5 h-5 text-zinc-600" />
            )}
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-zinc-900 dark:text-zinc-50" />
            ) : (
              <Menu className="w-6 h-6 text-zinc-900 dark:text-zinc-50" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {NAV_ITEMS.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left transition-colors py-2 font-medium ${
                    activeSection === item.id
                      ? 'text-zinc-900 dark:text-zinc-50'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}