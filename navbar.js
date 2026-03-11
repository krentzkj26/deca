document.addEventListener("DOMContentLoaded", () => {
  const navbarTop = document.getElementById("navbar-top");
  const navbarBottom = document.getElementById("navbar-bottom");
// NOTE: Keeping bottom navbar code in case future developers 
  // want a footer navigation version for mobile or accessibility purposes.
  // Currently, it's not injected into the DOM.
  const navbarHTML = `
    <nav class="navbar" aria-label="Main navigation">
      <a href="index.html" class="logo-link" aria-label="Home">
        <img src="images/wideca.png" alt="Wisconsin Collegiate DECA logo" class="logo" />
      </a>
      <ul class="nav-links">
        <li><a href="about.html">About</a></li>
        <li><a href="chapters.html">Chapters</a></li>
        <li><a href="events.html">Events</a></li>
        <li><a href="leadership.html">Leadership</a></li>
        <li><a href="sponsor.html">Sponsor</a></li>
      <li><a href="resources.html">Resources</a></li>
      </ul>
    </nav>
  `;

  if (navbarTop) navbarTop.innerHTML = navbarHTML;
  if (navbarBottom) navbarBottom.innerHTML = navbarHTML;

  // Highlight current page
  let currentPage = window.location.pathname.split("/").pop() || "index.html";
  [navbarTop, navbarBottom].forEach(navbar => {
    if (!navbar) return;
    const links = navbar.querySelectorAll(".nav-links a");
    links.forEach(link => {
      link.getAttribute("href") === currentPage
        ? link.setAttribute("aria-current", "page")
        : link.removeAttribute("aria-current");
    });
  });

  // Scroll fade for top navbar
  if (navbarTop) {
    let lastScrollY = window.scrollY;
    const topNav = navbarTop.querySelector(".navbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY > lastScrollY) {
        topNav.style.opacity = "0";
        topNav.style.pointerEvents = "none";
      } else {
        topNav.style.opacity = "1";
        topNav.style.pointerEvents = "auto";
      }
      lastScrollY = window.scrollY;
    });
  }
});
