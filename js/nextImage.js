const nextImageBtn = document.querySelector("#next-image-button");
const currentImageArea = document.querySelector(".current-image-area");
const currentImage = document.querySelector(".current-image");
const waitImages = document.querySelectorAll(".wait-image");

let currentPageNum = 1;

const fileFormat = currentImage.src.includes("jpg") ? "jpg" : "jpeg";
const FILE_URL = `./assets/${pageName}/image/`;

nextImageBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (currentPageNum > waitImages.length) {
        return;
    }

    document.querySelector(".current-image").remove();
    currentPageNum += 1;
    const newImage = document.createElement("img");
    newImage.src = `${FILE_URL}${currentPageNum}.jpg`;
    newImage.alt = "#";
    newImage.classList.add("current-image");
    currentImageArea.appendChild(newImage);
});

for (const image of waitImages) {
    image.addEventListener("click", function (event) {
        if (currentPageNum > waitImages.length) {
            return;
        }
        const clickedImageSrc = event.target.src;
        document.querySelector(".current-image").remove();
        const newImage = document.createElement("img");
        newImage.src = clickedImageSrc;
        newImage.alt = "#";
        newImage.classList.add("current-image");
        currentImageArea.append(newImage);

        currentPageNum =
            fileFormat === "jpg" ? parseInt(clickedImageSrc.slice(-5, -4)) : parseInt(clickedImageSrc.slice(-6, -5));
    });
}
