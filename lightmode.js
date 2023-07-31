let moon = document.querySelector('.moon ');
let moonMobile = document.querySelector('.moon-mobile');
let body = document.body;


moon.addEventListener('click', () => {
    body.classList.toggle('light');
});

moonMobile.addEventListener('click', () => {
    body.classList.toggle('light');
});

function myFunction(icon) {
    icon.classList.toggle("ri-sun-fill");
} 