import React, { useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import NeuralBackground from './components/NeuralBackground';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import CertificateModal from './components/CertificateModal';
import Education from './components/Education';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

import './styles/global.css';
import './styles/animations.css';
import './styles/responsive.css';

export default function App() {
  const [activeModalCert, setActiveModalCert] = useState(null);

  useEffect(() => {
    // Global Scroll Observer for .reveal-init elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const revealElements = document.querySelectorAll('.reveal-init');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Preloader />
      <ScrollProgress />
      <CustomCursor />
      <NeuralBackground />
      <Navbar />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Experience onOpenModal={(cert) => setActiveModalCert(cert)} />
        <Certifications onOpenModal={(cert) => setActiveModalCert(cert)} />
        <Education />
        <Projects />
        <Journey />
        <Contact />
      </main>

      <Footer />
      <BackToTop />

      {/* Certificate Lightbox Modal */}
      <CertificateModal
        cert={activeModalCert}
        onClose={() => setActiveModalCert(null)}
      />
    </>
  );
}
