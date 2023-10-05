const container = document.body;
if (localStorage.getItem("data-theme")) {
  container.setAttribute("data-theme", localStorage.getItem("data-theme")); 
  toggleDark(1);
} 
//actually use the saved value
function toggleDark(theme) {//this function is executed when switching from the current theme to the other
  const dataTheme = container.getAttribute("data-theme");
  let theme_switch;
  if(dataTheme === "light") { theme_switch = 1 } else { theme_switch = 0 }
  if(theme) { theme_switch = !theme_switch }//so the oppisite of the theme stored is used when calling this function 
  if (theme_switch) {
    container.setAttribute("data-theme", "dark");
    document.getElementById("night").style.display = "none";
    document.getElementById("light").style.display = "block";
    document.getElementById("night-mobile").style.display = "none";
    document.getElementById("light-mobile").style.display = "block";
    localStorage.setItem("data-theme", "dark");
  } else {
    container.setAttribute("data-theme", "light");
    document.getElementById("night").style.display = "block";
    document.getElementById("light").style.display = "none";
    document.getElementById("night-mobile").style.display = "block";
    document.getElementById("light-mobile").style.display = "none";
    localStorage.setItem("data-theme", "light");
  }
}


//Menu icon active
//const mobileIcons = document.querySelector('.mobile-icon');

// Loop through the buttons and add the active class to the current/clicked button
// for (let i = 0; i < mobileIcons.length; i++) {
//   mobileIcons[i].addEventListener("click", function() {
//     let current = document.querySelector(".colored");
    
//     // If there's no active class
//     if (current.length > 0) {
//       current[0].className = current[0].className.replace("colored", "");
//     }
  
//     // Add the active class to the current/clicked button
//     this.className += "colored";
//   });
// }