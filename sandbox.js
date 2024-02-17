const pageLightMode = document.querySelector("body.page-light-mode");
const mode = document.querySelector("li.dark-mode");
const links = document.querySelectorAll("a");
const headColors = document.querySelectorAll(".color2");
const webTitle = document.querySelector(".web-title");

mode.addEventListener("click", () => {
     mode.classList.toggle("light-mode");
     pageLightMode.classList.toggle("page-dark-mode");
     links.forEach(link => {
        link.classList.toggle("new-color");
     });
     headColors.forEach(colors => {
        colors.classList.toggle("new-color2");
     });
     webTitle.classList.toggle("web-title-color");
});
