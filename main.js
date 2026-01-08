document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Menu
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // 2. Typewriter Effect
    const textEl = document.getElementById("typewriter-text");
    const text = "Fullstack Web Developer";
    let i = 0;
    function type() {
        if (i < text.length) {
            textEl.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    type();

    // 3. GitHub API Fetch
    async function getRepos() {
        const container = document.getElementById('github-projects');
        try {
            const res = await fetch('https://api.github.com/users/rishav-web-dev/repos?sort=updated&per_page=6');
            const repos = await res.json();
            container.innerHTML = '';
            repos.forEach(repo => {
                container.innerHTML += `
                    <div class="repo-card">
                        <h3>${repo.name}</h3>
                        <p>${repo.description || 'No description available.'}</p>
                        <a href="${repo.html_url}" target="_blank" style="color:var(--primary-color); text-decoration:none; font-size:12px; margin-top:10px; display:inline-block;">View Code →</a>
                    </div>`;
            });
        } catch (e) { container.innerHTML = 'Failed to load projects.'; }
    }
    getRepos();

    // 4. GSAP Scroll Reveal
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".reveal").forEach(el => {
        gsap.from(el, {
            y: 50, opacity: 0, duration: 1,
            scrollTrigger: { trigger: el, start: "top 90%" }
        });
    });

    // 5. Skill Bars
    ScrollTrigger.create({
        trigger: "#skills",
        onEnter: () => {
            document.querySelectorAll(".progress-bar").forEach(bar => {
                bar.style.width = bar.getAttribute("data-width");
            });
        }
    });

    // 6. Contact Form (No Redirect)
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = new FormData(form);
        const btn = form.querySelector('.submit-btn');
        btn.innerText = "Sending...";
        await fetch(form.action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } });
        alert("Message Sent!");
        form.reset();
        btn.innerText = "Send Message";
    });
});
