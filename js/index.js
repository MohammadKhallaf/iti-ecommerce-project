/*---slider---*/
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

//hot deal counter

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
var now = new Date().getTime();
    
// Find the distance between now and the count down date
var distance = countDownDate - now;
    
// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("day").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = minutes;
  document.getElementById("secs").innerHTML = seconds;
  //  + "d " + hours + "h "
  // + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  // if (distance < 0) {
  //   clearInterval(x);
  //   document.getElementById("demo").innerHTML = "EXPIRED";
  // }
}, 1000);

//location
function goPosition() {

  var url = "http://maps.google.com/maps/"+ "place/Gleem+Bay/@31.2428335,29.9564149,17z/data=!3m1!4b1!4m5!3m4!1s0x14f5c57ba821e56d:0x133d5c82c18cd7!8m2!3d31.2428335!4d29.9586036" ;
  window.open(url,'_blank');
}

//add to cart

let carts=document.querySelectorAll('.fa-shopping-cart')

for (let i=0;i<carts.length; i++)
{
  carts[i].addEventListener('click',()=>{ 
    cartNumbers();
  })
}

function onLoadCartNumbers1()
{
  let productNumbers = localStorage.getItem('cartNumbers');
  if( productNumbers <1){
    var x= document.getElementById('basketNumber')
    x.remove();
  }
  else{
    document.getElementById('basket').appendChild(document.createElement("SPAN"));
    document.querySelector('.cart span').textContent= productNumbers;
  }
  // console.log("first")
}
function onLoadCartNumbers()
{
    document.getElementById('basket').appendChild(document.createElement("SPAN"));
    document.querySelector('.cart span').textContent= productNumbers;
  
}

function cartNumbers(){
  var h1 = document.getElementsByTagName("span")[0];   // Get the first <h1> element in the document
  var att = document.createAttribute("id");       // Create a "class" attribute
  att.value = "basketNumber";                           // Set the value of the class attribute
  h1.setAttributeNode(att);
  
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);

  if( productNumbers ){
    localStorage.setItem('cartNumbers', productNumbers+1);
    document.querySelector('.cart span').textContent= productNumbers+1;
  }else {
    localStorage.setItem('cartNumbers',1);
    document.querySelector('.cart span').textContent=1;
  }
  // console.log("first")
}
onLoadCartNumbers1()