document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Enhanced Mobile Navigation
    const menuBtn = document.getElementById("mobile-menu");
    const nav = document.getElementById("nav-menu");
    const body = document.body;

    const toggleMenu = () => {
        const isOpen = nav.classList.toggle("nav--open");
        menuBtn.classList.toggle("active"); // Animates the burger to X
        menuBtn.setAttribute("aria-expanded", isOpen);
        body.style.overflow = isOpen ? "hidden" : ""; 
    };

    menuBtn.addEventListener("click", toggleMenu);

    // Close menu when link is clicked
    document.querySelectorAll(".nav__link").forEach(link => {
        link.addEventListener("click", () => {
            if (nav.classList.contains("nav--open")) toggleMenu();
        });
    });

    // 2. Performance-Optimized Scroll Reveal
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

    // 3. Form Validation & UX
    const form = document.getElementById("reservation-form");
    const formMsg = document.getElementById("form-message");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const btnText = btn.querySelector('.btn__text');

        btn.disabled = true;
        btnText.textContent = "Processing...";

        // Simulate professional API response
        setTimeout(() => {
            btnText.textContent = "Reservation Sent";
            formMsg.textContent = "Thank you. Our concierge will contact you within 15 minutes.";
            formMsg.classList.remove('hidden');
            form.reset();
            
            setTimeout(() => {
                btn.disabled = false;
                btnText.textContent = "Check Availability";
                formMsg.classList.add('hidden');
            }, 5000);
        }, 1800);
    });
});