const btnOpen = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')
const bodyFixed = document.body


const modalClose = () => {
    modal.classList.remove('modal--display')
    bodyFixed.classList.remove('body--fixed')
}

const modalOpen = () => {
    modal.classList.add('modal--display')
    bodyFixed.classList.add('body--fixed')
} 


btnOpen.addEventListener('click', modalOpen)


modal.addEventListener('click', event => {
    const target = event.target
    if (target && target.classList.contains('modal__close-btn') || target.classList.contains('modal--display')) {
        modalClose()
    } 
})

document.addEventListener('keydown', event => {
    // console.log(event.code);
    if (event.code === 'Escape' && modal.classList.contains('modal--display')) {
        modalClose()
    }
})
