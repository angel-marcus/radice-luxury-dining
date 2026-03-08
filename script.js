document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Navigation
    const menuBtn = document.getElementById("mobile-menu");
    const nav = document.getElementById("nav-menu");
    const body = document.body;

    if (menuBtn && nav) {
        menuBtn.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("nav--open");
            menuBtn.classList.toggle("active");
            menuBtn.setAttribute("aria-expanded", isOpen);
            body.style.overflow = isOpen ? "hidden" : "";
        });
    }

    // Close menu when a link is clicked
    document.querySelectorAll(".nav__link").forEach(link => {
        link.addEventListener("click", () => {
            if (nav.classList.contains("nav--open")) {
                nav.classList.remove("nav--open");
                menuBtn.classList.remove("active");
                menuBtn.setAttribute("aria-expanded", "false");
                body.style.overflow = "";
            }
        });
    });

    // 2. Form Handling
    const form = document.getElementById("reservation-form");
    const formMsg = document.getElementById("form-message");
    const submitBtn = document.getElementById("submit-btn");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const btnText = submitBtn.querySelector(".btn__text");
            
            submitBtn.disabled = true;
            btnText.textContent = "Processing...";

            setTimeout(() => {
                form.reset();
                btnText.textContent = "Reservation Sent";
                formMsg.textContent = "Thank you. Our concierge will contact you shortly.";
                formMsg.classList.remove("hidden");
                
                setTimeout(() => {
                    submitBtn.disabled = false;
                    btnText.textContent = "Check Availability";
                    formMsg.classList.add("hidden");
                }, 4000);
            }, 1500);
        });
    }

    // 3. Scroll Reveal
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, observerOptions);

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});