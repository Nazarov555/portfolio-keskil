const iconList = document.querySelectorAll('.mobile-icon');

iconList.forEach(icon => {
    icon.addEventListener('click', () => {
        hideAllItems()

        icon.classList.add('active')
    })
})

function hideAllItems() {
    iconList.forEach(icon => icon.classList.remove('active'))
}


let lastScrollY = window.screenY;
let header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        header.classList.add("header--hidden");
    } else {
        header.classList.remove("header--hidden");
    }
    lastScrollY = window.scrollY;
}); 

const scrollUp = document.querySelector('.scrollup');

window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 600) {
        scrollUp.classList.add('active');
    } else {
        scrollUp.classList.remove('active');
    }
});

