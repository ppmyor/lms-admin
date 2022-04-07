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
const playButton = document.querySelector(".play-button");
const pauseButton = document.querySelector(".pause-button");

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

let pageVariable = 0;

// image의 width, height 할당
window.addEventListener("load", function () {
    imageWidth = document.querySelector(".current-image").clientWidth;
    imageHeight = document.querySelector(".current-image").clientHeight;
    setTimeout(scrollTo, 0, 0, 1);
});

// !!Mobile!!
// page
// move home page
mobilePageHomeButton.addEventListener("click", function () {
    loadIndexAudio(pageVariable);
    pageVariable = 0;
    goToIndex(pageVariable);
});

// move previous page
mobilePagePreviousButton.addEventListener("click", function () {
    pageVariable--;
    pageVariable >= 1 ? loadPreviousAudio(pageVariable) : null;
    goToPrevious(pageVariable);
});

// move next page
mobilePageNextButton.addEventListener("click", function () {
    loadNextAudio(pageVariable);
    pageVariable++;
    goToNext(pageVariable);
});

// play-pause button
mobilePlayButton.addEventListener("click", function () {
    audioArray[pageVariable - 1].play();
});

mobilePauseButton.addEventListener("click", function () {
    audioArray[pageVariable - 1].pause();
});

// !!Tablets, laptops!!
// page
// move home page
pageHomeButton.addEventListener("click", function () {
    loadIndexAudio(pageVariable);
    pageVariable = 0;
    goToIndex();
});

// move previous page
pagePreviousButton.addEventListener("click", function () {
    pageVariable--;
    pageVariable >= 1 ? loadPreviousAudio(pageVariable) : null;
    goToPrevious(pageVariable);
});

// move next page
pageNextButton.addEventListener("click", function () {
    loadNextAudio(pageVariable);
    pageVariable++;
    goToNext(pageVariable);
});

// page related function
const goToIndex = (pageNumber) => {
    loadBackgroundImage(pageNumber);
    showDescriptionText(pageNumber);
    console.log(pageVariable);
};

const goToPrevious = (pageNumber) => {
    if (pageNumber < 0) {
        return;
    } else {
        loadBackgroundImage(pageNumber);
        showDescriptionText(pageNumber);
        buttonPositionCalcurate(coordinateArray[pageNumber - 1]);
    }
    console.log(pageVariable);
};

const goToNext = (pageNumber) => {
    if (pageNumber === contentImage.length + 1) {
        return;
    } else {
        loadBackgroundImage(pageNumber);
        showDescriptionText(pageNumber);
        buttonPositionCalcurate(coordinateArray[pageNumber - 1]);
    }
    console.log(pageVariable);
};

// load Audio
const loadIndexAudio = (pageNumber) => {
    audioArray[pageNumber - 1].pause();
};

const loadNextAudio = (pageNumber) => {
    audioArray[pageNumber].load();
    audioArray[pageNumber].play();
    pageNumber === 0 ? null : audioArray[pageNumber - 1].pause();
};

const loadPreviousAudio = (pageNumber) => {
    audioArray[pageNumber - 1].load();
    audioArray[pageNumber - 1].play();
    pageNumber === contentImage.length ? null : audioArray[pageNumber].pause();
};

// handle background image
const loadBackgroundImage = (pageNumber) => {
    if (currentImageArea.querySelector(".current-image") !== null) {
        currentImageArea.removeChild(currentImageArea.querySelector(".current-image"));
    }
    const backgroundImage = document.createElement("img");
    backgroundImage.className = "current-image";
    pageNumber > 0
        ? (backgroundImage.src = contentImage[pageNumber - 1])
        : (backgroundImage.src = "./assets/SD12/image/0.jpg");

    currentImageArea.appendChild(backgroundImage);
};

// handle description text
const showDescriptionText = (pageNumber) => {
    if (pageNumber > 0) {
        contentDescription.innerText = pageDescArray[pageNumber - 1];
    }
};

// play-pause button
playButton.addEventListener("click", function () {
    audioArray[pageVariable - 1].play();
});

pauseButton.addEventListener("click", function () {
    audioArray[pageVariable - 1].pause();
});

// audio speed control
speedSlowButton.addEventListener("click", function () {
    currentSpeed = 0.7;
    audioArray[pageVariable - 1].playbackRate = currentSpeed;
});

speedMediumButton.addEventListener("click", function () {
    currentSpeed = 1;
    audioArray[pageVariable - 1].playbackRate = currentSpeed;
});

speedFastButton.addEventListener("click", function () {
    currentSpeed = 1.3;
    audioArray[pageVariable - 1].playbackRate = currentSpeed;
});

// handle correct click button
const correctClickButton = document.createElement("div");
correctClickButton.className = "correct-click-button";

correctClickButton.addEventListener("click", function () {
    handleClickButton();
});

const handleClickButton = () => {
    loadNextAudio(pageVariable);
    pageVariable++;
    goToNext(pageVariable);
};

// create correct click button
// click button position calcurate
const buttonPositionCalcurate = (coordinate) => {
    let nowX;
    let nowY;
    let nowWidth;
    let nowHeight;

    if (coordinate.startRateX < coordinate.endRateX && coordinate.startRateY < coordinate.endRateY) {
        nowX = coordinate.startRateX * imageWidth;
        nowY = coordinate.startRateY * imageHeight;
        nowWidth = coordinate.endRateX * imageWidth - nowX;
        nowHeight = coordinate.endRateY * imageHeight - nowY;
    } else if (coordinate.startRateX > coordinate.endRateX && coordinate.startRateY < coordinate.endRateY) {
        nowX = coordinate.endRateX * imageWidth;
        nowY = coordinate.startRateY * imageHeight;
        nowWidth = coordinate.startRateX * imageWidth - nowX;
        nowHeight = coordinate.endRateY * imageHeight - nowY;
    } else if (coordinate.startRateX > coordinate.endRateX && coordinate.startRateY > coordinate.endRateY) {
        nowX = coordinate.endRateX * imageWidth;
        nowY = coordinate.endRateY * imageHeight;
        nowWidth = coordinate.startRateX * imageWidth - nowX;
        nowHeight = coordinate.startRateY * imageHeight - nowY;
    } else {
        nowX = coordinate.startRateX * imageWidth;
        nowY = coordinate.endRateY * imageHeight;
        nowWidth = coordinate.endRateX * imageWidth - nowX;
        nowHeight = coordinate.startRateY * imageHeight - nowY;
    }
    drawClickButton(nowX, nowY, nowWidth, nowHeight);
};

// click button style
const drawClickButton = (currentX, currentY, currentWidth, currentHeight) => {
    correctClickButton.style.position = "absolute";
    correctClickButton.style.left = currentX + "px";
    correctClickButton.style.top = currentY + "px";
    correctClickButton.style.width = currentWidth + "px";
    correctClickButton.style.height = currentHeight + "px";
    correctClickButton.style.backgroundColor = "rgb(0,0,0)";
    currentImageArea.append(correctClickButton);
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
