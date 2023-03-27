const nav = document.querySelector(".nav");
const burguer = document.querySelector('.burguer');
const navMobile = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar li');


let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if(lastScrollY < window.scrollY) {
    nav.classList.add("hidden");
  } else {
    nav.classList.remove("hidden");
  }

  lastScrollY = window.scrollY;
});

const navSlide = () => {
  burguer.addEventListener('click', () => {
    navMobile.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      }
       else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
       }
    });
  });


}

navSlide();
