const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const h1 = document.querySelector("h1");
const arrow = document.querySelector(".arrow");
const corner = document.querySelector(".ul-corner");
const ul = document.getElementById("transition");

toggleBtn.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  h1.classList.toggle("active");
  arrow.classList.toggle("active");
  corner.classList.toggle("active");
});
