let body = document.querySelector('body');
let btn = document.querySelector('.btn');

btn.addEventListener('click', changeBgColor)

function changeBgColor(){
    body.style.backgroundColor = `#${Math.random().toString(16).slice(2, 8)}`;
}
