 // Initilazing 1st header slider
 const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    autoplay: {
        delay: 5000,
      },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        bulletClass: 'hero-bullet',
        bulletActiveClass: 'hero-bullet-active',
        clickable: 'true'
    },
    breakpoints: {
        320: {
            direction: 'horizontal',
        },

        1200: {
            direction: 'vertical',
        },
    },

});

// Initilazing 2nd slider
const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.bars',
        clickable: true,
        bulletClass: 'bar',
        bulletActiveClass: 'bar-active',
        renderBullet: function (index, className) {
            return '<div class="' + className + '">' + (index + 1) +
            '</div>';
        },
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

        // when window width is >= 320px
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        // when window width is >= 1200px
        1540: {
            slidesPerView: 3,
            spaceBetween: 20
        },

    }
});

// Initilazing 3d slider
const swiper3 = new Swiper('.swiper3', {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.bars',
        clickable: true,
        bulletClass: 'bar',
        bulletActiveClass: 'bar-active',
        renderBullet: function (index, className) {
            return '<div class="' + className + '">' + (index + 1) +
            '</div>';
        },
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

        // when window width is >= 320px
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        // when window width is >= 1200px
        1540: {
            slidesPerView: 3,
            spaceBetween: 20
        },

    }
});