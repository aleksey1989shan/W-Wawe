
// бургер

let BurgerOpen = document.querySelector('.burger');
let menu = document.querySelector('.header-content__nav');
let links = menu.querySelectorAll('.header-content__list-item');
let headerBottomNav = document.querySelector('.header-bottom__nav');
let headerBottomFlex = document.querySelector('.header-bottom__wrapper');

let linksBottom = document.querySelectorAll('.header-bottom__link');

BurgerOpen.addEventListener('click', function () {

    headerBottomNav.classList.toggle('bottom__nav-active');
    BurgerOpen.classList.toggle('burger-active');
    menu.classList.toggle('nav-active');
    document.body.classList.toggle('stop-scroll');
    headerBottomFlex.classList.toggle('wrapper__flex');
});


//отключаю бургер при нажатии на ссылки
links.forEach(function (el) {
    el.addEventListener('click', function () {

        BurgerOpen.classList.remove('burger-active');
        menu.classList.remove('nav-active');
        document.body.classList.remove('stop-scroll');
        headerBottomNav.classList.remove('bottom__nav-active');
    });
});

linksBottom.forEach(function (elem) {
    elem.addEventListener('click', function () {

        BurgerOpen.classList.remove('burger-active');
        menu.classList.remove('nav-active');
        document.body.classList.remove('stop-scroll');
        headerBottomNav.classList.remove('bottom__nav-active');
    });
});

//------------------------------------------

// search

let openForm = document.querySelector('.header-content__form');
let openBtn = document.querySelector('.header-content__form-buttonclick');
let closedBtn = document.querySelector('.header-content__form-closed');

openBtn.addEventListener('click', function () {
    openForm.classList.add('form-active');
});

document.addEventListener("click", function (e) {
    let target = e.target;
    if (!target.closest(".header-content__wrapper")) {
        openForm.classList.remove("form-active");
    }
})

// closedBtn.addEventListener('click', function () {
//     openForm.classList.remove('form-active');
// });

//------------------------------------------

// кнопка "что в эфире?"

let efir = document.querySelector('.efir');
let headerBottom = document.querySelector('.header-bottom');
let headerBottomMusic = document.querySelector('.header-bottom__wrapper');
let musicNone = document.querySelector('.border');
let musicNone2 = document.querySelector('.none768');

efir.addEventListener('click', function () {

    efir.classList.toggle('efir__opened');
    headerBottom.classList.toggle('bgColor');
    // headerBottomMusic.classList.toggle('music'); применить forEach
    musicNone.classList.toggle('musicNone');
    musicNone2.classList.toggle('musicNone');
});

//--------------------------------------------

// кнопка "Вход"

let input = document.querySelector('.login');
let vhod = document.querySelector('.input');

input.addEventListener('click', function () {

    vhod.classList.add('login__opened');

});

//отмена кнопки вход

let otmena = document.querySelector('.otmena');

otmena.addEventListener('click', function () {

    vhod.classList.remove('login__opened');

});


//-------------------------------



// tabs

let tabsBtn = document.querySelectorAll('.step__btn');
let tabsItem = document.querySelectorAll('.guest__wrapper');

tabsBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function (btn) { btn.classList.remove('step__btn-active') });
        e.currentTarget.classList.add('step__btn-active');

        tabsItem.forEach(function (element) { element.classList.remove('guest__wrapper-activ') });
        document.querySelector(`[data-target="${path}"]`).classList.add('guest__wrapper-activ');
    });
});

//------------------------------------------

   





// slyder



new Swiper('.swiper', {

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    loop: true,

    a11y: {

        paginationBulletMessage: 'п'

    },


    slidesPerView: 4,
    spaceBetween: 30,


    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },

        // when window width is >= 1260px
        1260: {
            slidesPerView: 4,
            spaceBetween: 30,
        },

        
    },



    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

 /*           */ 





//----------------------------------------


new Accordion('.accordion-container');


// choices

document.addEventListener("DOMContentLoaded", function () {
    const selector = document.querySelector(".js-choice")

    const choices = new Choices(selector, {
        searchEnabled: false,
        itemSelectText: ' ',
        classNames: {
            containerOuter: 'choices header_choices',
        },
    });

});

//-------------------------------------------



// валидация формы

new JustValidate('.form-us', {
    rules: {
        name: {
            required: true,
            minLenght: 3,
            maxLenght: 30,
        },

        mail: {
            required: true,
            email: true,
        },
    },

    messages: {
        mail: {
            required: "Ошибка",
            errorMessage: 'Email is',
            email: 'Ошибка'
        },
        name: "Ошибка",
        
    },

    colorWrong: '#D52B1E',


});

new JustValidate('.form', {
    rules: {
        name: {
            required: true,
            minLenght: 3,
            maxLenght: 30,
        },

        mail: {
            required: true,
            email: true,
        },

        login: {
            remote: {
                sendParam: 'login',
                successAnswer: 'OK',
                method: 'GET'
            }
        }
    },

    messages: {
        mail: {
            required: "Ошибка",
            errorMessage: 'Ошибка',
            email: 'Ошибка'
        },
        name: "Ошибка",
        login: {
            remote: 'Ошибка',
            required: 'Ошибка!',
        }

    },

    colorWrong: '#D52B1E',


});


// кнопки

let playBtn = document.querySelectorAll('.cards__btn');

function fun() {
    if (this.classList.contains('cards__play-activ')) {
        this.classList.toggle('cards__play-activ');
        return;
    }

    for (let i = 0; i < playBtn.length; i++) {
        playBtn[i].classList.remove('cards__play-activ');
    }

    this.classList.toggle('cards__play-activ');
}

for (let i = 0; i < playBtn.length; i++) {
    playBtn[i].onclick = fun;
}



let music = document.querySelectorAll('.header-bottom__music-play');

function funPlay() {
    if (this.classList.contains('play-music')) {
        this.classList.toggle('play-music');
        return;
    }

    for (let i = 0; i < music.length; i++) {
        music[i].classList.remove('play-music');
    }

    this.classList.toggle('play-music');
}

for (let i = 0; i < music.length; i++) {
    music[i].onclick = funPlay;
}

