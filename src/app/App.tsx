import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Gallery } from './components/Gallery';
import { Certifications } from './components/Certifications';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      <ScrollProgress />
      <Header />
      <main>
        <div id="home">
          <Hero />
        </div>
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Gallery />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}