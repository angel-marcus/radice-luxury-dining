document.addEventListener("DOMContentLoaded", () => {
    // Fix CSP Violation: Safely load Google Fonts asynchronously
    const fontLink = document.getElementById("google-fonts");
    if (fontLink) {
        fontLink.media = "all";
    }
    // 1. Mobile Menu Logic (Fixed CSP Violation)
    const menuBtn = document.getElementById("mobile-menu");
    const nav = document.getElementById("nav-menu");
    if (menuBtn && nav) {
        menuBtn.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("nav--open");
            menuBtn.classList.toggle("active");
            menuBtn.setAttribute("aria-expanded", isOpen);
        });
    }

    // 2. Form Handling (Fixed CSP Violation)
    const form = document.getElementById("reservation-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const submitBtn = document.getElementById("submit-btn");
            const btnText = submitBtn.querySelector(".btn__text");
            
            submitBtn.disabled = true;
            btnText.textContent = "Processing...";

            setTimeout(() => {
                form.reset();
                btnText.textContent = "Reservation Sent";
                alert("Thank you! Concierge will contact you shortly.");
                submitBtn.disabled = false;
                btnText.textContent = "Check Availability";
            }, 1500);
        });
    }

    // 3. Scroll Reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("active");
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});