// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Gentle scroll-reveal for sections (respects reduced motion)
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReduced && "IntersectionObserver" in window) {
  const els = document.querySelectorAll(".section, .card");
  els.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(14px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.opacity = "1";
          e.target.style.transform = "none";
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  els.forEach((el) => io.observe(el));
}
