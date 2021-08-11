
let productContant=document.querySelector(".contantProduct");
let countItem=document.querySelector(".countItem");

let drowProductsUIUSER;
(drowProductsUIUSER=function (product=[]) {
    setTimeout(() => {
        if (product.length===0) window.location="index.html";
    }, 500);
    let products=product.map((ele)=>{
        return `
            <div class="product-item">
                <div class="product-image">
                    <img src=${ele.imageURL} alt="" srcset="">
                </div>
                <div class="product-desc">
                    <h2> ${ele.title} </h2>
                    <p>${ele.desc}</p>
                    <span class="size">Size : ${ele.size}</span>
                    <span class="addToCart" onclick="removeItem('${ele.id}')">Remove To Cart</span>
                    <span class="heart"><i class="fa fa-heart-o"></i></span>
                </div>
            </div>
        `;
    });
    countItem.innerHTML=product.length;
    productContant.innerHTML=products;
})(JSON.parse(localStorage.getItem("ProductItem")));



let navItem=document.querySelector(".nav-item");
let userAccount=document.querySelector(".userAccount");
let username=document.querySelector(".username");
let usernameVal=localStorage.getItem("name");

if (usernameVal){
    navItem.remove();
    userAccount.style.display="block";
    username.innerHTML=usernameVal;
}



let logout=document.querySelector(".logout");
logout.addEventListener("click",()=>{
    setTimeout(() => {
        localStorage.clear();
        window.location="register.html";
    }, 500);
});

function removeItem(id) {
    let itemsProduct=localStorage.getItem('ProductItem');
    if (itemsProduct){
        let productItems=JSON.parse(itemsProduct);
        let itemFilter=productItems.filter((ele)=>ele.id!=id);
        localStorage.setItem("ProductItem",JSON.stringify(itemFilter));
        drowProductsUIUSER(itemFilter);
    }
}

let searchKey=document.querySelector("#search");
searchKey.addEventListener("keyup",function(e){
    if (e.keyCode===13){
        let findItem=product.filter((ele)=>ele.title==e.target.value) || [];
        if (findItem.length!=0){
            /* airpods */
            drowProductsUIUSER(findItem);
        }
    }else{
        if (e.target.value.trim()===''){
                drowProductsUIUSER(JSON.parse(localStorage.getItem("ProductItem")));
        }
    }
});