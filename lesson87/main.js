const cosolElem = document.querySelector('.body__one')
console.log(cosolElem);
cosolElem.textContent = 'text'
cosolElem.id = '123'
cosolElem.style.fontSize = '32px'

const elem2 = document.querySelectorAll('div')

elem2.forEach((element) => {
    element.style.color = 'blue'
});

const button = document.querySelector('.btn')
let btnIsRed = false

button.addEventListener('click', () => {
    if (btnIsRed) {
        button.style.background = 'blue'
        btnIsRed = false
    } else {
        button.style.background = 'red'
        btnIsRed = true
    }
})




const bagraundFive = document.querySelector('.body__five')
bagraundFive.style.background = 'red'



function scrolling() {
    bagraundFive.style.color = 'aqua'
    console.log('scrol сработал')
}
bagraundFive.addEventListener('scroll', scrolling)


