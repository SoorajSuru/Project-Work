const productsSection = document.querySelector(".products-section");
const product = document.querySelector(".product");
const navLinks = document.querySelectorAll(".nav-list li a");
const prodNavLinks = document.getElementsByClassName("prod-nav-link");

let trendingProducts = [
  {
    url: "url(../images/products/prod1.webp)",
    name: "Esprit Ruffle Shirt",
    price: 16.64,
    id: 1,
  },
  {
    url: "url(../images/products/prod2.webp)",
    name: "Herschel supply",
    price: 35.31,
    id: 2,
  },
  {
    url: "url(../images/products/prod3.webp)",
    name: "Only Check Trouser",
    price: 25.5,
    id: 3,
  },
  {
    url: "url(../images/products/prod4.webp)",
    name: "Classic Trench Coat",
    price: 75.1,
    id: 4,
  },
  {
    url: "url(../images/products/prod5.webp)",
    name: "Front Pocket Jumper",
    price: 34.75,
    id: 5,
  },
  {
    url: "url(../images/products/prod6.webp)",
    name: "Vintage Inspired Classic",
    price: 93.2,
    id: 6,
  },
  {
    url: "url(../images/products/prod7.webp)",
    name: "Shirt in Stretch Cotton",
    price: 52.66,
    id: 7,
  },
  {
    url: "url(../images/products/prod8.webp)",
    name: "Pieces Metallic Printed",
    price: 18.96,
    id: 8,
  },
  {
    url: "url(../images/products/prod9.webp)",
    name: "Converse All Star Hi Plimsolls",
    price: 75.11,
    id: 9,
  },
  {
    url: "url(../images/products/prod10.webp)",
    name: "Femme T-Shirt In Stripe",
    price: 25.85,
    id: 10,
  },
  {
    url: "url(../images/products/prod11.webp)",
    name: "Herschel supply",
    price: 63.16,
    id: 11,
  },
  {
    url: "url(../images/products/prod12.webp)",
    name: "Herschel supply Belt",
    price: 63.15,
    id: 12,
  },
  {
    url: "url(../images/products/prod13.webp)",
    name: "T-Shirt with Sleeve",
    price: 18.49,
    id: 13,
  },
  {
    url: "url(../images/products/prod14.webp)",
    name: "Pretty Little Thing",
    price: 54.79,
    id: 14,
  },
  {
    url: "url(../images/products/prod15.webp)",
    name: "Mini Silver Mesh Watch",
    price: 86.85,
    id: 15,
  },
  {
    url: "url(../images/products/prod16.webp)",
    name: "Square Neck Back",
    price: 29.64,
    id: 16,
  },
];

let shopProducts = [...trendingProducts];

let womenShopProducts = [
  {
    url: "url(../images/products/prod1.webp)",
    name: "Esprit Ruffle Shirt",
    price: 16.64,
    id: 1,
  },
  {
    url: "url(../images/products/prod2.webp)",
    name: "Herschel supply",
    price: 35.31,
    id: 2,
  },
  {
    url: "url(../images/products/prod4.webp)",
    name: "Classic Trench Coat",
    price: 75.1,
    id: 4,
  },
  {
    url: "url(../images/products/prod5.webp)",
    name: "Front Pocket Jumper",
    price: 34.75,
    id: 5,
  },
  {
    url: "url(../images/products/prod7.webp)",
    name: "Shirt in Stretch Cotton",
    price: 52.66,
    id: 7,
  },
  {
    url: "url(../images/products/prod8.webp)",
    name: "Pieces Metallic Printed",
    price: 18.96,
    id: 8,
  },
  {
    url: "url(../images/products/prod10.webp)",
    name: "Femme T-Shirt In Stripe",
    price: 25.85,
    id: 10,
  },
  {
    url: "url(../images/products/prod13.webp)",
    name: "T-Shirt with Sleeve",
    price: 18.49,
    id: 13,
  },
  {
    url: "url(../images/products/prod14.webp)",
    name: "Pretty Little Thing",
    price: 54.79,
    id: 14,
  },
  {
    url: "url(../images/products/prod16.webp)",
    name: "Square Neck Back",
    price: 29.64,
    id: 16,
  },
];

let menShopProducts = [
  {
    url: "url(../images/products/prod3.webp)",
    name: "Only Check Trouser",
    price: 25.5,
    id: 3,
  },
  {
    url: "url(../images/products/prod11.webp)",
    name: "Herschel supply",
    price: 63.16,
    id: 11,
  },
  {
    url: "url(../images/products/prod12.webp)",
    name: "Herschel supply Belt",
    price: 63.15,
    id: 12,
  },
];

let bagsShopProducts = [];

let shoesShopProducts = [
  {
    url: "url(../images/products/prod9.webp)",
    name: "Converse All Star Hi Plimsolls",
    price: 75.11,
    id: 9,
  },
];

