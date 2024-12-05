let btn = document.querySelector('.btn')
let box = document.querySelector('.box')
let colorArray = ["red", "green","blue"];
let i=0;


btn.onclick = function() {
    box.style.backgroundColor = colorArray[i];
    box.innerHTML = i;
    i++;
    if(i===3){
        i=0
    }
}

console.log(i);
