// navbar section
const toggle_btn = document.getElementById("navbar-toggle")
toggle_btn.addEventListener("click", () => {
    document.getElementById("navbar-items").classList.toggle("navbar-show");
    toggle_btn.querySelector("i").classList.toggle("fa-bars");
    toggle_btn.querySelector("i").classList.toggle("fa-xmark");
});

// album section
const base_folder = "./img/album/"
var total_images = 4;
var current_image = 1;
const album_img = document.getElementById("ablum-image");
const album_left_btn = document.getElementById("album-left");
const album_right_btn = document.getElementById("album-right");

album_left_btn.addEventListener("click", () => {
    current_image -= 1;
    current_image = (current_image < 1 ? total_images : current_image);
    current_image = (current_image > total_images ? 1 : current_image);

    album_img.setAttribute("src", base_folder + String(current_image) + ".jpeg");
});

album_right_btn.addEventListener("click", () => {
    current_image += 1;
    current_image = (current_image < 1 ? total_images : current_image);
    current_image = (current_image > total_images ? 1 : current_image);

    album_img.setAttribute("src", base_folder + String(current_image) + ".jpeg");
});