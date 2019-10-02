
import "./style.styl";
import "./blocks/product/product";
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
    // $("html,body").animate({scrollTop:0},500);

    $(document).ready(function() {
        if($(window).width() >= 700){
            $('#fullpage').fullpage({
                anchors: ['home','product', 'project', 'block3', 'block4'],
                menu: '#menu',
                css3: true,
                scrollHorizontally: false,
                scrollingSpeed: 1000,
                touchSensitivity: 10
            });
        } 
        
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

   
   
// let selectedTd;

// table.onclick = function(event) {
//   let target = event.target; // где был клик?

//   if (target.tagName != 'TD') return; // не на TD? тогда не интересует

//   highlight(target); // подсветить TD
// };

// function highlight(td) {
//   if (selectedTd) { // убрать существующую подсветку, если есть
//     selectedTd.classList.remove('highlight');
//   }
//   selectedTd = td;
//   selectedTd.classList.add('highlight'); // подсветить новый td
// }
    

    $("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "http://solarischair.ru/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});


});


