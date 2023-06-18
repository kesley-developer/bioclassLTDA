function sliderEffect(){
    let imgs = document.querySelectorAll(".slide")    
    let currentSlide = 0;

    imgs.forEach((img) => {
      img.style.display = "none";
    });
  
    imgs[currentSlide].style.display = "block";
  
    setInterval(() => {
      imgs[currentSlide].style.display = "none";
      currentSlide = (currentSlide + 1) % imgs.length;
      imgs[currentSlide].style.display = "block";
    }, 3000);
}
sliderEffect()