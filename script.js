let a = document.querySelector('.about-me-content')
let b = document.querySelector('.block_title').querySelectorAll('div')
let c = 0
for (const i of b) {
    console.log(i.offsetWidth)
    c += i.offsetWidth
}
a.style.width = c + 'px'