"use strict";
/*<<==========| PAGE-ELEMENTS |==========>>*/
const productGrid = document.querySelector(".products__grid");
const categoryListView = document.querySelector(".category__list");
/*<<==========| GLOBAL-VARIABLES |==========>>*/

/*<<==========| GLOABAL-FUNCTIONS |==========>>*/

/*<<==========| HELPER-FUNCTIONS |==========>>*/

const productsList = [
  {
    imgSrc: "./res/img/product01.png",
    category: "category 1",
    name: "Laptop HP",
    oldPrice: 200,
    newPrice: 199,
    rating: "",
    isNew: false,
    wishlisted: false,
  },
  {
    imgSrc: "./res/img/product02.png",
    category: "category 2",
    name: "Headset 1",
    oldPrice: 27,
    newPrice: "",
    rating: "",
    isNew: false,
    wishlisted: false,
  },
  {
    imgSrc: "./res/img/product03.png",
    category: "category 1",
    name: "Laptop Dell",
    oldPrice: 201,
    newPrice: 200,
    rating: "",
    isNew: false,
    wishlisted: false,
  },
  {
    imgSrc: "./res/img/product04.png",
    category: "category 3",
    name: "Tablet",
    oldPrice: 33,
    newPrice: 32.5,
    rating: "",
    isNew: false,
    wishlisted: false,
  },
  {
    imgSrc: "./res/img/product05.png",
    category: "category 2",
    name: "Headset 2",
    oldPrice: 20,
    newPrice: 18,
    rating: "",
    isNew: false,
    wishlisted: false,
  },
  {
    imgSrc: "./res/img/product06.png",
    category: "category 1",
    name: "Product 1",
    oldPrice: 207,
    newPrice: 205,
    rating: "",
    isNew: false,
    wishlisted: false,
  },
  {
    imgSrc: "./res/img/product07.png",
    category: "category 4",
    name: "Product 1",
    oldPrice: 130,
    newPrice: 129,
    rating: "",
    isNew: false,
    wishlisted: false,
  },
  {
    imgSrc: "./res/img/product08.png",
    category: "category 1",
    name: "Product 1",
    oldPrice: "",
    newPrice: 150,
    rating: "",
    isNew: false,
    wishlisted: false,
  },
  {
    imgSrc: "./res/img/product09.png",
    category: "category 5",
    name: "Product 1",
    oldPrice: 180,
    newPrice: 170,
    rating: "",
    isNew: false,
    wishlisted: false,
  },
];


const buildTemplate = (index) => {
  let template = `
  <div class="store__item">
  <img src=${productsList[index].imgSrc} alt="" />
  <p class="store__item_category">${productsList[index].category}</p>
  <p class="store__item_name">${productsList[index].name}</p>
  <p class="store__item_price">
    <span class="price-current">$${productsList[index].newPrice}</span>
    <span class="price-before">$${productsList[index].oldPrice}</span>
    </p>
    <div class="store__item__footer">
    <i class="far fa-heart"></i>
    <i class="fas fa-th-list"></i>
    <i class="fas fa-eye"></i>
  </div>
  </div>
  <div class="store__item__drop">
  <a class="btn">
  <i class="fas fa-cart-plus"></i>
  Add to cart</a
  >
  </div>
  
<!-- ======================== -->
<!-- item end -->

</div>
<!-- product container end ^ -->`;
  return template;
};

const buildCategoryList = () => {
  /** Build unique categries array */
  let categoryList = productsList.map((element) => {
    return element.category;
  });
  categoryList = categoryList.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  /*----------------*/
  let fragment = new DocumentFragment();
  categoryList.forEach((categoryName, index) => {
    let choiceContainer = document.createElement("div");
    choiceContainer.classList.add("category__item")
    let choice = document.createElement("input");
    choice.type = "checkbox";
    choice.name = `cat-${index}`;
    choice.id = `cat-${index}`;
    choiceContainer.appendChild(choice);
    let choiceLabel = document.createElement("label");
    choiceLabel.setAttribute("for", `cat-${index}`);
    choiceLabel.innerText = ` ${categoryName}`;
    choiceContainer.appendChild(choiceLabel);
    fragment.appendChild(choiceContainer)
  });
  categoryListView.appendChild(fragment);
};

for (let i = 0; i < productsList.length; i++) {
  let element = document.createElement("div");
  element.className = "store__item__container";
  element.innerHTML = buildTemplate(i);
  productGrid.appendChild(element);
}

/*<<==========| PAGE-EVENTS |==========>>*/
window.onload = () => {
  buildCategoryList();
};
