// Custom Cursor Logic
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Scroll Reveal Animation
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const giantText = document.querySelector('.giant-text');
    // Parallax effect for the big name
    giantText.style.transform = `translateX(${scrolled * 0.2}px)`;
});

window.addEventListener('scroll', () => {
    const passionSection = document.querySelector('.passion-visuals');
    const sectionPos = passionSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if(sectionPos < screenPos) {
        passionSection.classList.add('animate-spring');
    }
});