document.addEventListener("DOMContentLoaded", () => {
  /* TEMA */
  const toggleThemeBtn = document.getElementById("toggle-theme");
  const body = document.body;

  function updateIcon(theme) {
    if (theme === "dark") {
      toggleThemeBtn.innerHTML = '<i data-lucide="sun"></i>';
    } else {
      toggleThemeBtn.innerHTML = '<i data-lucide="moon"></i>';
    }
    lucide.createIcons();
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.className = savedTheme;
    updateIcon(savedTheme);
  } else {
    updateIcon("light");
  }

  if (toggleThemeBtn) {
    toggleThemeBtn.addEventListener("click", () => {
      if (body.classList.contains("light")) {
        body.classList.replace("light", "dark");
        localStorage.setItem("theme", "dark");
        updateIcon("dark");
      } else {
        body.classList.replace("dark", "light");
        localStorage.setItem("theme", "light");
        updateIcon("light");
      }
    });
  }

  /* MENU MOBILE */
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (menuToggle && menu) {
    const menuLinks = menu.querySelectorAll("a");
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("show");
      });
    });
  }

  lucide.createIcons();
});
