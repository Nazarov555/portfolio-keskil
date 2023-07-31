let today = new Date();
let year = today.getFullYear();
const yearText = document.getElementById('year');
yearText.innerText = `${year}`;

let navMenu = document.getElementById('nav-menu-mobile');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');

openBtn.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
});

closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
});

//Remove menu when clicked on mobile

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu-mobile');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(e => e.addEventListener('click', linkAction));

//EmailJS
function sendEmail() {
    let params = {
        user_number: document.getElementById("user-number").value,
        user_email:  document.getElementById("user-email").value,
        user_project:  document.getElementById("user-project").value
    }

    let contactBtn = document.querySelector('.contact__button');
    const serviceID = "service_rh40rie";
    const templateID = "template_2mekcra";

    const numberRegex = `^\\+?[0-9\\-\\s]*$`;
    let errorMessage = document.getElementById('error-message');

    if(document.getElementById('user-number').value.trim() == '' || 
        document.getElementById('user-number').value.trim() == null) {
        errorMessage.innerText = '🚨 Был введён пустой ввод, убедитесь на заполнение всех ячеек 🚨';
    }
    else if (document.getElementById("user-email").value.trim() == '' ||
            document.getElementById("user-email").value.trim() == null) {
        errorMessage.innerText = '🚨 Был введён пустой ввод, убедитесь на заполнение всех ячеек 🚨';
    }
    else if (document.getElementById("user-project").value.trim() == '' ||
            document.getElementById("user-project").value.trim() == null) {
        errorMessage.innerText = '🚨 Был введён пустой ввод, убедитесь на заполнение всех ячеек 🚨';
    }
    else if(!document.getElementById('user-number').value.match( numberRegex )){
        errorMessage.innerText = 'Не правильный номер телефона, проверьте введённый номер 🤳🏻📲';
        document.getElementById('user-number').focus();
    }
    else if(!document.getElementById("user-email").value.match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ )) {
        errorMessage.innerText = 'Неправильный адрес электронной почты, пожалуйста проверьте на правильность ввода почты 📧📮';
        document.getElementById("user-email").focus();
    }else {
        contactBtn.disabled = true;  
        contactBtn.innerText = 'Отправляется...'; 
        contactBtn.style.cursor = 'wait';
        
        emailjs.send(serviceID, templateID, params)
        .then(() => {   
            errorMessage.innerText = ''; 
            document.getElementById('user-number').value = "";
            document.getElementById('user-email').value = "";
            document.getElementById('user-project').value = ""; 
            document.getElementById('contact-message').innerText = 'Сообщение отправлено успешно ✅';

            let contactForm = document.getElementById('contact-form');
            setTimeout(() => {
               contactForm.style.display = 'none';
               document.getElementById('thanks-title').innerText = 'Благодарю за ваш оффер💼🤝🏻, с радостью его приму. 😊'
            }, 2000);
            
        }, () => {
            document.getElementById('contact-message').innerText = 'Сообщение не отправлено (ошибка) ❌'
        })
        .catch((err) => console.log(err));
    }
}
