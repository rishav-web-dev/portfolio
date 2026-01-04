document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    });

    const skillsSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.progress-bar');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressBars.forEach(bar => bar.style.width = bar.getAttribute('data-width'));
            }
        });
    }, { threshold: 0.3 });
    if(skillsSection) skillObserver.observe(skillsSection);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
        });
    });
});