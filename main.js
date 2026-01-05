document.addEventListener("DOMContentLoaded", () => {
  // 1. Sticky Header
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  });

  // 2. Typewriter Effect
  const textElement = document.querySelector(".typewriter");
  const textToType = "Fullstack Web Developer";
  let index = 0;
  function typeWriter() {
    if (index < textToType.length) {
      textElement.innerHTML += textToType.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }
  if (textElement) typeWriter();

  // 3. Simple Alert for Project Buttons
  document.addEventListener("click", function (e) {
    // Checks if the clicked element has the 'coming-soon' class
    if (e.target && e.target.classList.contains("coming-soon")) {
      e.preventDefault();
      alert("Coming Soon...");
    }
  });

  // 4. Skill Bar Animation
  const skillsSection = document.getElementById("skills");
  const progressBars = document.querySelectorAll(".progress-bar");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          progressBars.forEach((bar) => {
            bar.style.width = bar.getAttribute("data-width");
          });
        }
      });
    },
    { threshold: 0.5 }
  );
  if (skillsSection) observer.observe(skillsSection);

  // 5. Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const button = contactForm.querySelector('.submit-btn');
        const originalText = button.textContent;
        
        button.textContent = "Sending...";
        button.disabled = true;

        const formData = new FormData(this);
        const response = await fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            alert("Thanks for reaching out! I'll get back to you soon.");
            contactForm.reset();
        } else {
            alert("Oops! There was a problem submitting your form.");
        }
        
        button.textContent = originalText;
        button.disabled = false;
    });
}
});
