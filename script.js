document.addEventListener("DOMContentLoaded", function () {
  let menuToggle = document.querySelector(".menu-toggle");
  let navLinks = document.querySelector(".nav-links");
  let navbar = document.getElementById("navbar");
  let logo = document.querySelector(".logo");


  menuToggle.addEventListener("click", function (event) {
      navLinks.classList.toggle("active");
      event.stopPropagation(); 
  });


  document.addEventListener("click", function (event) {
      if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
          navLinks.classList.remove("active");
      }
  });


  navLinks.addEventListener("click", function (event) {
      event.stopPropagation();
  });


  window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
          navbar.classList.add("scrolled"); 
      } else {
          navbar.classList.remove("scrolled");
      }
  });


  logo.addEventListener("click", function () {
      location.reload();
  });


  if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);
});
