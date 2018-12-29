let position = 400;
let screenWidth;

function getScreenWidth() {
    screenWidth = window.innerWidth;
}

function menuResize(){
    getScreenWidth();
    let top = window.scrollY;
    let navbar = document.getElementById("nav-bar");
    let links = document.getElementById("nav-links");

    if(screenWidth < 850 && top >= position){
        navbar.style.cssText = "width:180px;";
        links.style.cssText = "display:grid;";
    }
    else if(screenWidth > 850 && top >= position){
        navbar.style.cssText = "width:230px;";
        links.style.cssText = "display:none;";
    }
    else if(screenWidth < 850  && top <= position){
        navbar.style.cssText = "width:180px; margin-left:-180px;";
    }
    else if(screenWidth > 850  && top <= position){
        navbar.style.cssText = "width:100%; margin-left:0px;"
    }

}

function scrollpos() {
    getScreenWidth();
    let top = window.scrollY;
    let navbar = document.getElementById("nav-bar");
    let links = document.getElementById("nav-links");

    if(screenWidth > 850){
        if(top >= position){
            navbar.style.cssText = "width:230px;";
            links.style.cssText = "display:none;";
        }
        else if(top < position){
            navbar.style.cssText = "width:100%;";
            links.style.cssText = "display:grid;";
        }
    }
}

