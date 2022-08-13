// Theme switch logic
const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.contains("light-theme")
    ? enableDarkMode()
    : enableLightMode();
});

function enableDarkMode() {
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");
}

function enableLightMode() {
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");
}


// Set initial theme
function setThemePreference() {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    enableDarkMode();
    return;
  }
  enableLightMode();
}
document.onload = setThemePreference();


// Mobile navigation toggle switch logic
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const mobileNavIcon = document.querySelector("#mobile-nav-icon");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
    mobileNavIcon.setAttribute("d", "m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z");
  }
  if (visibility === "true") {
    primaryNav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
    mobileNavIcon.setAttribute("d", "M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z");
  }
});

// Navbar style on scroll 
document.onreadystatechange = () => {
  let lastScrollPosition = 0;
  const navbar =  document.querySelector(".primary-header");

  window.addEventListener('scroll', function(e) {
    lastScrollPosition = window.scrollY;
    
    if (lastScrollPosition > 50)
      navbar.classList.add('primary-header-scrolled');
    else
      navbar.classList.remove('primary-header-scrolled');
  });
}