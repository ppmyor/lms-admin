// property-selector
const colorProperty = document.querySelector("#property-color");
const thicknessProperty = document.querySelector("#property-thickness");
const opacityProperty = document.querySelector("#property-opacity");
const fillProperty = document.querySelector("#property-fill");

// select-property
const selectProperty = document.querySelector(".select-property");
const selectColorProperty = document.querySelector("#property-color-select");
const selectThicknessProperty = document.querySelector("#property-thickness-select");
const selectOpacityProperty = document.querySelector("#property-opacity-select");

const opacityValue = document.querySelector("#opacity-range");
const thicknessValue = document.querySelector("#thickness-range");

colorProperty.addEventListener("click", function () {
    colorSelect();
});

thicknessProperty.addEventListener("click", function () {
    thicknessSelect();
});

opacityProperty.addEventListener("click", function () {
    opacitySelect();
});

fillProperty.addEventListener("click", function () {
    if (isFill === false) {
        isFill = true;
        fillProperty.innerHTML = "비우기";
    } else {
        isFill = false;
        fillProperty.innerHTML = "채우기";
    }
});

createColor();

function colorSelect() {
    selectColorProperty.classList.toggle(TOGGLE_BUTTON_CLASSNAME);
    if (selectColorProperty.classList.contains(TOGGLE_BUTTON_CLASSNAME)) {
        selectProperty.style.setProperty("display", "block");
        selectColorProperty.style.setProperty("display", "flex");
        selectThicknessProperty.style.setProperty("display", "none");
        selectOpacityProperty.style.setProperty("display", "none");
        if (selectThicknessProperty.classList.contains(TOGGLE_BUTTON_CLASSNAME)) {
            selectThicknessProperty.classList.remove(TOGGLE_BUTTON_CLASSNAME);
        }
        if (selectOpacityProperty.classList.contains(TOGGLE_BUTTON_CLASSNAME)) {
            selectOpacityProperty.classList.remove(TOGGLE_BUTTON_CLASSNAME);
        }
    } else {
        selectProperty.style.setProperty("display", "none");
    }
}

function thicknessSelect() {
    selectThicknessProperty.classList.toggle(TOGGLE_BUTTON_CLASSNAME);
    if (selectThicknessProperty.classList.contains(TOGGLE_BUTTON_CLASSNAME)) {
        selectProperty.style.setProperty("display", "block");
        selectThicknessProperty.style.setProperty("display", "flex");
        selectColorProperty.style.setProperty("display", "none");
        selectOpacityProperty.style.setProperty("display", "none");
        if (selectColorProperty.classList.contains(TOGGLE_BUTTON_CLASSNAME)) {
            selectColorProperty.classList.remove(TOGGLE_BUTTON_CLASSNAME);
        }
        if (selectOpacityProperty.classList.contains(TOGGLE_BUTTON_CLASSNAME)) {
            selectOpacityProperty.classList.remove(TOGGLE_BUTTON_CLASSNAME);
        }
    } else {
        selectProperty.style.setProperty("display", "none");
    }
}

function opacitySelect() {
    selectOpacityProperty.classList.toggle(TOGGLE_BUTTON_CLASSNAME);
    if (selectOpacityProperty.classList.contains(TOGGLE_BUTTON_CLASSNAME)) {
        selectProperty.style.setProperty("display", "block");
        selectOpacityProperty.style.setProperty("display", "flex");
        selectColorProperty.style.setProperty("display", "none");
        selectThicknessProperty.style.setProperty("display", "none");
        if (selectColorProperty.classList.contains(TOGGLE_BUTTON_CLASSNAME)) {
            selectColorProperty.classList.remove(TOGGLE_BUTTON_CLASSNAME);
        }
        if (selectThicknessProperty.classList.contains(TOGGLE_BUTTON_CLASSNAME)) {
            selectThicknessProperty.classList.remove(TOGGLE_BUTTON_CLASSNAME);
        }
    } else {
        selectProperty.style.setProperty("display", "none");
    }
}

// create color picker
function createColor() {
    const red = document.createElement("span");
    const yellow = document.createElement("span");
    const green = document.createElement("span");
    const blue = document.createElement("span");
    const purple = document.createElement("span");
    const white = document.createElement("span");
    const black = document.createElement("span");

    red.classList.add("red");
    yellow.classList.add("yellow");
    green.classList.add("green");
    blue.classList.add("blue");
    purple.classList.add("purple");
    white.classList.add("white");
    black.classList.add("black");

    selectColorProperty.insertBefore(red, null);
    selectColorProperty.insertBefore(yellow, null);
    selectColorProperty.insertBefore(green, null);
    selectColorProperty.insertBefore(blue, null);
    selectColorProperty.insertBefore(purple, null);
    selectColorProperty.insertBefore(white, null);
    selectColorProperty.insertBefore(black, null);
}

// choose color
document.querySelector(".red").addEventListener("click", function () {
    chooseColor("rgb(226, 111, 111)");
});

document.querySelector(".yellow").addEventListener("click", function () {
    chooseColor("rgb(255, 255, 0)");
});

document.querySelector(".green").addEventListener("click", function () {
    chooseColor("rgb(11, 139, 11)");
});

document.querySelector(".blue").addEventListener("click", function () {
    chooseColor("rgb(67, 67, 255)");
});

document.querySelector(".purple").addEventListener("click", function () {
    chooseColor("rgb(126, 51, 126)");
});

document.querySelector(".white").addEventListener("click", function () {
    chooseColor("rgb(255, 255, 255)");
});

document.querySelector(".black").addEventListener("click", function () {
    chooseColor("rgb(0, 0, 0)");
});

// choose color
function chooseColor(color) {
    drawContext.strokeStyle = color;
}

// choose thickness
function thicknessChange() {
    drawContext.lineWidth = thicknessValue.value;
}

// choose opacity
function opacityChange() {
    drawContext.globalAlpha = opacityValue.value;
}
