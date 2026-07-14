(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector(".theme-toggle");
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".primary-navigation");
  const backToTop = document.querySelector(".back-to-top");
  const cookieBanner = document.querySelector(".cookie-banner");
  const cookieAccept = document.querySelector(".cookie-accept");
  const year = document.querySelector("#current-year");

  if (year) year.textContent = new Date().getFullYear();

  const savedTheme = localStorage.getItem("mk-theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    root.dataset.theme = savedTheme;
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    root.dataset.theme = "dark";
  }

  themeButton?.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    localStorage.setItem("mk-theme", nextTheme);
  });

  navToggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll(".primary-navigation a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      navToggle?.setAttribute("aria-expanded", "false");
    });
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

  const animateCounter = (element) => {
    const target = Number(element.dataset.target || 0);
    const prefix = element.dataset.prefix || "";
    const suffix = element.dataset.suffix || "";
    const duration = 1300;
    const start = performance.now();

    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      element.textContent = `${prefix}${value}${suffix}`;
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  };

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.55 });

  document.querySelectorAll(".counter").forEach(counter => counterObserver.observe(counter));

  const onScroll = () => {
    backToTop?.classList.toggle("is-visible", window.scrollY > 700);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  if (localStorage.getItem("mk-cookie-notice") === "accepted") {
    cookieBanner?.classList.add("is-hidden");
  }

  cookieAccept?.addEventListener("click", () => {
    localStorage.setItem("mk-cookie-notice", "accepted");
    cookieBanner?.classList.add("is-hidden");
  });
})();
