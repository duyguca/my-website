const mobileBtn = document.querySelector(".menu-toggle");
mobileBtn.addEventListener("click", function () {
  const navMenu = document.querySelector(".nav-menu");
  navMenu.classList.toggle("show-mobile-nav");
  console.log(navMenu);
});
