document.documentElement.classList.add("js");

const languageScrollKey = "ichnya-language-scroll";
document.querySelectorAll("a[hreflang]").forEach((link) => {
  link.addEventListener("click", () => {
    sessionStorage.setItem(languageScrollKey, String(window.scrollY));
  });
});

const savedLanguageScroll = sessionStorage.getItem(languageScrollKey);
if (savedLanguageScroll !== null) {
  sessionStorage.removeItem(languageScrollKey);
  window.addEventListener("load", () => {
    window.setTimeout(() => {
      const scrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, Number(savedLanguageScroll));
      document.documentElement.style.scrollBehavior = scrollBehavior;
    }, 0);
  }, { once: true });
}

const header = document.querySelector(".site-header");
const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const mobileNav = document.querySelector(".mobile-nav");
mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => { mobileNav.open = false; });
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, activeObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        activeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
}