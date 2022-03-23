const nextImageBtn = document.querySelector("#next-image-button");
const currentImageArea = document.querySelector(".current-image-area");
const currentImage = document.querySelector(".current-image");
const waitImages = document.querySelectorAll(".wait-image");

let pageNum = 1;
const fileFormat = currentImage.src.includes("jpg") ? "jpg" : "jpeg";

nextImageBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (pageNum > waitImages.length) {
        return;
    }

    document.querySelector(".current-image").remove();
    pageNum += 1;
    const newImage = document.createElement("img");
    newImage.src = `./assets/images/sample_image/${pageNum}.jpg`;
    newImage.alt = "#";
    newImage.classList.add("current-image");
    currentImageArea.append(newImage);
});

for (const image of waitImages) {
    image.addEventListener("click", function (event) {
        if (pageNum > waitImages.length) {
            return;
        }
        const clickedImageSrc = event.target.src;
        document.querySelector(".current-image").remove();
        const newImage = document.createElement("img");
        newImage.src = clickedImageSrc;
        newImage.alt = "#";
        newImage.classList.add("current-image");
        currentImageArea.append(newImage);

        pageNum =
            fileFormat === "jpg" ? parseInt(clickedImageSrc.slice(-5, -4)) : parseInt(clickedImageSrc.slice(-6, -5));
    });
}
