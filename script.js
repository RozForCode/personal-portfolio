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
  }
}
contactForm.addEventListener('submit', sendEmail);


/*------SHOW SCROOL UP------*/

/*------SCROOL SETTINGS ACTIVE LINK------*/

/*------DARK LIGHT THEME------*/

/*------SCROLL REVEAL ANIMATION------*/
