let lastScrollY = window.screenY;
let header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        header.classList.add("header--hidden");
    } else {
        header.classList.remove("header--hidden");
    }
    lastScrollY = window.scrollY;
}) 

let scrollUpButton = document.getElementById("scroll-up");

window.addEventListener('scroll', () => {
  if(window.pageYOffset > 600) {
    scrollUpButton.classList.add("active");
  }else {
    scrollUpButton.classList.remove("active");
  }
})
