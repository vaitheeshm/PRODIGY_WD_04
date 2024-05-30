
// Typed js
var typed = new Typed('.typing_animation', {
    strings: ["Front-end developer. ", "Python developer. "],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 300,
    showCursor: false,
    loop: true,
}
)

const icon = document.getElementById("exit")
let box = document.getElementsByClassName("box")[0]
let inner_box_1 = document.getElementsByClassName("inner_box_1")[0]
let inner_box_2 = document.getElementsByClassName("inner_box_2")[0]
let inner_box_3 = document.getElementsByClassName("inner_box_3")[0]

function card_fn_1() {
    box.style.display = "block"
    inner_box_1.style.display = "block"
    icon.style.display = "block"
}

function card_fn_2() {
    box.style.display = "block"
    inner_box_2.style.display = "block"
    icon.style.display = "block"
}

function card_fn_3() {
    box.style.display = "block"
    inner_box_3.style.display = "block"
    icon.style.display = "block"
}



icon.addEventListener('click', function () {
    box.style.display = "none"
    icon.style.display = "none"
    inner_box_1.style.display = "none"
    inner_box_2.style.display = "none"
    inner_box_3.style.display = "none"
});

let menu_btn = document.getElementById("menu_btn")
let elements = document.querySelector("nav ul")
let nav_bar = document.getElementsByTagName("nav")[0]
console.log(nav_bar)
menu_btn.addEventListener('click', () => {
    // elements.style.display="block"
    elements.classList.toggle('show_menu')
    nav_bar.classList.toggle("chg_color")
})