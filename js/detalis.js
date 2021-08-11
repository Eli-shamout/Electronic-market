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



let countItem=document.querySelector(".countItem");
let contantProduct=document.querySelector(".detalis .contant");
let idProduct=localStorage.getItem("idProduct");

function drowProductsUIUSER() {
    let products=product.find((ele)=>ele.id==+idProduct);
    contantProduct.innerHTML= `
            <div class="product-item">
                <div class="product-image">
                    <img src=${products.imageURL} alt="" srcset="">
                </div>
                <div class="product-desc">
                    <h2>${products.title}</h2>
                    <p>${products.desc}</p>
                    <span class="size">Size : ${products.size}</span>
                    <span class="addToCart" onclick="addProduct('${products.id}')">Add To Cart</span>
                    <span class="heart"><i class="fa fa-heart-o"></i></span>
                </div>
            </div>
        `;
};
drowProductsUIUSER();