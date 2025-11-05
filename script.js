// Initialize Swiper with enhanced responsive configuration
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // Enhanced responsive breakpoints
    breakpoints: {
        // Mobile (576px and up)
        576: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        // Tablet (768px and up)
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        // Desktop (992px and up)
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
    // Smooth transitions
    speed: 600,
    effect: 'slide',
    // Touch and mouse drag
    simulateTouch: true,
    grabCursor: true,
    // Keyboard navigation
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
});