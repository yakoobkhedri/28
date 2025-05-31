// menu

let overlay = document.getElementById('overlay');
let openMenu = document.getElementById('openMenu');
let mobileMenu = document.querySelector('.mobileMenu');

openMenu.addEventListener('click', function () {
  overlay.classList.add('active');
  mobileMenu.classList.add('active');
})
overlay.addEventListener('click', function () {
  overlay.classList.remove('active');
  mobileMenu.classList.remove('active');
})
// acordion

let acordionBtn = Array.from(document.getElementsByClassName('acordionBtn'));

acordionBtn.forEach((item) => {
  item.addEventListener('click', function () {
    item.parentElement.classList.toggle('active');
    item.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
})
// swiper

var banner = new Swiper(".banner", {
  slidesPerView: 1,
  spaceBetween: 50,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false, // حتی با تعامل کاربر هم autoplay متوقف نشود
  },
  loop: true,
   navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var games = new Swiper(".games", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 40,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false, // حتی با تعامل کاربر هم autoplay متوقف نشود
  },
  breakpoints:{
       576: {
      slidesPerView: 2,
   },
   768: {
      slidesPerView: 3,
   }
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
