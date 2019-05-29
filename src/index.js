import "./style.styl";
import "./jquery.firefly-0.7.min.js";
import "../node_modules/jquery/dist/jquery.js";
import "../node_modules/jquery/dist/jquery.min.js";
import "./jquery.fullPage.min.js";
// import "./blocks/gallery/gallery";
import "./owl.carousel.min.js";


$(function () {
    // $.firefly({
    //     color: '#fff',
    //     minPixel: 1,
    //     maxPixel: 4,
    //     total: 60,
    //     on: '#firefly',
    //     borderRadius: 50
    // });
    
    

    $(document).ready(function() {
        if($(window).width() >= 700){
            $('#fullpage').fullpage({
                anchors: ['block0','block1', 'block2', 'block3', 'block4'],
                menu: '#menu',
                css3: true,
                scrollHorizontally: false,
                scrollingSpeed: 1000,
                touchSensitivity: 10
            });
        } 
        // else {
        //     $('#fullpage').fullpage({
        //         scrollOverflow: false,
        //         resize : false
        //     });
        // }
    });
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            768:{
                items:2,
                nav:true
            },
            950:{
                items:3,
                nav:true,
                loop:true
            }
        }
    })

    
    // $(document).ready(function(){
    //     if($(window).width() <= 950){
    //     // Находим блок карусели
    //     var carousel = $("#product-carousel");
    
    //     // Запускаем плагин карусели
    //     carousel.owlCarousel({
    //         // singleItem: true, // Показывать только 1 блок на всю ширину
    //         items: 3,
    //         pagination: true,// Точки под каруселью
    //     });
    // } else {
    //     owl.addClass('off');
    // }
    // });
});

    