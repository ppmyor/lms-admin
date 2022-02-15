// property-selector
const colorProperty = document.querySelector("#property-color");
const thicknessProperty = document.querySelector("#property-thickness");
const opacityProperty = document.querySelector("#property-opacity");

// select-property
const selectProperty = document.querySelector(".select-property");
const selectColorProperty = document.querySelector("#property-color-select");
const selectThicknessProperty = document.querySelector("#property-thickness-select");
const selectOpacityProperty = document.querySelector("#property-opacity-select");

colorProperty.addEventListener("click", function () {
    colorSelect();
});

thicknessProperty.addEventListener("click", function () {
    thicknessSelect();
});

opacityProperty.addEventListener("click", function () {
    opacitySelect();
});

function colorSelect() {
    selectColorProperty.classList.toggle(TOGGLE_BUTTON_CLASSNAME);
    if (selectColorProperty.classList.contains(TOGGLE_BUTTON_CLASSNAME)) {
        selectProperty.style.setProperty("display", "block");
        selectColorProperty.style.setProperty("display", "flex");
        selectThicknessProperty.style.setProperty("display", "none");
        selectOpacityProperty.style.setProperty("display", "none");
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
    } else {
        selectProperty.style.setProperty("display", "none");
    }
}
