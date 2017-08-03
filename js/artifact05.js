var myImages = ["images/Sasha01.jpg", "images/Sasha02.jpg", "images/Sasha03.jpg", "images/Sasha04.jpg", "images/Sasha05.jpg"];
var captionImages = ["Sasha being cute", "Sasha looking over my chair arm", "Freshly groomed Sasha", "Seahawks Sasha", "Sasha wanting food"];

var index = 0;

var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");

nextButton.addEventListener("click", next, false);
previousButton.addEventListener("click", previous, false);

function updateImage() {
    document.getElementById("slideshow").src = myImages[index];
    document.getElementById("slideshow").alt = captionImages[index];
    document.getElementById("caption").textContent = captionImages[index];
}

function next() {
    if (myImages.length == index + 1)
        index = 0;
    else
        index++;

    updateImage();
}

function previous() {
    if (index === 0)
        index = myImages.length - 1;
    else
        index--;

    updateImage();
}

setInterval(autoSlide, 2000);

function autoSlide() {
    if (document.getElementById("auto").checked)
        next();
}

