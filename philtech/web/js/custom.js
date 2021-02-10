//Slide 1
	function openModal() {
	  document.getElementById("myModal").style.display = "block";
    }
    
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
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
	  var dots = document.getElementsByClassName("demo");
	  var captionText = document.getElementById("caption");
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
	  captionText.innerHTML = dots[slideIndex-1].alt;
	}

//Slide 2
function openModal2() {
    document.getElementById("myModal2").style.display = "block";
  }
  
  function closeModal2() {
      document.getElementById("myModal2").style.display = "none";
    }
  
  var slideIndex2 = 1;
  showSlides2(slideIndex2);
  
  function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
  }
  
  function currentSlide(n) {
    showSlides2(slideIndex2 = n);
  }
  
  function showSlides2(n) {
    var i;
    var slides2 = document.getElementsByClassName("mySlides2");
    var dots2 = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides2.length) {slideIndex2 = 1}
    if (n < 1) {slideIndex2 = slides2.length}
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    for (i = 0; i < dots2.length; i++) {
        dots[i].className = dots2[i].className.replace(" active", "");
    }
    slides2[slideIndex2-1].style.display = "block";
    dots2[slideIndex2-1].className += " active";
    captionText.innerHTML = dots2[slideIndex2-1].alt;
  }


// Slide 3
function openModal3() {
    document.getElementById("myModal3").style.display = "block";
  }

function closeModal3() {
    document.getElementById("myModal3").style.display = "none";
}

//Slide 4
function openModal4() {
  document.getElementById("myModal4").style.display = "block";
}

function closeModal4() {
    document.getElementById("myModal4").style.display = "none";
  }

var slideIndex4 = 1;
showSlides4(slideIndex4);

function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}

function currentSlide(n) {
  showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
  var i;
  var slides4 = document.getElementsByClassName("mySlides4");
  var dots4 = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides4.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = slides4.length}
  for (i = 0; i < slides4.length; i++) {
      slides4[i].style.display = "none";
  }
  for (i = 0; i < dots4.length; i++) {
      dots[i].className = dots4[i].className.replace(" active", "");
  }
  slides4[slideIndex4-1].style.display = "block";
  dots4[slideIndex4-1].className += " active";
  captionText.innerHTML = dots4[slideIndex4-1].alt;
}



//Slide 5
function openModal5() {
  document.getElementById("myModal5").style.display = "block";
}

function closeModal5() {
    document.getElementById("myModal5").style.display = "none";
  }

var slideIndex5 = 1;
showSlides5(slideIndex5);

function plusSlides5(n) {
  showSlides5(slideIndex5 += n);
}

function currentSlide(n) {
  showSlides5(slideIndex5 = n);
}

function showSlides5(n) {
  var i;
  var slides5 = document.getElementsByClassName("mySlides5");
  var dots5 = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides5.length) {slideIndex5 = 1}
  if (n < 1) {slideIndex5 = slides5.length}
  for (i = 0; i < slides5.length; i++) {
      slides5[i].style.display = "none";
  }
  for (i = 0; i < dots5.length; i++) {
      dots[i].className = dots5[i].className.replace(" active", "");
  }
  slides5[slideIndex5-1].style.display = "block";
  dots5[slideIndex5-1].className += " active";
  captionText.innerHTML = dots5[slideIndex5-1].alt;
}