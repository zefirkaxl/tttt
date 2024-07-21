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
      // Зворотний порядок слайдів
      const swiperWrapper = document.querySelector(".swiper-wrapper");
      const slides = Array.from(swiperWrapper.children);
      slides.reverse().forEach((slide) => swiperWrapper.appendChild(slide));

      swiperInstance = new Swiper(".swiper", {
        modules: [Navigation],
        navigation: {
          nextEl: ".swiper-button-right",
          prevEl: ".swiper-button-left",
        },
        slidesPerView: "auto",
        spaceBetween: 10,
        loop: true, // Дозволяє циклічне переміщення
        initialSlide: 0, // Почати з першого слайда (тепер це останній у зворотному порядку)
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
window.addEventListener("load", initializeSwiper);
