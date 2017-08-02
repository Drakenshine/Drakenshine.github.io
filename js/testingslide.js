var ssImages = ["images/slideshow/cng.jpg", "images/slideshow/kung_fu_fighting.jpg", "images/slideshow/lion_and_scorpion.jpg", "images/slideshow/skis.jpg", "images/slideshow/taco_n_milk.jpg"];
var ssCaptions = ["The Chuck Norris Grill in Reykjavik, Iceland", "Kung Fu Fighting by Carl Douglas in a thrift shop window in Gothenburg, Sweden", "The Lion & Scorpion pub in Stockholm, Sweden", "Ski rack on a train in Oslo, Norway", "Taco & Milk"];

var index = 0;

var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");

nextButton.addEventListener("click", next, false);
previousButton.addEventListener("click", previous, false);

setInterval(autoSlide, 5000);

function updateImage() {
    document.getElementById("slideshow").src = ssImages[index];
    document.getElementById("slideshow").alt = ssCaptions[index];
    document.getElementById("caption").textContent = ssCaptions[index];
}

function next() {
    if (ssImages.length == index + 1)
        index = 0;
    else
        index++;

    updateImage();
}

function previous() {
    if (index === 0)
        index = ssImages.length - 1;
    else
        index--;

    updateImage();
}

function autoSlide() {
    if (document.getElementById("automatic").checked)
        next();
}