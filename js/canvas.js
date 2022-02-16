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

function rateCalcurate(currentX, currentY) {
    startRateX = startX / drawWidth;
    startRateY = startY / drawHeight;
    currentRateX = currentX / drawWidth;
    currentRateY = currentY / drawHeight;
}

function clickCanvas(event) {
    let clickX = event.offsetX;
    let clickY = event.offsetY;
    if (clickX >= startRateX && clickY >= startRateY && clickX <= currentRateX && clickY <= currentRateY) {
        console.log("correct area");
    } else if (clickX <= startRateX && clickY <= startRateY && clickX >= currentRateX && clickY >= currentRateY) {
        console.log("correct area!");
    }
}

function handleDraw(currentX, currentY) {
    drawContext.clearRect(0, 0, drawContext.canvas.width, drawContext.canvas.height);
    drawContext.strokeRect(startX, startY, currentX - startX, currentY - startY);
}
