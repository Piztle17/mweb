const btn = document.querySelector(".btn");
const alert = document.querySelector(".alert");
const icon = document.querySelector(".icon");
const popup = document.querySelector(".outer");

btn.addEventListener("click", () => {
    setInterval(() => {
        alert.style.display = "block";
    }, 1500);
        popup.classList.add("openme");
})
icon.addEventListener("click", () => {
    popup.classList.remove("openme");
})