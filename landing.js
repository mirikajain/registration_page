let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



function colourStar(){
  var element, starClicked, elms;

  const stars = document.querySelectorAll(".stars");
  
  stars[0].addEventListener("click",(e)=>{
    element = new DOMParser().parseFromString(e.target.outerHTML, "text/xml");
    starClicked = element.getElementById("star").getAttribute("value");
    elms = document.querySelectorAll("#star");
    elms.forEach(elm => {
      if(parseInt(elm.getAttribute("value")) <= parseInt(starClicked)){
        elm.className += " active";
      }
    });
  })
}

