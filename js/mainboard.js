// Mobile
// page
const mobilePagePreviousButton = document.querySelector(".mobile-page-previous");
const mobilePageHomeButton = document.querySelector(".mobile-page-home");
const mobilePageNextButton = document.querySelector(".mobile-page-next");

// play-pause
const mobilePlayButton = document.querySelector(".mobile-play-button");
const mobilePauseButton = document.querySelector(".mobile-pause-button");

// hint
const mobileHintButton = document.querySelector(".mobile-hint-button");

// Tablets, laptops
// hint
const hintButton = document.querySelector("#hint-button");

// full-screen
const fullScreenButton = document.querySelector("#fullscreen-button");

// page
const pagePreviousButton = document.querySelector(".page-previous");
const pageHomeButton = document.querySelector(".page-home");
const pageNextButton = document.querySelector(".page-next");

// font
const fontSmallButton = document.querySelector(".font-small");
const fontMediumButton = document.querySelector(".font-medium");
const fontLargetButton = document.querySelector(".font-large");

// play-pause
const puaseButton = document.querySelector(".pause-button");

// play speed
const speedSlowButton = document.querySelector(".speed-slow");
const speedMediumButton = document.querySelector(".speed-medium");
const speedFastButton = document.querySelector(".speed-fast");

// image area
const currentImageArea = document.querySelector(".current-image-area");

// content description area
const contentDescription = document.querySelector("#content-description-area");

// Asset
const contentImage = [];
const audioArray = [];
const pageDescArray = [];

// coordinate
const coordinateArray = [];

let imageWidth;
let imageHeight;

let pageVariable = 1;

// Mobile
// move home page
mobilePageHomeButton.addEventListener("click", function () {
    goToIndex();
});

// move previous page
mobilePagePreviousButton.addEventListener("click", function () {
    goToPrevious();
});

// move next page
mobilePageNextButton.addEventListener("click", function () {
    goToNext();
});

// Tablets, laptops
// move home page
pageHomeButton.addEventListener("click", function () {
    goToIndex();
});

// move previous page
pagePreviousButton.addEventListener("click", function () {
    goToPrevious();
});

// move next page
pageNextButton.addEventListener("click", function () {
    goToNext();
});

// page related function
const goToIndex = () => {
    pageVariable = 1;
    loadBackgroundImage(pageVariable);
    showDescriptionText(pageVariable);
    console.log(pageVariable);
};

const goToPrevious = () => {
    if (pageVariable <= 1) {
        return;
    } else {
        pageVariable--;
        loadBackgroundImage(pageVariable);
        showDescriptionText(pageVariable);
    }
    console.log(pageVariable);
};

const goToNext = () => {
    if (pageVariable === contentImage.length - 1) {
        return;
    } else {
        pageVariable++;
        loadBackgroundImage(pageVariable);
        showDescriptionText(pageVariable);
    }
    console.log(pageVariable);
};

// handle background image
const loadBackgroundImage = (pageNumber) => {
    if (currentImageArea.querySelector(".current-image") !== null) {
        currentImageArea.removeChild(currentImageArea.querySelector(".current-image"));
    }
    const backgroundImage = document.createElement("img");
    backgroundImage.className = "current-image";
    if (pageNumber > 0) {
        backgroundImage.src = contentImage[pageNumber - 1];
    }
    currentImageArea.appendChild(backgroundImage);
};

// handle description text
const showDescriptionText = (pageNumber) => {
    if (pageNumber > 0) {
        contentDescription.innerText = pageDescArray[pageNumber - 1];
    }
};

// full screen event
fullScreenButton.addEventListener("click", function () {
    if (!document.fullscreenElement) {
        fullScreen(document.body);
    } else if (document.exitFullscreen) {
        exitFullScreen();
    }
});

const fullScreen = (element) => {
    if (element.requestFullscreen) return element.requestFullscreen();
    if (element.webkitRequestFullscreen) return element.webkitRequestFullscreen();
    if (element.mozRequestFullScreen) return element.mozRequestFullScreen();
    if (element.msRequestFullscreen) return element.msRequestFullscreen();
};

const exitFullScreen = () => {
    if (document.exitFullscreen) return document.exitFullscreen();
    if (document.webkitCancelFullscreen) return document.webkitCancelFullscreen();
    if (document.mozCancelFullScreen) return document.mozCancelFullScreen();
    if (document.msExitFullscreen) return document.msExitFullscreen();
};

// font resize event
fontSmallButton.addEventListener("click", function () {
    contentDescription.style.fontSize = "1em";
});

fontMediumButton.addEventListener("click", function () {
    contentDescription.style.fontSize = "1.2em";
});

fontLargetButton.addEventListener("click", function () {
    contentDescription.style.fontSize = "1.5em";
});
