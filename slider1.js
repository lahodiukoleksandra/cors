function showInfo() {
        const info = document.getElementById('text').innerText = "Regional Center for Vocational Education in Nisko. In our school there are such areas of study as: mechanic, electrician, graphic artist, programmer, economist, administrator and others. Also our school takes part in project ERASMUS, which allows students to have practice abroad, in countries like Germany or Ireland";
        const picture = document.getElementById('pic').innerHTML = '<img src=\"/Users/aleksandra/Downloads/logoRZEZ.png\" text-align=\'center\' width=\'500px\' height=\'500px\'>';
};

function showCity1() {
  const pic = document.getElementById('pic');
  pic.innerHTML = '<img src=\"/Users/aleksandra/Downloads/photoDrezden.jpeg\" text-align=\'center\' width=\'500px\' height=\'500px\'>';
  pic.style.display = 'initial';
};

  function showCity2() {
  const pic = document.getElementById('pic');
  pic.innerHTML = '<img src=\"/Users/aleksandra/Downloads/photoSchkeudiz.jpeg\" text-align=\'center\' width=\'500px\' height=\'500px\'>';
  pic.style.display = 'initial';
}; 
function showCity3() {
  const pic = document.getElementById('pic');
  pic.innerHTML = '<img src=\"/Users/aleksandra/Downloads/photoLiepzig.jpeg\" text-align=\'center\' width=\'500px\' height=\'500px\'>'; //Show city2
  pic.style.display = 'initial';
  // const text = document.getElementById('text').innerText = "Leipzig is the most populous city in the German state of Saxony. With a population of 605,407 inhabitants as of million residents in the larger urban zone, it surpasses the Saxon capital of Dresden, and is Germany's eighth most populous city as well as the second most populous city in the area of former East Germany after (East) Berlin. "

} 
function showPic() {
  // const picture = document.getElementById('pic').innerHTML = '<img src=\"/Users/a21/Downloads/photo5427104148647688057.jpg\" text-align=\'center\' width=\'400px\' height=\'500px\'>'; //Show city3
  // const text = document.getElementById('text').innerText = "The first week at Germany"
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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