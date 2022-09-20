const decrease_btn = document.querySelector("#decrease")
const reset_btn = document.querySelector("#reset")
const increase_btn = document.querySelector("#increase")
const save_btn = document.querySelector("#save")
const clear_btn = document.querySelector("#clear")
const counter_el = document.querySelector("#counter")

let counter = window.localStorage.getItem('counter') || 0;
counter_el.textContent = counter;

function decrease() {
    if (counter > 0) counter--
        counter_el.textContent = counter;
}


function increase() {
    counter++;
    counter_el.textContent = counter;
}

function reset() {
    counter = 0;
    counter_el.textContent = counter;
}

function save() {
    window.localStorage.setItem('counter', counter)
}

function clear() {
    window.localStorage.removeItem('counter')
}

decrease_btn.addEventListener('click', decrease)
increase_btn.addEventListener('click', increase)
reset_btn.addEventListener('click', reset)
save_btn.addEventListener('click', save)
clear_btn.addEventListener('click', clear)