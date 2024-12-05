let img = document.querySelector('img');
let bgArray = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg"]
let i =0;


function slideShow(){
    img.src = bgArray[i];
    i++;
    if(i==7){
        i = 0;
    }
    setTimeout(()=>slideShow(),2000)
}

slideShow();