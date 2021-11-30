"use strict";
/*________PAGE-ELEMENTS________*/

const addToCardButton = document.getElementById("add-to-cart");
const addReviewButton = document.getElementById("add-review");
const addWishButton = document.getElementById("add-to-wish");
const addCompareButton = document.getElementById("add-to-compare");
/*<--------------->*/
const facebookButton = document.getElementById("facebook-share");
const twitterButton = document.getElementById("twitter-share");
const mailButton = document.getElementById("mail-share");
/*<-------details__buttons-------->*/
const descriptionTabButton = document.getElementById("description-tab-btn");
const detailsTabButton = document.getElementById("details-tab-btn");
const reviewsTabButton = document.getElementById("reviews-tab-btn");
/*<-------details__tabs-------->*/

const detailsSectionView = document.querySelector(".details__section");
const descriptionView = detailsSectionView.querySelector(".details__description");
const detailsView = detailsSectionView.querySelector(".details__details");
const reviewsView = detailsSectionView.querySelector(".details__reviews");

/*________GLOBAL-VARIABLES________*/

/*========| GLOBAL-FUNCTIONS |========*/
// ignore preittier
const addToCartHandler = (e) => {
  e.preventDefault();
};

const addReviewHandler = (e) => {
  e.preventDefault();
};
const addWishHandler = (e) => {
  e.preventDefault();
};
const addCompareHandler = (e) => {
  e.preventDefault();
};

/* >----- share buttons ------< */
const facebookShare = (e) => {
  e.preventDefault();
};
const twitterShare = (e) => {
  e.preventDefault();
};
const mailShare = (e) => {
  e.preventDefault();
};
/* >----- details buttons ------< */
const descriptionTabHandler = (e) => {
  e.preventDefault();
  console.dir(e)
  descriptionView.classList.toggle("details--active");
  for (const element of detailsSectionView.children){
    if(element.classList.contains("details__description")) continue
    element.classList.remove("details--active")

  }
  
};
const detailsTabHandler = (e) => {
  e.preventDefault();
  detailsView.classList.toggle("details--active");
  for (const element of detailsSectionView.children){
    if(element.classList.contains("details__details")) continue
    element.classList.remove("details--active")

  }
};
const reviewsTabHandler = (e) => {
  e.preventDefault();
  reviewsView.classList.toggle("details__reviews--active");
  for (const element of detailsSectionView.children){
    if(element.classList.contains("details__reviews")) continue
    element.classList.remove("details--active")

  }
};

/*________HELPER-FUNCTIONS________*/

/*________EVENTS________*/

addToCardButton.addEventListener("click", addToCartHandler);
addReviewButton.addEventListener("click", addReviewHandler);
addWishButton.addEventListener("click", addWishHandler);
addCompareButton.addEventListener("click", addCompareHandler);
/*<--------------->*/
facebookButton.addEventListener("click", facebookShare);
twitterButton.addEventListener("click", twitterShare);
mailButton.addEventListener("click", mailShare);
/*<--------------->*/
descriptionTabButton.addEventListener("click", descriptionTabHandler);
detailsTabButton.addEventListener("click", detailsTabHandler);
reviewsTabButton.addEventListener("click", reviewsTabHandler);
