// const prodNavLinks = document.getElementsByClassName("prod-nav-link");

// let activeLink = prodNavLinks[0];

// for (let i = 0; i < prodNavLinks.length; i++) {
//   prodNavLinks[i].addEventListener("click", activeLinkHandler);
// }

// function activeLinkHandler() {
//   activeLink.classList.remove("active");
//   this.classList.add("active");
//   activeLink = this;
// }

//--------------------------------------------------------------------------------------------------------


const currentLocation=window.location.href;

for(let i=0;i<navLinks.length;i++){
  if(currentLocation===navLinks[i].href){
    navLinks[i].classList.add("active-nav");
  }
}












const cartNav = document.querySelector(".cart-nav");
const heartNav = document.querySelector(".heart-nav");
const backdrop = document.querySelector(".backdrop");
const ham = document.querySelectorAll(".ham");
const cart = document.querySelector(".cart");
const heart = document.querySelector(".heart");

function cartHandler() {
  backdrop.classList.add("open");
  cartNav.classList.add("open");
  document.body.classList.add("backdrop-open");

  cartNavItems.innerHTML = "";
  const cartArray = JSON.parse(localStorage.getItem("cartProductIdArray"));

  for (let i = 0; i < cartArray.length; i++) {
    const j = cartArray[i] - 1;

    const newCartItem = document.importNode(cartItemTemplate.content, true);
    newCartItem.querySelector(".cart-item").id = cartArray[i];
    const newCartItemImg = newCartItem.querySelector(
      ".cart-item .cart-prod-img"
    );
    const newCartItemName = newCartItem.querySelector(".cart-item .name");
    const newCartItemPrice = newCartItem.querySelector(".cart-item .price");

    newCartItemImg.style.backgroundImage = all[j].url;
    newCartItemName.innerHTML = all[j].name;
    newCartItemPrice.innerHTML = "$" + all[j].price;

    newCartItem
      .querySelector("button")
      .addEventListener("click", removeCartProduct);

    cartNavItems.append(newCartItem);
  }
}

function removeCartProduct() {
  const id = parseInt(this.closest(".cart-item").id);
  const cartArray = JSON.parse(localStorage.getItem("cartProductIdArray"));

  cartArray.splice(cartArray.indexOf(id), 1);
  localStorage.setItem("cartProductIdArray", JSON.stringify(cartArray));
  cartHandler();
}

function heartHandler() {
  backdrop.classList.add("open");
  heartNav.classList.add("open");
  document.body.classList.add("backdrop-open");

  heartNavItems.innerHTML = "";
  const heartArray = JSON.parse(localStorage.getItem("heartProductIdArray"));

  for (let i = 0; i < heartArray.length; i++) {
    const j = heartArray[i] - 1;

    const newHeartItem = document.importNode(heartItemTemplate.content, true);
    newHeartItem.querySelector(".heart-item").id = heartArray[i];
    const newHeartItemImg = newHeartItem.querySelector(
      ".heart-item .heart-prod-img"
    );
    const newHeartItemName = newHeartItem.querySelector(".heart-item .name");
    const newHeartItemPrice = newHeartItem.querySelector(".heart-item .price");

    newHeartItemImg.style.backgroundImage = all[j].url;
    newHeartItemName.innerHTML = all[j].name;
    newHeartItemPrice.innerHTML = "$" + all[j].price;

    newHeartItem
      .querySelector("button")
      .addEventListener("click", removeHeartProduct);

    heartNavItems.append(newHeartItem);
  }
}

function removeHeartProduct() {
  const id = parseInt(this.closest(".heart-item").id);
  const heartArray = JSON.parse(localStorage.getItem("heartProductIdArray"));

  heartArray.splice(heartArray.indexOf(id), 1);
  localStorage.setItem("heartProductIdArray", JSON.stringify(heartArray));
  heartHandler();
}

function hamHandler() {
  cartNav.classList.remove("open");
  heartNav.classList.remove("open");
  backdrop.classList.remove("open");
  document.body.classList.remove("backdrop-open");
}

function backdropHandler() {
  cartNav.classList.remove("open");
  heartNav.classList.remove("open");
  backdrop.classList.remove("open");
  document.body.classList.remove("backdrop-open");
}

backdrop.addEventListener("click", backdropHandler);
cart.addEventListener("click", cartHandler);
heart.addEventListener("click", heartHandler);

for (let i = 0; i < ham.length; i++) {
  ham[i].addEventListener("click", hamHandler);
}
