// Old Version button
function onClick1() {
    window.location.href = "#bmwE30"
}

// New version button
function onClick2() {
    window.location.href = "#bmwG20"
}

// Hamburger button
function burger(x) {
    x.classList.toggle("change")
}

// Menu for hamburger button
const hamburger = document.querySelector(".hamburger")
const rightNav = document.querySelector(".text-right-nav")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    rightNav.classList.toggle("active");
})

// Toggle Darkmode
const body = document.querySelector("body"), toggle = document.querySelector(".toggle")

let getMode = localStorage.getItem("mode")
if (getMode && getMode === "dark") {
    body.classList.add("dark")
    toggle.classList.add("active")
}

toggle.addEventListener("click", () => {
    body.classList.toggle("dark")

    if (!body.classList.contains("dark")) {
        return localStorage.setItem("mode", "light")
    }
    localStorage.setItem("mode", "dark")
})
const textBmwSeries = document.querySelector(".popular-card"), toggle2 = document.querySelector(".toggle")
toggle2.addEventListener("click", () => {
    textBmwSeries.classList.toggle("dark")
})
toggle.addEventListener("click", () => toggle.classList.toggle("active"))