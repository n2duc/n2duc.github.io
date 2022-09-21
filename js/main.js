const menu = document.querySelector('.menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    navbar.classList.toggle('open-menu')
    menu.classList.toggle('move')
}
window.onscroll = () => {
    navbar.classList.remove('open-menu')
    menu.classList.remove('move')
}


var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

// EmailJS
function validate() {
    let name = document.querySelector(".name")
    let email = document.querySelector(".email")
    let msg = document.querySelector(".message")
    let sendBtn = document.querySelector(".send-btn")

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault()
        if(name.value == "" || email.value == "" || msg.value == "" ) {
            emptyerror()
        } else {
            sendmail(name.value, email.value, msg.value)
            success()
        }
    })
}
validate();

function sendmail(name, email, msg) {
    emailjs.send("service_jslr5pp","template_eia8y2f",{
        to_name: name,
        from_name: email,
        message: msg,
    });
}
function emptyerror() {
    swal({
        title: "Oh No....",
        text: "Fields cannot be empty!",
        icon: "error",
    });
}
function success() {
    swal({
        title: "Email send successfully",
        text: "We try to reply in 24 hours!",
        icon: "success",
    });
}

//Header Background Change On Scroll
let header = document.querySelector("header")
window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0)
})

//Scroll Hidden
let scrollTop = document.querySelector(".scroll-top")
window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY > 400)
})

//Scroll reveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1500,
    delay: 100,
    reset: true
})
sr.reveal(`.about, .services, .portfolio, .projects, .review, .contact`)
sr.reveal(`.home`, { origin: 'top'})


// Dark Light Mode
const body = document.querySelector("body"), modeToggle = document.querySelector(".dark-light")

    modeToggle.addEventListener("click", () => {
        modeToggle.classList.toggle("active")
        body.classList.toggle("dark")

        if(!body.classList.contains("dark")) {
            localStorage.setItem("mode", "light-mode")
        } else {
            localStorage.setItem("mode", "dark-mode")
        }
    });