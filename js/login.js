let username=document.querySelector(".email");
let password=document.querySelector(".password");
let sub=document.querySelector(".sub");
sub.addEventListener("click",(e)=>{
    e.preventDefault();
    if (username.value==='' ||password.value===''){
        console.log('Fill Form')
    }else{
        if ((username.value.trim() &&username.value.trim()===localStorage.getItem("name")) && (password.value && password.value===localStorage.getItem('password'))){
            setTimeout(() => {
                window.location='index.html?register';
            }, 1500);
        }else{
            console.log('User Not Found');
        }
    }
});