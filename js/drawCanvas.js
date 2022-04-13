const drawCanvas = document.getElementById("draw-canvas");
const drawContext = drawCanvas.getContext("2d");
const drawGround = document.getElementById("draw-box");

const drawWidth = drawGround.clientWidth;
const drawHeight = drawGround.clientHeight;
drawCanvas.width = drawWidth;
drawCanvas.height = drawHeight;

// context default value
drawContext.lineWidth = 2;
drawContext.strokeStyle = "rgb(0, 0, 0)";
drawCanvas.globalAlpha = 0.5;

let isFill = false;
let isClicked = false;
let isDown = false;
let data = [];
let rateData = [];

let drawCanvasTop = drawCanvas.getBoundingClientRect().top;

// guide text
const guideText = document.querySelector("#guide-text");
let currentGuideText = "";

// code
const coordinateCodeArea = document.querySelector("#coordinate-code");
const copyButton = document.querySelector(".copy-btn");

// Mouse
drawCanvas.addEventListener("mousedown", function (event) {
    handleMouseDown(event);
    data.push({ startX: startX, startY: startY });
});

drawCanvas.addEventListener("mousemove", function (event) {
    handleMouseMove(event);
});

drawCanvas.addEventListener("mouseup", function (event) {
    isClicked = true;
    handleMouseUp(event);
    data.push({ endX: endX, endY: endY });
    coordinateCodeArea.innerText = `const coordinate = {startRateX: ${startRateX}, startRateY: ${startRateY}, endRateX: ${currentRateX}, endRateY: ${currentRateY}}`;
});

drawCanvas.addEventListener("mouseout", function () {
    isDown = false;
});

// scroll event(touch 좌표 측정 시 canvas top 위치를 빼줘야함)
window.addEventListener("scroll", function () {
    drawCanvasTop = drawCanvas.getBoundingClientRect().top;
});

// Touch
drawCanvas.addEventListener("touchstart", function (event) {
    handleTouchDown(event);
    data.push({ startX: startX, startY: startY });
});

drawCanvas.addEventListener("touchmove", function (event) {
    event.preventDefault();
    handleTouchMove(event);
});

drawCanvas.addEventListener("touchend", function (event) {
    handleTouchUp(event);
    data.push({ endX: endX, endY: endY });
    coordinateCodeArea.innerText = `const coordinate = {startRateX: ${startRateX}, startRateY: ${startRateY}, endRateX: ${currentRateX}, endRateY: ${currentRateY}}`;
});

// mouse
function handleMouseDown(event) {
    startX = event.offsetX;
    startY = event.offsetY;
    isDown = true;
}

function handleMouseMove(event) {
    if (!isDown) {
        return;
    }
    let nowX = event.offsetX;
    let nowY = event.offsetY;
    handleDraw(nowX, nowY);
}

function handleMouseUp(event) {
    endX = event.offsetX;
    endY = event.offsetY;
    isDown = false;
}

// touch
function handleTouchDown(event) {
    event.preventDefault();
    startX = event.targetTouches[0].clientX - drawCanvas.getBoundingClientRect().left;
    startY = event.targetTouches[0].clientY;
    isDown = true;
}

function handleTouchMove(event) {
    event.preventDefault();
    if (!isDown) {
        return;
    }
    let nowX = event.changedTouches[0].clientX - drawCanvas.getBoundingClientRect().left;
    let nowY = event.changedTouches[0].clientY;
    handleTouchDraw(nowX, nowY);
}

function handleTouchUp(event) {
    event.preventDefault();
    endX = event.changedTouches[0].clientX - drawCanvas.getBoundingClientRect().left;
    endY = event.changedTouches[0].clientY;
}

// 상대 좌표 계산
function rateCalcurate(currentX, currentY) {
    startRateX = startX / drawWidth;
    startRateY = startY / drawHeight;
    currentRateX = currentX / drawWidth;
    currentRateY = currentY / drawHeight;
    drawStartRateX = startRateX * drawWidth;
    drawStartRateY = startRateY * drawHeight;
    drawCurrentRateX = currentRateX * drawWidth;
    drawCurrentRateY = currentRateY * drawHeight;
}

function handleDraw(currentX, currentY) {
    drawContext.clearRect(0, 0, drawContext.canvas.width, drawContext.canvas.height);
    if (isFill === false) {
        drawContext.strokeRect(startX, startY, currentX - startX, currentY - startY);
    } else {
        drawContext.fillRect(startX, startY, currentX - startX, currentY - startY);
    }
    rateCalcurate(currentX, currentY);
}

function handleTouchDraw(currentX, currentY) {
    drawContext.clearRect(0, 0, drawContext.canvas.width, drawContext.canvas.height);
    if (isFill === false) {
        drawContext.strokeRect(startX, startY - drawCanvasTop, currentX - startX, currentY - startY);
    } else {
        drawContext.fillRect(startX, startY - drawCanvasTop, currentX - startX, currentY - startY);
    }
    rateCalcurate(currentX, currentY);
}

copyButton.addEventListener("click", function (event) {
    event.preventDefault();
    copy();
    console.log("copy!");
});

function copy() {
    coordinateCodeArea.select();
    document.execCommand("copy");
    coordinateCodeArea.setSelectionRange(0, 0);
}

const handleGuideTextChange = () => {
    currentGuideText = guideText.value;
    coordinateCodeArea.innerText = `const page = "${currentGuideText}"`;
};
