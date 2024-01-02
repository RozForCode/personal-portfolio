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

/*------SHOW SCROOL UP------*/

/*------SCROOL SETTINGS ACTIVE LINK------*/

/*------DARK LIGHT THEME------*/

/*------SCROLL REVEAL ANIMATION------*/
