let imageAnzahl = 5;
let image = new Array(imageAnzahl);
let sliderImage = document.getElementById("slider-images");
let counter = 1;
let width = window.innerWidth;
let originalImgWidth;
let originalImgHeight;
let currentImgWidth;

window.onload = imageCreator;
window.addEventListener("resize", function() {
    sliderImage.style.cssText = "margin-left: 0;";
    counter = 1;
    width = window.innerWidth;
    console.log(width);
});


function imageCreator(){
    width = window.innerWidth;
    for (let i = 1; i <= imageAnzahl; i++) {
        image[i] = new Image();
        image[i].src = "images/bild" + i + ".jpg";
        originalImgHeight = image[i].height;
        originalImgWidth = image[i].width;
        let ratio = (originalImgWidth/originalImgHeight);

        image[i].addEventListener("load", function() {
            image[i].style.cssText =
                "filter:brightness(0.55);" +
                "min-height:100%;" +
                "height:" + (width/ratio) + "px;";

        });

        sliderImage.appendChild(image[i]);

        if(i === imageAnzahl){
            sliderCarousel();
        }
    }
}

function sliderCarousel(){
    setTimeout(function () {
        sliderImage.style.cssText = "transition:1s;margin-left:" + (-(image[1].clientWidth) * counter) + "px;";
        counter++;
        sliderImage.addEventListener("transitionend", sliderCarousel);
        if(counter === (imageAnzahl+1)){
            sliderImage.style.cssText = "transition:1s;margin-left:0;";
            counter= 1;
        }
    }, 5000);
}
























