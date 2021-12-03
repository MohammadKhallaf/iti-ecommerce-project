const productsList = [
  {
    imgSrc: "./res/img/product01.png",
    category: "category 1",
    name: "Product 1",
    oldPrice: "$200",
    newPrice: "",
    rating: "",
    isNew: false,
    wishlisted: false,
  },
  {
    imgSrc: "./res/img/product02.png",
    category: "category 2",
    name: "Product 1",
    oldPrice: "$200",
    newPrice: "",
    rating: "",
    isNew: false,
    wishlisted: false,
  },
  {
    imgSrc: "./res/img/product03.png",
    category: "category 1",
    name: "Product 1",
    oldPrice: "$200",
    newPrice: "",
    rating: "",
    isNew: false,
    wishlisted: false,
  },
  {
    imgSrc: "./res/img/product04.png",
    category: "category 3",
    name: "Product 1",
    oldPrice: "$200",
    newPrice: "",
    rating: "",
    isNew: false,
    wishlisted: false,
  },
  {
    imgSrc: "./res/img/product05.png",
    category: "category 2",
    name: "Product 1",
    oldPrice: "$200",
    newPrice: "",
    rating: "",
    isNew: false,
    wishlisted: false,
  },
  {
    imgSrc: "./res/img/product06.png",
    category: "category 1",
    name: "Product 1",
    oldPrice: "$200",
    newPrice: "",
    rating: "",
    isNew: false,
    wishlisted: false,
  },
  {
    imgSrc: "./res/img/product07.png",
    category: "category 4",
    name: "Product 1",
    oldPrice: "$200",
    newPrice: "",
    rating: "",
    isNew: false,
    wishlisted: false,
  },
  {
    imgSrc: "./res/img/product08.png",
    category: "category 1",
    name: "Product 1",
    oldPrice: "$200",
    newPrice: "",
    rating: "",
    isNew: false,
    wishlisted: false,
  },
  {
    imgSrc: "./res/img/product09.png",
    category: "category 5",
    name: "Product 1",
    oldPrice: "$200",
    newPrice: "",
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
  <p class="store__item_name">Camera</p>
  <p class="store__item_price">
    <span class="price-current">$499</span>
    <span class="price-before">$500</span>
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
for (let i = 0; i < 9; i++) {
  let element = document.createElement("div");
  element.className = "store__item__container";
  element.innerHTML = buildTemplate(i);
  document.querySelector(".products__grid").appendChild(element);
}
