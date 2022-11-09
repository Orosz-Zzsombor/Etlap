
function navBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


function swipe(id) {
    var largeImage = document.getElementById(id);
    var url = largeImage.getAttribute('src');
    window.open(url, 'Image', 'width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');

}
function toggleText(id,id2,id3) {
    var points =
        document.getElementById("points".concat(id));
    var showMoreText =
        document.getElementById("moreText".concat(id));

    var buttonText =
        document.getElementById("textButton".concat(id));
    if (points.style.display === "none") {

        showMoreText.style.display = "none";

        points.style.display = "inline";

        buttonText.innerHTML = "Több Információ";
        document.getElementById(id2).style.color = "rgb(214, 177, 14)";
        document.getElementById(id3).style.border = "0px";
      
        
    }
    else {
        showMoreText.style.display = "inline";
        points.style.display = "none";
        buttonText.innerHTML = "Kevesebb információ";
        document.getElementById(id2).style.color = 'black';
        document.getElementById(id3).style.border = "5px solid rgb(243, 228, 17)";
        document.getElementById(id2).style.transition = '1s';
        document.getElementById(id3).style.transition = '0.5s';
     
    }
}