const drawCanvas = document.getElementById("draw-canvas");
const drawContext = drawCanvas.getContext("2d");
const drawGround = document.getElementById("draw-box");

const drawWidth = drawGround.clientWidth;
const drawHeight = drawGround.clientHeight;
drawCanvas.width = drawWidth;
drawCanvas.height = drawHeight;
drawContext.lineWidth = 2;
drawContext.strokeStyle = "#131313";

let isDown = false;
let data = [];
let rateData = [];

// Mouse
drawCanvas.addEventListener("mousedown", function (event) {
    handleMouseDown(event);
    data.push({ startX: startX, startY: startY });
});

drawCanvas.addEventListener("mousemove", function (event) {
    handleMouseMove(event);
});

drawCanvas.addEventListener("mouseup", function (event) {
    handleMouseUp(event);
    data.push({ endX: endX, endY: endY });
});

drawCanvas.addEventListener("mouseout", function () {
    isDown = false;
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
    startX = event.targetTouches[0].pageX;
    startY = event.targetTouches[0].pageY;
    isDown = true;
    console.log("touch down", startX, startY);
}

function handleTouchMove(event) {
    event.preventDefault();
    if (!isDown) {
        return;
    }
    let nowX = event.changedTouches[0].pageX;
    let nowY = event.changedTouches[0].pageY;
    console.log("touch move", nowX, nowY);
    handleDraw(nowX, nowY);
}

function handleTouchUp(event) {
    event.preventDefault();
    endX = event.changedTouches[0].pageX;
    endY = event.changedTouches[0].pageY;
    console.log("touch up", endX, endY);
}

function rateCalcurate(currentX, currentY) {
    startRateX = startX / drawWidth;
    startRateY = startY / drawHeight;
    currentRateX = currentX / drawWidth;
    currentRateY = currentY / drawHeight;
}

function handleDraw(currentX, currentY) {
    drawContext.clearRect(0, 0, drawContext.canvas.width, drawContext.canvas.height);
    drawContext.strokeRect(startX, startY, currentX - startX, currentY - startY);
}
