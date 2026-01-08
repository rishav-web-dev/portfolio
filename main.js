document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle
  const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('.nav-links');
  if (menuIcon) {
    menuIcon.addEventListener('click', () => navLinks.classList.toggle('active'));
  }

  // 2. Sticky Header
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  });

  // 3. Typewriter Effect (Improved to prevent multiple triggers)
  const textElement = document.querySelector(".typewriter");
  const textToType = "Fullstack Web Developer";
  let index = 0;
  function typeWriter() {
    if (index < textToType.length && textElement) {
      textElement.innerHTML += textToType.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }
  if (textElement) {
    textElement.innerHTML = ""; // Clear initial text
    typeWriter();
  }

  // 4. GSAP Animations
  gsap.registerPlugin(ScrollTrigger);
  const isMobile = window.innerWidth < 768;

  const tl = gsap.timeline();
  tl.from(".hero-text h4", { y: 20, opacity: 0, duration: 0.5 })
    .from(".hero-text h1", { y: 30, opacity: 0, duration: 0.8 }, "-=0.3")
    .from(".hero-text h2", { y: 20, opacity: 0, duration: 0.5 }, "-=0.5")
    .from(".hero-btns", { y: 20, opacity: 0, duration: 0.5 }, "-=0.3")
    .from(".hero-img", { 
      x: isMobile ? 0 : 40, 
      y: isMobile ? 30 : 0, 
      opacity: 0, 
      duration: 1 
    }, "-=0.8");

  // Skill Bar Animation (Using IntersectionObserver as you had)
  const progressBars = document.querySelectorAll(".progress-bar");
  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        progressBars.forEach(bar => {
          bar.style.width = bar.getAttribute("data-width") || "100%";
        });
      }
    });
  }, { threshold: 0.5 });

  const skillsSection = document.getElementById("skills");
  if (skillsSection) skillsObserver.observe(skillsSection);

  // 5. Contact Form Logic
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const button = this.querySelector('.submit-btn');
      button.textContent = "Sending...";
      button.disabled = true;

      // Simulated success (Replace with actual fetch if action URL exists)
      setTimeout(() => {
        alert("Thanks for reaching out!");
        this.reset();
        button.textContent = "Send Message";
        button.disabled = false;
      }, 1500);
    });
  }
});