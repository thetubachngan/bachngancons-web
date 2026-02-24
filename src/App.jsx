import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import TrustBar from './sections/TrustBar'
import PainPoints from './sections/PainPoints'
import Solutions from './sections/Solutions'
import Portfolio from './sections/Portfolio'
import Process from './sections/Process'
import KnowledgeHub from './sections/KnowledgeHub'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import FinalCTA from './sections/FinalCTA'
import Footer from './sections/Footer'

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // 1. Initial Hero Reveal
    const tl = gsap.timeline();
    tl.fromTo(".hero-el",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power4.out", delay: 0.1 }
    );

    // 2. Section Header Reveals
    gsap.utils.toArray('.section-header').forEach(header => {
      gsap.fromTo(header,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
          }
        }
      );
    });

    // 3. Staggered Feature Cards / Items
    gsap.utils.toArray('.feature-grid').forEach(grid => {
      const cards = grid.querySelectorAll('.card-item');
      if (cards.length) {
        gsap.fromTo(cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: grid,
              start: "top 85%",
            }
          }
        );
      }
    });

    // 4. Contact Section Reveal
    gsap.utils.toArray('.contact-content').forEach(contact => {
       gsap.fromTo(contact,
         { y: 100, opacity: 0 },
         {
             y: 0,
             opacity: 1,
             duration: 1.2,
             ease: "power3.out",
             scrollTrigger: {
                 trigger: "#contact",
                 start: "top 80%",
             }
         }
       );
    });

    // 5. Navbar effects on scroll
    const nav = document.getElementById('main-nav');
    if (nav) {
      ScrollTrigger.create({
        start: "top -100",
        onUpdate: (self) => {
          if (self.direction === 1) {
            nav.style.transform = "translateY(-100%)";
          } else {
            nav.style.transform = "translateY(0%)";
            nav.style.background = "rgba(12, 10, 9, 0.95)";
          }
        },
        onLeaveBack: () => {
          nav.style.background = "rgba(12, 10, 9, 0.8)";
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="antialiased min-h-screen flex flex-col selection:bg-accent selection:text-primary relative">
      <div className="noise-overlay"></div>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <PainPoints />
        <Solutions />
        <Portfolio />
        <Process />
        <KnowledgeHub />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
