let text_input = document.querySelector('.box #input')
let  btn = document.querySelector('.box button');
let paragraph = document.querySelector('.box > .paragraph');

btn.onclick = function(){
    if(text_input.value !==""){
        paragraph.innerHTML = text_input.value;
        text_input.value ="";
    }
}