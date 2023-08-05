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

  