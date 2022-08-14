const seconds = document.querySelector(".seconds .number"),
minutes = document.querySelector(".minutes .number"),
hours = document.querySelector(".hours .number"),
days = document.querySelector(".days .number")

const currentYear = new Date().getFullYear();
//Ngay Thi THPT Du Kien
const thptTime = new Date(`July 7 ${currentYear + 1} 07:00:00`)


//THPT Time Function
function updateCountdown() {
    const currentTime = new Date()
    const cd = thptTime - currentTime
    
    const d = Math.floor(cd / 1000 / 60 / 60/ 24)
    const h = Math.floor(cd / 1000 / 60 / 60) % 24
    const m = Math.floor(cd / 1000 / 60) % 60
    const s = Math.floor(cd / 1000) % 60

    days.innerHTML = d
    hours.innerHTML = h < 10 ? '0' + h : h
    minutes.innerHTML = m < 10 ? '0' + m : m
    seconds.innerHTML = s < 10 ? '0' + s : s
}

setInterval(updateCountdown, 1000)