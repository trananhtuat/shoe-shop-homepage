const header = document.querySelector('header')
const sidebar = document.querySelector('.sidebar')
const sidebarOpen = document.querySelector('.header__toggle')
const sidebarClose = document.querySelector('.sidebar__close')
const bodyOverlay = document.querySelector('#body-overlay')
const btnToTop = document.querySelector('.btn-to-top')

btnToTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.classList.add('shrink')
        btnToTop.classList.add('active')
    } else {
        header.classList.remove('shrink')
        btnToTop.classList.remove('active')
    }
})

sidebarOpen.addEventListener('click', () => {
    sidebar.classList.add('active')
    bodyOverlay.classList.add('active')
})

sidebarClose.addEventListener('click', () => {
    sidebar.classList.remove('active')
    bodyOverlay.classList.remove('active')
})

const categorySwiper = new Swiper('.category-slider-wrapper', {
    slidesPerView: 1,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: true
    // },
    breakpoints: {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 4
        }
    }
})

const productSwiper = new Swiper('.product-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 4
        }
    }
})

const brandsSwiper = new Swiper('.brand-slider', {
    slidesPerView: 5,
    spaceBetween: 60,
    // autoplay: {
    //     delay: 1500,
    //     disableOnInteraction: false
    // },
    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 5
        },
        768: {
            slidesPerView: 5
        },
        1024: {
            slidesPerView: 6
        }
    }
})