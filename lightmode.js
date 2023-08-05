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

//Menu icon active
const mobileIcons = document.getElementsByClassName('mobile-icon');

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < mobileIcons.length; i++) {
    mobileIcons[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("active");
  
      // If there's no active class
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
  
      // Add the active class to the current/clicked button
      this.className += " active";
    });
  }