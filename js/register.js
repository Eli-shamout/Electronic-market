let username=document.querySelector(".Username");
let email=document.querySelector(".Email");
let password=document.querySelector(".Password");
let sub=document.querySelector(".Sub");
let indexUser=0;
sub.addEventListener('click',(ele)=>{
    if (username.value==='' || email.value==='' ||password.value===''){
        console.log('Fill Form')
    }else{
        /*console.log("username:",username.value);
        console.log("email:",email.value);
        console.log("password:",password.value);*/
        /*let obj={
            username:username.value,
            email:email.value,
            password:password.value
        }
        localStorage.setItem(indexUser,obj);
        */
        localStorage.setItem('name',username.value);
        localStorage.setItem('email',email.value);
        localStorage.setItem('password',password.value);
        indexUser++;
        setTimeout(() => {
            window.location='index.html?register';
        }, 1500);
    }
});
