import { Mail, Github, Linkedin, Instagram, ArrowUp, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:panaligankingcedrick@gmail.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/KngCd',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/king-cedrick-panaligan-8a6a4534a',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/kng_cdrck',
    },
  ];

  return (
    <footer className="relative border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-100/70 dark:bg-zinc-950/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-zinc-100/70 dark:bg-zinc-950/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-20">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 pb-12 border-b border-zinc-200 dark:border-zinc-800">
          {/* Left column - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
              Let's Create Something <br className="hidden md:inline" />
              <span className="text-zinc-900 dark:text-zinc-100">Amazing</span>
            </h3>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities.
            </p>
          </motion.div>

          {/* Right column - Quick email link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:panaligankingcedrick@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all w-fit"
            >
              <Mail className="w-5 h-5" />
              <span>Get in Touch</span>
            </motion.a>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              Response within 24 hours guaranteed
            </p>
          </motion.div>
        </div>

        {/* Social links and info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">Connect With Me</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.25 + idx * 0.08 }}
                    whileHover={{ scale: 1.05 }}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : '_self'}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="p-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-all duration-200 ease-out hover:text-zinc-900 dark:hover:text-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:focus-visible:outline-zinc-500"
                    title={link.label}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Skills', id: 'skills' },
                { label: 'Projects', id: 'projects' },
                { label: 'Certifications', id: 'certifications' },
                { label: 'Gallery', id: 'gallery' },
              ].map((link) => (
                <motion.button
                  key={link.id}
                  whileHover={{ x: 4 }}
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-left text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-medium"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-8 border-t border-zinc-200 dark:border-zinc-800"
        >
          {/* Copyright and love */}
          <div className="text-center md:text-left space-y-2">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © {currentYear} King Cedrick C. Panaligan. All rights reserved.
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-500 flex items-center justify-center md:justify-start gap-1">
              Made with
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-zinc-500 dark:text-zinc-400"
              >
                <Heart className="w-4 h-4 fill-current" />
              </motion.span>
              using React & Tailwind CSS
            </p>
          </div>

          {/* Back to top button */}
        </motion.div>
      </div>
    </footer>
  );
}