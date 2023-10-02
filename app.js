const btn = document.querySelector(".btn");
const alert = document.querySelector(".alert");

btn.addEventListener("click", () => {
    setInterval(() => {
        alert.style.display = "block";
    }, 2000);
})