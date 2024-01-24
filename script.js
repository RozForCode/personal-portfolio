/*---------  MENU  ---------*/
    /*---------SHOW MENU---------*/
    const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('nav-toggle'),
          navClose = document.getElementById('nav-close');
    if(navToggle){
      navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
      });
    }
    /*------MENU HIDDEN---*/
    if(navClose){
      navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
      });
    }
    
    /*------REMOVING MENU MOBILE---*/
  const navLink = document.querySelectorAll('.nav__link');
  const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    //clicking on each_navlink, removes the show-menu class
    navMenu.classList.remove('show-menu');
  }
  navLink.forEach(n => n.addEventListener('click', linkAction));

/*-----------SHADOW HEADER------*/
const shadowHeader = () =>{
  const header = document.getElementById('header');
  //when the scroll is greater than 50 viewport height,add scrollHeader class to header tag
  this.scrollY >= 50 ? header.classList.add('shadow-Header') : header.classList.remove('shadow-Header');
}
window.addEventListener('scroll', shadowHeader);


/*--------EMAIL JS-------*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');
const sendEmail = (e) =>{
  // console.log('sending email...');
  e.preventDefault();
  //serviceId templateId #form publicKey
  emailjs.sendForm('service_5pwlp9d','template_ho2gllc','#contact-form','6N5I1L_vdHHOzRCqX').then(() =>{
    //show sent message
    contactMessage.textContent = "Message successfully sent!"
    //remove msg after 5 secs
    setTimeout( () =>{
      contactMessage.textContent = ""
    },5000);
  })
}
contactForm.addEventListener('submit', sendEmail);


/*------SHOW SCROOL UP------*/

const scrollUp = () => {
  const scrollUpButton = document.getElementById("scroll-up");
  window.scrollY >=350 ? scrollUpButton.classList.add('show-scroll') : scrollUpButton.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);


/*------SCROOL SETTINGS ACTIVE LINK------*/

const sections = document.querySelectorAll('section[id]');
const scrollActice = () => {
  const scrollDown = window.scrollY;
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link');
    }else{
      sectionsClass.classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActice);


/*------DARK LIGHT THEME------*/

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const currentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const currentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-clear-line' : 'ri-sun-line';

if(selectedTheme){
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-clear-line' ? 'add' : 'remove'](iconTheme);
}
themeButton.addEventListener('click', () =>{
  // add or remove the theme
  document.body.classList.toggle(darkTheme);
  document.body.classList.toggle(iconTheme);
  // we also save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', currentTheme());
  localStorage.setItem('selected-icon', currentIcon());
})

/*------SCROLL REVEAL ANIMATION------*/
