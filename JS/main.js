let hamburgerMenu = document.querySelector(".ham-menu");
let navList = document.querySelector(".ham-menu ul");

// Click animation
hamburgerMenu.addEventListener("click", () => {
  if (navList.classList.contains("hammenu-out-animation")) {
    navList.classList.add("hammenu-in-animation");
    navList.classList.remove("hammenu-out-animation");
  } else {
    navList.classList.add("hammenu-out-animation");
    navList.classList.remove("hammenu-in-animation");
  }
});
