let a = document.querySelector('[name="about-me"]')
let b = document.querySelector('.block_title').querySelectorAll('div')
let c = 0
for (const i of b) {
    c += i.offsetWidth
}
a.style.maxWidth = c + 'px'