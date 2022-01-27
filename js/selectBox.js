// Mobile Project Bar - selector
const mobileProjectBarButton = document.querySelector(".proj-bar-button");
const mobileGoToMainButton = document.querySelector(".go-main-button");
const projectNav = document.querySelector(".proj-nav");
const mainArea = document.querySelector(".content-area");

// Mobile Project Bar - selector
const TOGGLE_BUTTON_CLASSNAME = "toggle-button";
const TOGGLE_SELECTOR_CLASSNAME = "mobile-selector";

// mobile toggle MAIN - NAV
mobileProjectBarButton.addEventListener("click", function () {
    toggleProjectButton();
});

mobileGoToMainButton.addEventListener("click", function () {
    toggleProjectButton();
});

// mobile toggle MAIN - NAV
function toggleProjectButton() {
    mobileProjectBarButton.classList.toggle(TOGGLE_BUTTON_CLASSNAME);
    mobileGoToMainButton.classList.toggle(TOGGLE_BUTTON_CLASSNAME);
    projectNav.classList.toggle(TOGGLE_SELECTOR_CLASSNAME);
    mainArea.classList.toggle(TOGGLE_SELECTOR_CLASSNAME);
}
