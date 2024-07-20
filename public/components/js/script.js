import "./swiper.js";
    const patch = document.querySelectorAll(".fade");
    let counter = 0;

    const goAnimated = () => {
      if (counter < patch.length) {
        patch[counter].classList.add("test");
        setTimeout(goAnimated, 20); 
        counter++;
      } else {
        
        setTimeout(() => {
          counter = 0;
          patch.forEach(el => el.classList.remove("test"));
          goAnimated();
        }, 1000);
      }
    };

    goAnimated(); // Запуск анімації
