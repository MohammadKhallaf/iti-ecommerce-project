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

let products=[
  {
    name:"product name 1",
    tag:"laptop no 1",
    price:10 ,
    inCart:0
  },
  {
    name:"product name 2",
    tag:"laptop no 2",
    price:20 ,
    inCart:0
  },
  {
    name:"product name 3",
    tag:"laptop no 3",
    price:30 ,
    inCart:0
  },
  {
    name:"product name 4",
    tag:"laptop no 4",
    price:40 ,
    inCart:0
  },
  {
    name:"product name 5",
    tag:"laptop no 5",
    price:50 ,
    inCart:0
  },
  {
    name:"product name 6",
    tag:"laptop no 6",
    price:60 ,
    inCart:0
  },
  {
    name:"product name 7",
    tag:"laptop no 7",
    price:70 ,
    inCart:0
  },
  {
    name:"product name 8",
    tag:"laptop no 8",
    price:80 ,
    inCart:0
  },
];

let carts=document.querySelectorAll('.fa-shopping-cart')

for (let i=0;i<carts.length; i++)
{
  carts[i].addEventListener('click',()=>{ 
    cartNumbers(products[i]);
    totalCost(products[i]);
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

function cartNumbers(product){
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
  setItems(product);
}

function setItems(product){
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  if(cartItems != null){
    if(cartItems[product.tag] == undefined){
      cartItems = {
        ...cartItems,
        [product.tag]:product
      }
    }
    cartItems[product.tag].inCart += 1;
  }else{
    product.inCart = 1
    cartItems= {
      [product.tag]: product
    }
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems))
}

function totalCost(product){
  let cartCost =localStorage.getItem('totalCost');
  if(cartCost != null){
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost+ product.price)
  }else{
    localStorage.setItem("totalCost", product.price)
  }
}
onLoadCartNumbers1()

