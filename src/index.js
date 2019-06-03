import "./style.styl";
import "./jquery.firefly-0.7.min.js";
import "../node_modules/jquery/dist/jquery.js";
import "../node_modules/jquery/dist/jquery.min.js";
import "./jquery.fullPage.min.js";
// import "./blocks/gallery/gallery";
import "./owl.carousel.min.js";


// const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
//       animationTime = 300,
//       framesCount = 20;

// anchors.forEach(function(item) {
//   // каждому якорю присваиваем обработчик события
//   item.addEventListener('click', function(e) {
//     // убираем стандартное поведение
//     e.preventDefault();
    
//     // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
//     let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;
    
//     // запускаем интервал, в котором
//     let scroller = setInterval(function() {
//       // считаем на сколько скроллить за 1 такт
//       let scrollBy = coordY / framesCount;
      
//       // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
//       // и дно страницы не достигнуто
//       if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
//         // то скроллим на к-во пикселей, которое соответствует одному такту
//         window.scrollBy(0, scrollBy);
//       } else {
//         // иначе добираемся до элемента и выходим из интервала
//         window.scrollTo(0, coordY);
//         clearInterval(scroller);
//       }
//     // время интервала равняется частному от времени анимации и к-ва кадров
//     }, animationTime / framesCount);
//   });
// });
$(function () {

    
    // $.firefly({
    //     color: '#fff',
    //     minPixel: 1,
    //     maxPixel: 4,
    //     total: 60,
    //     on: '#firefly',
    //     borderRadius: 50
    // });
    // $("html,body").animate({scrollTop:0},500);

    $(document).ready(function() {
        if($(window).width() >= 700){
            $('#fullpage').fullpage({
                anchors: ['block0','block1', 'block2', 'block3', 'block4'],
                menu: '#menu',
                css3: true,
                scrollHorizontally: false,
                scrollingSpeed: 1000,
                touchSensitivity: 10,
                loopTop: true,
                loopBottom: true
            });
        } 
        // else {
        //     var $page = $('html, body');
        //     $('a[href*="#"]').click(function() {
        //     $page.animate({
        //         scrollTop: $($.attr(this, 'href')).offset().top
        //     }, 800);
        //     return false;
        // });
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
    $("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "https://pipec2012.github.io/Solaris12/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});
    // if($(window).width() <= 700){
        
    // } 
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

    