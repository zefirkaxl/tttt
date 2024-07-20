import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

let swiperInstance;

function initializeSwiper() {
  const height = window.innerHeight;
  const width = window.innerWidth;


  // Перевірка на висоту і ширину
  if (height <= 896 || width <= 1242) {
    if (!swiperInstance) {
      swiperInstance = new Swiper(".swiper", {
        modules: [Navigation],
        navigation: {
          nextEl: ".swiper-button-right",
          prevEl: ".swiper-button-left",
        },
        slidesPerView: 'auto', 
        spaceBetween: 10,
      });
    }
  } else {
    if (swiperInstance) {
      swiperInstance.destroy();
      swiperInstance = null;
    }
  }
}

// Викликати при завантаженні сторінки та при зміні розміру вікна
document.addEventListener("DOMContentLoaded", initializeSwiper);
window.addEventListener("resize", initializeSwiper);

// Викликати при завантаженні сторінки та при зміні розміру вікна
window.addEventListener("load", initializeSwiper);