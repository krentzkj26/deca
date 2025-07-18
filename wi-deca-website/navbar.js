document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    navbar.innerHTML = `
      <nav class="navbar" aria-label="Main navigation">
        <a href="index.html" class="logo-link">
          <img src="images/wideca.png" alt="DECA logo" class="logo" />
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

    // Get current page filename or default to index.html if at root
    let currentPage = window.location.pathname.split("/").pop();
    if (currentPage === "") currentPage = "index.html";

    // Find the matching nav link and set aria-current
    const links = navbar.querySelectorAll(".nav-links a");
    links.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }
});
