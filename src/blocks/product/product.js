

   var backgrounds = ['./assets/solaris/img/mercury.png','./assets/solaris/img/chair-bubble.jpg']
   var planet_image = document.querySelector('.img__mercury');
   var BACKGROUND_IMAGE_CHANGE_INTERVAL = 4 * 1000;
   var currentImage = 0;
   (function showNextImage() {
      
      planet_image .style.backgroundImage = 'url(' + backgrounds[currentImage] + ')'
      planet_image.style.backgroundSize = 'contain';
   currentImage += 1
   if (currentImage == backgrounds.length) {
   currentImage = 0
   planet_image.style.backgroundSize = 'cover';
   return false;
   }
   setTimeout(showNextImage, BACKGROUND_IMAGE_CHANGE_INTERVAL)
   
   }());

   

   var backgrounds_1 = [
   './assets/solaris/img/venus.png',
   './assets/solaris/img/card__venus.jpg']
   var planet_image_1  = document.querySelector('.img__venus');
   var BACKGROUND_IMAGE_CHANGE_INTERVAL = 4 * 1000;
   var currentImage_1 = 0;
   (function showNextImage() {
      
      planet_image_1.style.backgroundImage = 'url(' + backgrounds_1[currentImage_1] + ')'
      planet_image_1.style.backgroundSize = 'contain';
   currentImage_1 += 1
   if (currentImage_1 == backgrounds_1.length) {
   currentImage_1 = 0
   planet_image_1.style.backgroundSize = 'cover';
   return false;
   }
   setTimeout(showNextImage, BACKGROUND_IMAGE_CHANGE_INTERVAL)
   }());


   var backgrounds_2 = ['./assets/solaris/img/earth2.png','./assets/solaris/img/card__earth.jpg']
   var planet_image_2  = document.querySelector('.img__earth');
   var BACKGROUND_IMAGE_CHANGE_INTERVAL = 4 * 1000;
   var currentImage_2 = 0;
   (function showNextImage() {
      planet_image_2.style.backgroundImage = 'url(' + backgrounds_2[currentImage_2] + ')'
      planet_image_2.style.backgroundSize = 'contain';
   currentImage_2 += 1
   if (currentImage_2 == backgrounds_2.length) {
   currentImage_2 = 0
   planet_image_2.style.backgroundSize = 'cover';
   return false;
   }
   setTimeout(showNextImage, BACKGROUND_IMAGE_CHANGE_INTERVAL)
   }());



   // var backgrounds_3 = ['./assets/solaris/img/mars.png',
   // './assets/solaris/img/chair-bubble.jpg']
   // var planet_image_3  = document.querySelector('.img__mars');
   // var BACKGROUND_IMAGE_CHANGE_INTERVAL = 2 * 1000;
   // var currentImage_3 = 0;
   // (function showNextImage() {
   //    planet_image_3.style.backgroundImage = 'url(' + backgrounds_3[currentImage_3] + ')'
   // planet_image_3.style.backgroundSize = 'contain';
   // currentImage_3 += 1
   // if (currentImage_3 == backgrounds_3.length) {
   // currentImage_3 = 0
   // planet_image_3.style.backgroundSize = 'cover';
   // }
   // setTimeout(showNextImage, BACKGROUND_IMAGE_CHANGE_INTERVAL)
   // }());



   var backgrounds_4 = [
   './assets/solaris/img/jupiter.png',
   './assets/solaris/img/card__jupiter.jpg'
   ]
   var planet_image_4  = document.querySelector('.img__jupiter');
   var BACKGROUND_IMAGE_CHANGE_INTERVAL = 4 * 1000;
   var currentImage_4 = 0;
   (function showNextImage() {
      planet_image_4.style.backgroundImage = 'url(' + backgrounds_4[currentImage_4] + ')'
      planet_image_4.style.backgroundSize = 'contain';
   currentImage_4 += 1
   if (currentImage_4 == backgrounds_4.length) {
      currentImage_4 = 0
      planet_image_4.style.backgroundSize = 'cover';
      return false;
   }
   setTimeout(showNextImage, BACKGROUND_IMAGE_CHANGE_INTERVAL)
   }());



   var backgrounds_5 = [
   './assets/solaris/img/saturn.png',
   './assets/solaris/img/card__saturn.jpg'
   ]
   var planet_image_5  = document.querySelector('.img__saturn');
   var BACKGROUND_IMAGE_CHANGE_INTERVAL = 4 * 1000;
   var currentImage_5 = 0;
   (function showNextImage() {
      if ( document.body.clientWidth > 700 ) {

         planet_image_5.style.backgroundImage = 'url(' + backgrounds_5[currentImage_5] + ')',
         planet_image_5.style.width = '20vw';
         planet_image_5.style.height = '14vw';
         planet_image_5.style.margin = '0 -4vw';
         planet_image_5.style.backgroundSize = 'contain';
         currentImage_5 += 1
         if (currentImage_5 == backgrounds_5.length) {
            currentImage_5 = 0;
            planet_image_5.style.width = '9vw';
            planet_image_5.style.height = '1vw';
            planet_image_5.style.margin = '6.5vw 1vw';
            planet_image_5.style.backgroundSize = 'cover';
            return false;
         }
     } else {
         planet_image_5.style.backgroundImage = 'url(' + backgrounds_5[currentImage_5] + ')',
         planet_image_5.style.width = '20vw';
         planet_image_5.style.height = '14vw';
         // planet_image_5.style.margin = '0 -4vw';
         planet_image_5.style.backgroundSize = 'contain';
         currentImage_5 += 1
      if (currentImage_5 == backgrounds_5.length) {
         currentImage_5 = 0;
         planet_image_5.style.width = '9vw';
         planet_image_5.style.height = '1vw';
         // planet_image_5.style.margin = '6.5vw 1vw';
         planet_image_5.style.backgroundSize = 'cover';
         return false;
      }

     }
   
     
      
      setTimeout(showNextImage, BACKGROUND_IMAGE_CHANGE_INTERVAL)
   }());



   var backgrounds_6 = [
   './assets/solaris/img/uranus.png',
   './assets/solaris/img/card__uranus.jpg'

   ]
   var planet_image_6  = document.querySelector('.img__uranus');
   var BACKGROUND_IMAGE_CHANGE_INTERVAL = 4 * 1000;
   var currentImage_6 = 0;
   (function showNextImage() {
      planet_image_6.style.backgroundImage = 'url(' + backgrounds_6[currentImage_6] + ')'
      planet_image_6.style.backgroundSize = 'contain';
      currentImage_6 += 1
      if (currentImage_6 == backgrounds_6.length) {
         currentImage_6 = 0
         planet_image_6.style.backgroundSize = 'cover';
         return false;
      }
      setTimeout(showNextImage, BACKGROUND_IMAGE_CHANGE_INTERVAL)
   }());



   // var backgrounds_7 = [
   // './assets/solaris/img/neptune.png',
   // './assets/solaris/img/card__neptune.jpg'

   // ]
   // var planet_image_7  = document.querySelector('.img__neptune');
   // var BACKGROUND_IMAGE_CHANGE_INTERVAL = 2 * 1000;
   // var currentImage_7 = 0;
   // (function showNextImage() {
   //    planet_image_7.style.backgroundImage = 'url(' + backgrounds_7[currentImage_7] + ')'
   // planet_image_7.style.backgroundSize = 'contain';
   //       currentImage_7 += 1
   //       if (currentImage_7 == backgrounds_7.length) {
   //          currentImage_7 = 0
   // planet_image_7.style.backgroundSize = 'cover';
   //       }
   //       setTimeout(showNextImage, BACKGROUND_IMAGE_CHANGE_INTERVAL)
   // }());

   
