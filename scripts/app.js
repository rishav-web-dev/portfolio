document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Hero Animations
    const tl = gsap.timeline();
    tl.from(".hero-text h4", { y: 20, opacity: 0, duration: 0.5 })
      .from(".hero-text h1", { y: 30, opacity: 0, duration: 0.8 }, "-=0.3")
      .from(".hero-text h2", { y: 20, opacity: 0, duration: 0.5 }, "-=0.5")
      .from(".hero-btns", { y: 20, opacity: 0, duration: 0.5 }, "-=0.3")
      .from(".hero-img", { x: 40, opacity: 0, duration: 1, ease: "power2.out" }, "-=0.8");

    // 2. Section Headers
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header.children, {
            scrollTrigger: {
                trigger: header,
                start: "top 80%"
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2
        });
    });

    // 3. Slider Fade In
    gsap.from(".slider", {
        scrollTrigger: {
            trigger: "#projects",
            start: "top 75%"
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    // 4. Contact Form
    gsap.from(".contact-card", {
        scrollTrigger: {
            trigger: "#contact",
            start: "top 75%"
        },
        y: 50,
        opacity: 0,
        duration: 1
    });
});