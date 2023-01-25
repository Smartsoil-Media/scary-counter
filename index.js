// document.getElementById("count-el").innerText = 5;

let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let resetEl = document.getElementById("reset-btn")


console.log(countEl)

function increment() {
    count = count + 1 
    countEl.textContent = count
}

function save() {
    let currentCount = " " + count + " - "
    saveEl.textContent += currentCount
    count = 0
    countEl.textContent = 0
} 

function reset() {
    count = 0
    saveEl.textContent = "Previous entries"
}

