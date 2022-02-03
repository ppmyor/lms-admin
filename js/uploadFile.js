const userUploadFile = document.querySelector("#upload-file");
const inputFileName = document.querySelector(".upload-name");

userUploadFile.addEventListener("change", function () {
    let fileName = userUploadFile.value;
    inputFileName.value = fileName;
});
