/* ============================================================
   Ziyue Zhang — site interactions (vanilla JS)
   ============================================================ */
(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Preloader ---------- */
  const preloader = document.getElementById("preloader");
  function hidePreloader() {
    if (!preloader) return;
    // brief hold so the loading mark reads as intentional, not a flash
    setTimeout(() => preloader.classList.add("is-done"), 450);
  }
  window.addEventListener("load", hidePreloader);
  // safety net in case 'load' already fired or stalls
  if (document.readyState === "complete") hidePreloader();
  setTimeout(hidePreloader, 2500);

  /* ---------- Scroll progress + nav state ---------- */
  const nav = document.getElementById("nav");
  const progress = document.getElementById("scrollProgress");

  function onScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progress) progress.style.width = pct + "%";
    if (nav) nav.classList.toggle("is-scrolled", scrollTop > 24);
  }
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => { onScroll(); ticking = false; });
      ticking = true;
    }
  }, { passive: true });
  onScroll();

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !prefersReduced) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Active nav link ---------- */
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav__links a");
  if ("IntersectionObserver" in window && navLinks.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) =>
            link.classList.toggle("is-active", link.getAttribute("href") === "#" + id)
          );
        }
      });
    }, { threshold: 0.5 });
    sections.forEach((s) => spy.observe(s));
  }

  /* Hero background (drifting blooms over a pale wash) is pure CSS —
     no JS needed; it respects prefers-reduced-motion via the stylesheet. */
})();
