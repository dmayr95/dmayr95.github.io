

let hilfsvar = 0;

let button1 = document.getElementById("menu-button");
button1.addEventListener("click", showMenu);

function showMenu(){
    let menuContainer = document.getElementById("nav-bar");
    let firstButtonLine = document.getElementById("first-button-line");
    let secondButtonLine = document.getElementById("second-button-line");
    let lastButtonLine = document.getElementById("third-button-line");

    if(hilfsvar === 0){
        menuContainer.style.cssText = "margin-left:0px !important;";
        firstButtonLine.style.cssText = "transform: rotate(45deg); margin-top:15px;";
        lastButtonLine.style.cssText = "transform: rotate(-45deg); margin-top:-27px;";
        secondButtonLine.style.cssText = "  -ms-transform: scaleX(0); -webkit-transform: scaleX(0); transform: scaleX(0); margin-top:-10px;";
        hilfsvar = 1;
    }
    else{
        menuContainer.style.cssText = "margin-left:-180px !important;";
        firstButtonLine.style.cssText = "transform: rotate(0deg);";
        lastButtonLine.style.cssText = "transform: rotate(0deg);";
        secondButtonLine.style.cssText = "  -ms-transform: scaleX(1); -webkit-transform: scaleX(1); transform: scaleX(1); margin-top:0px;";
        hilfsvar = 0;
    }
}