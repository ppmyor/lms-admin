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

// content description
const contentDescription = document.querySelector("#content-description-area");

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

// Tablets, laptops
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
