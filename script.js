const menuIcon = document.getElementById("menu_icon");
const menu = document.getElementById("menu");

menuIcon?.addEventListener("click", () => {
    if (menu?.className === "hidden") {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
});

// alert("naim");

// document.addEventListener("DOMContentLoaded", () => {
//     const menuIcon = document.getElementById("menu_icon");
//     const menu = document.getElementById("menu");

//     menuIcon?.addEventListener("click", () => {
//         menu?.classList.toggle("hidden");
//     });
// });