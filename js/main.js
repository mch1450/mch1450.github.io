
// NAV BAR add show when scrolling
// https://stackoverflow.com/questions/40967682/navbar-changing-to-add-shadow-on-scroll 
window.addEventListener('scroll',(e)=>{
   const nav = document.querySelector('.header');
   if(window.scrollY>0){
     nav.classList.add("add-shadow");
   }else{
     nav.classList.remove("add-shadow");
   }
});

// NAV BAR disappears when scrolling down, reappears when scrolling up
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function() {
  // current scroll position
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // user has scrolled up
    document.getElementById("header").style.display = 'flex';
  } else {
    // user has scrolled down
    document.getElementById("header").style.display = 'none';
  }
  // update previous scroll position
  prevScrollPos = currentScrollPos;
});


// BUTTON for hamburger menu 
var hamburger_button = document.querySelector("#hamburgerToggle");

hamburger_button.addEventListener("click", function onclick(event) {
  document.getElementById("myNav").style.height = "100%";
});

var close_button = document.querySelector("#closebtn");

close_button.addEventListener("click", function onclick(event) {
  document.getElementById("myNav").style.height = "0%";
})


// BUTTON for light/dark mode toggle

var mode_button = document.querySelector("#modeToggle");

mode_button.addEventListener("click", function onclick(event) {
  var element = document.body;
  element.classList.toggle("light-mode");
});

let changeIcon = function(icon) {
	icon.classList.toggle('ri-sun-line')
}

// IMAGE MODAL
var modal = document.getElementById("myModal");

let openModal = function() {
  modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// CAROUSEL

const myslide = document.querySelectorAll('.myslide'),
	    dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

function plusSlides(n) {
	counter += n;
	slidefun(counter);
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}


// PROJECT MODAL
var proj_modal = document.getElementById("myModal2");

let openProjModal = function() {
  proj_modal.style.display = "block";
}

let closeModal = function(){
  var modal = document.getElementById("myModal2");
  modal.style.display = "none";
}