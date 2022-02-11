// Mobile Project Bar - selector
const mobileProjectBarButton = document.querySelector(".proj-bar-button");
const mobileGoToMainButton = document.querySelector(".go-main-button");
const projectNav = document.querySelector(".proj-nav");
const mainArea = document.querySelector(".content-area");

// user information - selector
const userImage = document.querySelector(".user-image");
const userInfoList = document.querySelector(".user-info-selector");

// Related Mobile selector
const TOGGLE_BUTTON_CLASSNAME = "toggle-button";
const TOGGLE_MOBILE_SELECTOR_CLASSNAME = "mobile-selector";

// Related selector
const TOGGLE_SELECTOR_CLASSNAME = "selector";

// mobile toggle MAIN - NAV
mobileProjectBarButton.addEventListener("click", function () {
    toggleProjectButton();
});

mobileGoToMainButton.addEventListener("click", function () {
    toggleProjectButton();
});

// toggle user image info
userImage.addEventListener("click", function () {
    toggleUserInfoButton();
});

// mobile toggle MAIN - NAV
function toggleProjectButton() {
    mobileProjectBarButton.classList.toggle(TOGGLE_BUTTON_CLASSNAME);
    mobileGoToMainButton.classList.toggle(TOGGLE_BUTTON_CLASSNAME);
    // projectNav.classList.toggle(TOGGLE_MOBILE_SELECTOR_CLASSNAME);
    // mainArea.classList.toggle(TOGGLE_MOBILE_SELECTOR_CLASSNAME);
    if (mobileProjectBarButton.classList.contains(TOGGLE_BUTTON_CLASSNAME)) {
        mainArea.style.setProperty("display", "none");
        projectNav.style.setProperty("display", "block");
    } else {
        mainArea.style.setProperty("display", "flex");
        projectNav.style.setProperty("display", "none");
    }
}

// toggle user image info
function toggleUserInfoButton() {
    userInfoList.classList.toggle(TOGGLE_SELECTOR_CLASSNAME);
}
