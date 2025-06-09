document.addEventListener("DOMContentLoaded", function () {
    // Gallery image rotation and zoom
    let rotation = 0, zoomLevel = 1;

    window.rotateImage = function (degrees) {
        rotation += degrees;
        updateTransform();
    }

    window.zoomImage = function (amount) {
        zoomLevel = Math.max(1, zoomLevel + amount);
        updateTransform();
    }

    function updateTransform() {
        const carouselItems = document.querySelectorAll('.carousel-item img');
        carouselItems.forEach(item => {
            item.style.transform = `rotate(${rotation}deg) scale(${zoomLevel})`;
        });
    }




   
});



       // review section
     new Swiper('.swiper', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true
    },
    // mousewheel: {
    //   thresholdDelta: 70,
    // },
    breakpoints: {
      0: {
        slidesPerView: 1.5
      },
      560: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 3
      }
    }
  });

