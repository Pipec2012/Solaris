

   var nextSlide = document.querySelector('#next');
   var prevSlide = document.querySelector('#prev');
   var slides = document.getElementsByClassName("slide-img");
   var currentSlide = 0;
   var b = 1;
   if( currentSlide == 0) {
      prevSlide.style.display = 'none';
      nextSlide.onclick = function () {
         b +=1;
         currentSlide = (currentSlide+1);
         slides[currentSlide].style.zIndex = b;
         prevSlide.style.display = 'block';
     if(currentSlide == (slides.length/8)-1)  {
         nextSlide.style.display = 'none';
         
     }  

     prevSlide.onclick = function () {

      b +=1;
      currentSlide = (currentSlide-1);
      slides[currentSlide].style.zIndex = b;
      nextSlide.style.display = 'block';
      if(currentSlide == 0)  {
         prevSlide.style.display = 'none';
         
      }     
     }
   }
}