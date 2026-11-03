(function () {
  var toggle = document.getElementById("nav-toggle");
  var header = document.querySelector(".site-header");
  if (!toggle) return;

  document.querySelectorAll(".nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      toggle.checked = false;
    });
  });

  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();
