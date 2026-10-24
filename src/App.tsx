import { useEffect, useState } from 'react';
import { findSitePage } from './content/site-pages';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { FeatureShowcase } from './components/FeatureShowcase';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { InfoPage } from './components/InfoPage';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { PlansSection } from './components/PlansSection';

function HomePage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.documentElement.classList.add('reveal-ready');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    const observeRevealTargets = (root: ParentNode) => {
      if (root instanceof HTMLElement && root.matches('[data-reveal]')) {
        observer.observe(root);
      }
      root.querySelectorAll('[data-reveal]').forEach((target) => observer.observe(target));
    };

    observeRevealTargets(document);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) observeRevealTargets(node);
        });
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      document.documentElement.classList.remove('reveal-ready');
    };
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <>
      <a href="#conteudo" className="skip-link">Ir para o conteúdo</a>
      <div className="fixed left-0 top-0 z-[60] h-0.5 bg-primary-500 transition-[width] duration-100" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />
      <Header />
      <main id="conteudo">
        <Hero />
        <FeatureShowcase />
        <HowItWorks />
        <PlansSection />
        <AboutSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const page = findSitePage(window.location.pathname);
  if (page) return <InfoPage page={page} />;
  return <HomePage />;
}
