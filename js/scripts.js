(function () {
    'use strict';

    var SLIDES_QUANTITY = 15;
    var slide = document.querySelector('.slide');
    var count = 1;

    function changeSlide () {
        slide.src = './img/slider/slide-' + (count++) + '.jpg';
        if (count === SLIDES_QUANTITY) count = 1;
    }       

    setInterval(changeSlide, 2000);
})();