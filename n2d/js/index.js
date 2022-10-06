const scrollTop = document.querySelector(".scroll-top")
window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY > 400)
})