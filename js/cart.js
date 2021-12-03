
products=[
    {
      name:"product name 1",
      tag:"product01",
      price:10 ,
      inCart:0
    },
    {
      name:"product name 2",
      tag:"product02",
      price:20 ,
      inCart:0
    },
    {
      name:"product name 3",
      tag:"product03",
      price:30 ,
      inCart:0
    },
    {
      name:"product name 4",
      tag:"product04",
      price:40 ,
      inCart:0
    },
    {
      name:"product name 5",
      tag:"product05",
      price:50 ,
      inCart:0
    },
    {
      name:"product name 6",
      tag:"product06",
      price:60 ,
      inCart:0
    },
    {
      name:"product name 7",
      tag:"product07",
      price:70 ,
      inCart:0
    },
    {
      name:"product name 8",
      tag:"product08",
      price:80 ,
      inCart:0
    },
  ];
function displayCart()
{
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".procuctsAll");
    let cartCost = localStorage.getItem('tatalCost');
    console.log(cartItems)
    if ( cartItems && productContainer ){
        productContainer.innerHTML = '';
        Object.values(cartItems).map( item => {
            productContainer.innerHTML += 
            `<div class="productAdd">
                <i class="fas fa-window-close"></i>
                <img src="./res/img/${item.tag}.png">
                <span>${item.name}</span>
            </div>
            <div class="price">$${item.price},00</div>
            <div class="quantity">
                <span>${item.inCart}</span>
            </div>
            <div class="total">$${item.inCart * item.price},00</div>`;
        });


    }
}
displayCart()