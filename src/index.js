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
        $('#fullpage').fullpage({
            anchors: ['block0','block1', 'block2', 'block3', 'block4'],
            menu: '#menu',
            css3: true,
            
            scrollingSpeed: 1000,
            touchSensitivity: 10
        });
    });
    
    $(document).ready(function(){
	
        // Находим блок карусели
        var carousel = $("#carousel");
    
        // Запускаем плагин карусели
        carousel.owlCarousel({
            singleItem: true, // Показывать только 1 блок на всю ширину
            
            pagination: true,// Точки под каруселью
            // itemsMobile:[900, 3],
        });
        
    });
});

    