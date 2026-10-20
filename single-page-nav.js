function initSinglePageNav() {
    const main = document.querySelector(".main-scroll") || document.querySelector(".main-content");
    if (!main) return;

    const sections = Array.from(document.querySelectorAll("section[id]"));
    if (sections.length === 0) return;

    const navLinks = Array.from(document.querySelectorAll(".topnav-link[href^='#'], .nav-link[href^='#']"));

    const setActive = (id) => {
        navLinks.forEach((link) => {
            const href = link.getAttribute("href") || "";
            link.classList.toggle("active", href === `#${id}`);
        });
    };

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            const href = link.getAttribute("href") || "";
            if (!href.startsWith("#")) return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            setActive(target.id);
        });
    });

    // Scroll-based detection for better accuracy
    const navHeight = 64; // Height of the top nav bar

    function updateActiveOnScroll() {
        // Check if we're at the very top - activate home
        if (window.scrollY < 100) {
            setActive(sections[0].id);
            return;
        }

        // Use a point just below the fixed navigation to identify the visible section.
        const markerPosition = navHeight + 40;
        let currentSection = sections[0].id;

        for (const section of sections) {
            const bounds = section.getBoundingClientRect();

            if (bounds.top <= markerPosition && bounds.bottom > markerPosition) {
                currentSection = section.id;
            }
        }

        // The last section may end before the marker when the document reaches its bottom.
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
            currentSection = sections[sections.length - 1].id;
        }

        setActive(currentSection);
    }

    // Throttle scroll events for performance
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateActiveOnScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Initial check
    updateActiveOnScroll();
}

window.addEventListener("DOMContentLoaded", initSinglePageNav);
