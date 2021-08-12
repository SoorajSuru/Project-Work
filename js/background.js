let images = [
  "../images/slide1.webp",
  "../images/slide2.webp",
  "../images/slide3.webp",
];

let h3 = ["New Season", "Women Collection", "Mens Collection"];

const backgroundContainer = document.querySelector(".landing-img-container");
const headingH3 = document.querySelector(".landing-img-container-content h3");
const headingH1 = document.querySelector(".landing-img-container-content h1");
const headingButton = document.querySelector(
  ".landing-img-container-content button"
);

let i = 1;
setInterval(function () {
  backgroundContainer.style.backgroundImage = "url(" + images[i] + ")";
  headingH3.innerHTML = h3[i];
  if(i==0){
    headingH3.style.animation="h3 5s linear infinite";
    headingH1.style.animation="h1 5s linear infinite";
    headingButton.style.animation="button1 5s linear infinite";
  }
  else if(i==1){
    headingH3.style.animation="h32 5s linear infinite";
    headingH1.style.animation="h12 5s linear infinite";
    headingButton.style.animation="button2 5s linear infinite";
  }
  else if(i==2){
    headingH3.style.animation="h33 5s linear infinite";
    headingH1.style.animation="h13 5s linear infinite";
    headingButton.style.animation="button3 5s linear infinite";
  }

  i++;
  if (i == images.length) {
    i = 0;
  }
}, 5000);
