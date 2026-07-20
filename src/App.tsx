import { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { EducationSection } from './components/EducationSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { FooterSection } from './components/FooterSection';
import type { Theme } from './types';

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.classList.add('theme-transition');
      document.documentElement.style.colorScheme = nextTheme;
      window.setTimeout(() => document.documentElement.classList.remove('theme-transition'), 600);
      return nextTheme;
    });
  };

  return (
    <div
      className="theme-transition"
      style={{
        backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
        color: theme === 'dark' ? '#ffffff' : '#000000',
        minHeight: '100vh',
        fontFamily: 'var(--font-body)',
        transition: 'background-color 0.6s ease, color 0.6s ease',
      }}
    >
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <HeroSection theme={theme} />
      <SkillsSection theme={theme} />
      <ProjectsSection theme={theme} />
      <ExperienceSection theme={theme} />
      <CertificationsSection theme={theme} />
      <EducationSection theme={theme} />
      <GallerySection theme={theme} />
      <ContactSection theme={theme} />
      <FooterSection theme={theme} />
    </div>
  );
}
