// Responsive navbar
const navToggle = document.querySelector(".nav-toggle");
const right = document.querySelector(".right");
navToggle.addEventListener("click", function () {
  right.classList.toggle("show-right");
});
const links = document.querySelectorAll(".menu-items a");
const logInBtn = document.querySelector(".right .btn a");
const subLinks = document.querySelectorAll(".sub-items a");
const subBtn = document.querySelector(".sub-btn");
const subMenu = document.querySelector(".sub-menu");
logInBtn.addEventListener("click", () => {
  right.classList.remove("show-right");
});
// console.log(links);
// links
links.forEach((link) => {
  if (link.classList.contains("sub-btn")) {
    return;
  }
  link.addEventListener("click", () => {
    right.classList.remove("show-right");
    subMenu.classList.remove("show-dropdown");
  });
});
// sublinks
subLinks.forEach((sublink) => {
  sublink.addEventListener("click", () => {
    right.classList.remove("show-right");
    subMenu.classList.remove("show-dropdown");
  });
});

// dropdown menu
subBtn.addEventListener("click", () => {
  subMenu.classList.toggle("show-dropdown");
});

// $(document).ready(function () {
//   // Toggle sub menus
//   $(".sub-btn").click(function () {
//     $(this).next(".sub-menu").slideToggle();
//   });
// });

// Scrolling Effect
window.addEventListener("scroll", () => {
  const nv = document.querySelector(".navbar");
  nv.classList.toggle("sticky", window.scrollY > 25);
});
