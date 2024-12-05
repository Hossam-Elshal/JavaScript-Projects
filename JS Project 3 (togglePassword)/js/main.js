let pass = document.querySelector('.pass');
let btn = document.querySelector('.btn');

btn.addEventListener('click', togglePassword);


function togglePassword(){
    if(pass.type==="password"){
        pass.type = "text";
        this.innerHTML = "Hide";
    }
    else{
        pass.type = "password";
        this.innerHTML = "Show" 
    }
}