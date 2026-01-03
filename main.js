document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Header Scroll Effect ---
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- 2. Skills Animation (Intersection Observer) ---
    // This triggers the progress bars to fill up when you scroll to them
    const skillsSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.progress-bar');

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width;
                });
            } else {
                // Optional: Reset bars when scrolling away so they animate again
                progressBars.forEach(bar => {
                    bar.style.width = '0%';
                });
            }
        });
    }, { threshold: 0.3 }); // Trigger when 30% of the section is visible

    if(skillsSection) {
        skillObserver.observe(skillsSection);
    }

    // --- 3. Smooth Scrolling for Navigation Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                window.scrollTo({
                    top: target.offsetTop - 70, // offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
});