let watchesShopProducts = [
  {
    url: "url(../images/products/prod6.webp)",
    name: "Vintage Inspired Classic",
    price: 93.2,
    id: 6,
  },
  {
    url: "url(../images/products/prod15.webp)",
    name: "Mini Silver Mesh Watch",
    price: 86.85,
    id: 15,
  },
];

// ----------------------------------------------------------------------------------------------------

let all = trendingProducts;

let activeLink = prodNavLinks[0];

if (window.location.href === navLinks[0].href) {
  addProducts(all);
} else if (window.location.href === navLinks[1].href) {
  addProducts(shopProducts);

  for (let i = 0; i < prodNavLinks.length; i++) {
    prodNavLinks[i].addEventListener("click", activeLinkHandler);
  }

  function activeLinkHandler() {
    activeLink.classList.remove("active");
    this.classList.add("active");
    activeLink = this;

    if (this.innerHTML == "All Products") {
      all = shopProducts;
    }

    if (this.innerHTML === "Women") {
      all = womenShopProducts;
    }

    if (this.innerHTML === "Men") {
      all = menShopProducts;
    }

    if (this.innerHTML === "Bags") {
      all = bagsShopProducts;
    }

    if (this.innerHTML === "Shoes") {
      all = shoesShopProducts;
    }

    if (this.innerHTML === "Watches") {
      all = watchesShopProducts;
    }

    productsSection.innerHTML = "";
    addProducts(all);
    console.log(all);
  }
}

//------------------------------------------------------------------------------------------------------------

function addProducts(all) {
  for (let i = 0; i < all.length; i++) {
    const prodCardTemplate = document.getElementById("product-card");
    const newCard = document.importNode(prodCardTemplate.content, true);
    newCard.querySelector(".product").id = all[i].id;
    newCard.querySelector(".prod-img").style.backgroundImage = all[i].url;
    newCard.querySelector(".prod-name").innerHTML = all[i].name;
    newCard.querySelector(".prod-price").innerHTML = "$" + all[i].price;

    newCard
      .querySelector(".layer button")
      .addEventListener("click", addToCartHandler);

    newCard
      .querySelector(".material-icons")
      .addEventListener("click", animateIcon);

    productsSection.append(newCard);
  }
}

//------------------------------------------------------------------------------------------------------------

function animateIcon() {
  if (this.innerHTML === "favorite_border") {
    this.innerHTML = "favorite";
    this.style.animation = "heart 2s ease-out 1";
    heart.style.animation = "heart 2s ease-out 1";
  } else {
    this.innerHTML = "favorite_border";
    if (this.style.animation) {
      this.style.removeProperty("animation");
      heart.style.removeProperty("animation");
    }
  }

  addToWishlist.call(this);
}

const heartItemTemplate = document.querySelector("#cart-heart-product");
const heartNavItems = document.querySelector(".heart-nav-items");

let heartProductId = [];

if (localStorage.getItem("heartProductIdArray") == null) {
  localStorage.setItem("heartProductIdArray", "[]");
}

function addToWishlist() {
  const triggeredId = parseInt(this.closest(".product").id);

  heartProductsId = JSON.parse(localStorage.getItem("heartProductIdArray"));

  const temp = heartProductsId.find((id) => {
    return id === triggeredId;
  });

  if (!temp) {
    heartProductsId.unshift(triggeredId);
    localStorage.setItem(
      "heartProductIdArray",
      JSON.stringify(heartProductsId)
    );
  }
}

//----------------------------------------------------------------------------------------------------

const cartItemTemplate = document.querySelector("#cart-heart-product");
const cartNavItems = document.querySelector(".cart-nav-items");

let cartProductsId = [];

if (localStorage.getItem("cartProductIdArray") == null) {
  localStorage.setItem("cartProductIdArray", "[]");
}

function addToCartHandler() {
  const triggeredId = parseInt(this.closest(".product").id);

  cartProductsId = JSON.parse(localStorage.getItem("cartProductIdArray"));
  const temp = cartProductsId.find((id) => {
    return id === triggeredId;
  });

  if (!temp) {
    cartProductsId.unshift(triggeredId);
    localStorage.setItem("cartProductIdArray", JSON.stringify(cartProductsId));
  }
}

//------------------------------------------------------------------------------------------------------

const categories = document.querySelectorAll(".categories-item");
const footerLinks = document.querySelectorAll(".footer-column-1 p");

for (let i = 0; i < categories.length; i++) {
  categories[i].addEventListener("click", redirectHandler);
}
for (let i = 0; i < footerLinks.length; i++) {
  footerLinks[i].addEventListener("click", redirectHandler);
}

function redirectHandler() {
  window.location.href = navLinks[1].href;
}

// --------------------------------------------------------------------------------------------------
