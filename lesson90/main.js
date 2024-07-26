const btn = document.querySelector('.btn')
const text = document.querySelector('.text')

console.log(text.classList);

btn.addEventListener('click', () => {
    text.classList.toggle('move')
    // text.classList.remove('red')
    if(text.classList.contains('move')) {
        text.textContent = 'Движение'
    } else {
        text.innerText = 'Text'
    }
})

const newHtml = document.querySelector('.newHtml')

newHtml.addEventListener('click', () => {
    alert( document.body.innerHTML ); // читаем текущее содержимое
    document.body.innerHTML = 'Новый BODY!'; // заменяем содержимое
} )

const neweElement = document.querySelector('.neweElement')
neweElement.addEventListener('click', () => {
    let div = document.querySelector('div');
    // заменяем div.outerHTML на <p>...</p>
    div.outerHTML = '<p>Новый элемент</p>'; // (*)
    // Содержимое div осталось тем же!
    // alert(div.outerHTML); // <div>Привет, мир!</div> (**)
})



let text1 = document.body.firstChild;
    alert(text1.data); // Привет

    let comment = text1.nextSibling;
    alert(comment.data); // Комментарий

    setInterval(() => elem.hidden = !elem.hidden, 1000);