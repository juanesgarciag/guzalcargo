var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },

    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
    breakpoints: {
        640: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 1,
        },
        1024: {
        slidesPerView: 1,
        },
    }
});