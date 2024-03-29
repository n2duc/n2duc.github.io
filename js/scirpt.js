const header = document.querySelector('.header')
const modalBtn = document.querySelector('.about-btn')
const modalOverlay = document.querySelector('.modal-about')
const closeModalBtn = document.querySelector('.btn-close-modal')
const listItems = document.querySelector('.content-items')
const darkModeBtn = document.getElementById('darkMode')
const body = document.querySelector("body")

// Dark Mode
darkModeBtn.addEventListener('change', () => {
    if (darkModeBtn.checked) {
        console.log("checked")
        body.classList.add('dark')
    } else {
        body.classList.remove('dark')
    }
})
console.log(darkModeBtn)

// Active Header Scroll
window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0)
})
// Modal
function openModal() {
    modalOverlay.classList.remove('hidden')
}
function closeModal() {
    modalOverlay.classList.add('hidden')
}
modalBtn.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal)

window.onclick = (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.add('hidden')
    }
}

// Get Data Project
const Items = [];
dataProject.map((item) => {
    Items.push(`<a href="${item.link}" target="_blank" class="item">
            <h2>${item.name}</h2>
            <p>${item.desc}</p>
            <span>Explore it</span>
            <div class="img">
                <img src="${item.image}" alt="">
            </div>
            <button style="background: ${item.color};"></button>
        </a>`)
});
listItems.innerHTML = Items.join("");