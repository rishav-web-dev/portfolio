// scripts/app.js
// Initialize GSAP ScrollTrigger-based animations and hero parallax
(function () {
  function initGSAP() {
    if (!window.gsap) return;
    try {
      gsap.registerPlugin(ScrollTrigger);
    } catch (e) {
      // plugin already registered or missing
    }

    // Fade in elements with .gs-fade
    gsap.utils.toArray('.gs-fade').forEach((el) => {
      gsap.fromTo(el, { autoAlpha: 0, y: 24 }, {
        autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' }
      });
    });

    // Hero image parallax
    const heroImg = document.querySelector('.hero-img');
    if (heroImg) {
      gsap.to(heroImg, {
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.8
        }
      });
    }

    // Optional: animate project cards stagger
    const cards = document.querySelectorAll('.project-card');
    if (cards.length) {
      gsap.fromTo(cards, { autoAlpha: 0, y: 20 }, {
        autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.projects-grid', start: 'top 85%' }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      // load gracefully only if gsap available
      initGSAP();
    });
  } else {
    initGSAP();
  }
})();
