document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Menu Toggle
    const menuBtn = document.getElementById("mobile-menu");
    const nav = document.getElementById("nav-menu");
    
    if(menuBtn) {
        menuBtn.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("nav--open");
            menuBtn.classList.toggle("active");
            menuBtn.setAttribute("aria-expanded", isOpen);
        });
    }

    // 2. Intersection Observer for Performance
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(revealCallback, {
        threshold: 0.1
    });

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

    // 3. Form Handling
    const form = document.getElementById("reservation-form");
    const formMsg = document.getElementById("form-message");

    if(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            btn.disabled = true;
            btn.innerText = "Checking...";

            setTimeout(() => {
                formMsg.textContent = "Thank you! Our concierge will contact you shortly.";
                formMsg.classList.remove('hidden');
                form.reset();
                btn.disabled = false;
                btn.innerText = "Check Availability";
            }, 1500);
        });
    }
});