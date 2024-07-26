// const btns = document.querySelectorAll('.btn')
// btns.forEach((btn, index) => {
//     btn.addEventListener('click', () => {
//         console.log(index + 1);
//     })
// });

const btn = document.querySelector('.btn')

btn.addEventListener('click', event => {
    // console.log(event.target);

    event.target.classList.toggle('red')
    // event.currentTarget.classList.toggle('red')
})


menu.onclick = function (event) {
    if (event.target.nodeName != 'A') return;

    let href = event.target.getAttribute('href');
    alert(href);

    return false; // отменить действие браузера (переход по ссылке)
};


thumbs.onclick = function(event) {
    let thumbnail = event.target.closest('a');

    if (!thumbnail) return;
    showThumbnail(thumbnail.href, thumbnail.title);
    event.preventDefault();
  }

  function showThumbnail(href, title) {
    largeImg.src = href;
    largeImg.alt = title;
  }