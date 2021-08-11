let navItem=document.querySelector(".nav-item");
let userAccount=document.querySelector(".userAccount");
let username=document.querySelector(".username");
let usernameVal=localStorage.getItem("name");

let addToCart=document.querySelectorAll(".addToCart");
let shoppingCart=document.querySelector(".shopping-cart");
let menuProduct=document.querySelector(".menu-product");
let menuProductItem=document.querySelector(".menu-product .menu-product-item");
let countItem=document.querySelector(".countItem");
let arrItem=localStorage.getItem("ProductItem") ? JSON.parse(localStorage.getItem("ProductItem")):[]; 
let countItemNumber=arrItem.length;

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

// ********** //
let productContant=document.querySelector(".home .contant");

let drowProductsUI;
(drowProductsUI=function (productItem=[]) {
    let products=productItem.map((ele)=>{
        return `
            <div class="product-item">
                <div class="product-image">
                    <img src=${ele.imageURL} alt="" srcset="">
                </div>
                <div class="product-desc">
                    <h2 onclick="saveIdProduct(${ele.id})">${ele.title}</h2>
                    <p>${ele.desc}</p>
                    <span class="size">Size : ${ele.size}</span>
                    <span class="addToCart" onclick="addProduct('${ele.id}')">Add To Cart</span>
                    <span class="heart"><i class="fa fa-heart-o"></i></span>
                </div>
            </div>
        `;
    });
    productContant.innerHTML=products;
})(product);


function menuItem(){
    let menuItemSelected=localStorage.getItem("ProductItem") ? JSON.parse(localStorage.getItem("ProductItem")):[]; 
    countItem.innerHTML=countItemNumber;
        menuProductItem.innerHTML="";
        menuItemSelected.forEach((item)=>{
            menuProductItem.innerHTML+=`<div class="nameProduct" title="remove item" onclick="removeItem(${item.id})">${item.title} ${item.qty} </div>`;
        });
    countItem.innerHTML=JSON.parse(localStorage.getItem ("ProductItem")).length;
};
menuItem();

function removeItem(id) {
    let arrItemRemove=JSON.parse(localStorage.getItem("ProductItem")) || false; 
    if (arrItemRemove){
        let removeItem=arrItemRemove.filter((ele)=>ele.id!==id);
        console.log(id);
        localStorage.setItem("ProductItem",JSON.stringify(removeItem));
        menuItem();
    }
}



function addProduct(id){
        if (localStorage.getItem('name')){
            let choosenItem=product.find((element) => element.id===+id);
            let oldItem=JSON.parse(localStorage.getItem("ProductItem")) || [];
            oldItem.forEach((ele)=>{
                if (ele.id===choosenItem.id){
                    ele.qty++;
                    choosenItem.qty++;
                }
            });
            if (choosenItem.qty==1)
                oldItem=[...oldItem,choosenItem];/* [0,1,2,every old item ....... ,insert this item in end] */  
            else
                oldItem=oldItem;         
            localStorage.setItem('ProductItem',JSON.stringify(oldItem));
            menuProductItem.innerHTML="";
            JSON.parse(localStorage.getItem("ProductItem")).forEach((ele)=>{
                menuProductItem.innerHTML+=`<div class="nameProduct" title="remove item" onclick="removeItem(${id})">${ele.title} ${ele.qty}</div>`;
            })
            countItem.innerHTML=JSON.parse(localStorage.getItem ("ProductItem")).length;
        }else{
            window.location="login.html";
        }
        
}



shoppingCart.addEventListener("click",()=>{
    if(menuProductItem.innerHTML!=''){
        if (menuProduct.style.visibility==="visible"){
            menuProduct.style.visibility="hidden";
            menuProduct.style.opacity="0";
            menuProduct.style.transform="scale(1,0)";
        }else{
            menuProduct.style.visibility="visible";
            menuProduct.style.opacity="1";
            menuProduct.style.transform="scale(1,1)";
        }
    }
});


function saveIdProduct(id) {
    localStorage.setItem("idProduct",JSON.stringify(id));
    window.location="details.html";
}



let searchKey=document.querySelector("#search");
searchKey.addEventListener("keyup",(e)=>{
    /*if (e.keyCode==13){*/
        let findItem=product.filter((ele)=>ele.title.toLowerCase().indexOf(e.target.value.toLowerCase())!==-1);
        if (findItem.length!=0){
            /* airpods */
            drowProductsUI(findItem);
            console.log(findItem);
        }
    /*}*/
    if (e.target.value.trim()===''){
            drowProductsUI(product);
    }
});