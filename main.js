function Check(){
    let checkbox = document.querySelector(".checkbox");
    if (checkbox.checked)
        return true ;
    else
        return false ;
}
function validate() {
    var Email = document.querySelector(".email").value;
    var Password = document.querySelector(".password").value;
    var Error_1 = document.querySelector(".Error-1");
    var Error_2 = document.querySelector(".Error-2");
    if(Email.indexOf("@gmail.com") == -1 )
    {
        Error_1.style.display = "block";
        return false ;
    }
    else if(Password.length < 8)
    {
        Error_1.style.display = "none";
        Error_2.style.display = "block";
        return false ;
    }
    else if(Check() != true)
    {
        Error_2.style.display = "none";
        document.querySelector(".label").style.color = "brown";
        return false ;
    }
    else
    {
        return true ;
    }
}
function validate_Sign_Up(){
    var Name = document.querySelector(".Full_Name").value;
    var Email = document.querySelector(".Email").value;
    var password = document.querySelector(".Password").value;
    var Error_0 = document.querySelector(".error-0");
    var Error_1 = document.querySelector(".error-1");
    var Error_2 = document.querySelector(".error-2");
    if(Name.length < 3)
    {
        Error_0.style.display = "block";
        return false ;
    }
    else if(Email.indexOf("@gmail.com") == -1 )
    {
        Error_0.style.display = "none";
        Error_1.style.display = "block";
        return false ;
    }
    else if(password.length < 8)
    {
        Error_1.style.display = "none";
        Error_2.style.display = "block";
        return false ;
    }
    else
    {
        return true ;
    }
}

function Fetch(){
    fetch('items.json')
    .then(response => response.json())
    .then(data => {
        const product_Item = document.getElementById("product_Item");
        const product_Item_2 = document.getElementById("product_Item2");
        const product_Item_3 = document.getElementById("product_Item3");
        data.forEach(products => {
            All_Product = data;
            if(products.old_price)
            {
                const discount = Math.floor((products.old_price-products.price ) / products.old_price * 100 );
                product_Item.innerHTML += `
                <div class="products swiper-slide">
                    <div class="products-sale">
                        <span>%${discount}</span>
                    </div>
                    <div class="products-icon">
                        <i onclick="Add_Card(${products.id}, this)" class="fa-solid fa-cart-shopping"></i>
                        <i onclick="color_heart()" class="fa-solid fa-heart"></i>
                        <i onclick="color_heart()" class="fa-solid fa-share"></i>
                    </div>
                    <div class="products-img mt-0">
                        <img src="product-1.jpg" loading="lazy">
                        <img class="img-hover" src="product1.jpg" loading="lazy">
                    </div>
                    <div class="products-name">
                        <a href="only_product.html"><h6>${products.name}</h6></a>
                    </div>
                    <div class="products-star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i style="color: black;" class="fa-solid fa-star"></i>
                    </div>
                    <div class="products-price d-flex justify-content-center">
                        <span class="price me-3 mb-0 mt-0">$${products.price}</span>
                        <p class="old-price mb-0 mt-0">$${products.old_price}</p>
                    </div>
                </div> `
            }
            else
            {
                product_Item_2.innerHTML += `
                <div class="products swiper-slide">
                    <div class="products-icon" onclick="return color_heart()">
                        <i onclick="Add_Card(${products.id}, this)" class="fa-solid fa-cart-shopping"></i>
                        <i onclick="color_heart()" class="fa-solid fa-heart"></i>
                        <i onclick="color_heart()" class="fa-solid fa-share"></i>
                    </div>
                    <div class="products-img mt-0">
                        <img src="product-2.jpg" loading="lazy">
                        <img class="img-hover" src="product2.jpg" loading="lazy">
                    </div>
                    <div class="products-name">
                        <a href="only_product.html"><h6>${products.name}</h6></a>
                    </div>
                    <div class="products-star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i style="color: black;" class="fa-solid fa-star"></i>
                    </div>
                    <div class="products-price d-flex justify-content-center">
                        <span class="price mb-0 mt-0">$${products.price}</span>
                    </div>
                </div> `
                product_Item_3.innerHTML += `
                <div class="products swiper-slide">
                    <div class="products-icon" onclick="return color_heart()">
                        <i onclick="Add_Card(${products.id}, this)" class="fa-solid fa-cart-shopping"></i>
                        <i onclick="color_heart()" class="fa-solid fa-heart"></i>
                        <i onclick="color_heart()" class="fa-solid fa-share"></i>
                    </div>
                    <div class="products-img mt-0">
                        <img src="product-3.jpg" loading="lazy">
                        <img class="img-hover" src="product3.jpg" loading="lazy">
                    </div>
                    <div class="products-name">
                        <a href="only_product.html"><h6>${products.name}</h6></a>
                    </div>
                    <div class="products-star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i style="color: black;" class="fa-solid fa-star"></i>
                    </div>
                    <div class="products-price d-flex justify-content-center">
                        <span class="price mb-0 mt-0">$${products.price}</span>
                    </div>
                </div> `
            }
        })
    })
}Fetch();

function All_Fetch(){
    fetch('items.json')
    .then(response => response.json())
    .then(data => {
        const All_Products = document.getElementById("All_Product");
        data.forEach(products => {
            const discount = products.old_price ? `<div class="products-sale"><span>%${Math.floor((products.old_price-products.price ) / products.old_price * 100 )}</span></div>` : "";
            const old_price_item = products.old_price ? `<p class="old-price mb-0 mt-0">$${products.old_price}</p>` : "";
            All_Products.innerHTML += `
            <div class="products">
                ${discount}
                <div class="products-icon">
                    <i onclick="Add_Card(${products.id}, this)" class="fa-solid fa-cart-shopping"></i>
                    <i onclick="color_heart()" class="fa-solid fa-heart"></i>
                    <i onclick="color_heart()" class="fa-solid fa-share"></i>
                </div>
                <div class="products-img mt-0">
                    <img src="product-4.jpg" loading="lazy">
                    <img class="img-hover" src="product4.jpg" loading="lazy">
                </div>
                <div class="products-name">
                    <a href="only_product.html"><h6>${products.name}</h6></a>
                </div>
                <div class="products-star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i style="color: black;" class="fa-solid fa-star"></i>
                </div>
                <div class="products-price d-flex justify-content-center">
                    <span class="price me-3 mb-0 mt-0">$${products.price}</span>
                    ${old_price_item}
                </div>
            </div> `
    })
    })
}All_Fetch();

var All_Product ;
var offcanvas_body = document.querySelector(".offcanvas-body");
let Product_card = [];
function Add_Card(id , btn){
    document.querySelectorAll(".product .fa-cart-shopping").forEach(button =>{
        button.addEventListener("click",()=>{
            button.style.color = "green";
        })
    })
    Product_card.push(All_Product[id])
    console.log(Product_card);
    get_card()
}
let count_item_1 = document.querySelector(".num-pay");
let count_item_2 = document.querySelector(".num-pay2");
let price_item_1 = document.querySelector(".p-card");
let price_item_2 = document.querySelector(".p-card2");
function get_card(){
    let items = "" ;
    let total_price = 0 ;
    for(let i =0 ; i<Product_card.length ; i++){
        items +=`
                    <div class="card-item">
                        <div>
                            <img class="mt-0" src="product-7.jpg" height="70px" width="60px" loading="lazy">
                        </div>
                        <div>
                            <h6>${Product_card[i].name}</h6>
                            <p>$${Product_card[i].price}</p>
                        </div>
                        <div>
                            <button onclick="del_card(${i})" class="delte-item">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                    </div> <hr>
                `
                total_price += Product_card[i].price
            }
    offcanvas_body.innerHTML =items
    price_item_1.innerHTML = "$" + total_price
    price_item_2.innerHTML = "$" + total_price
    count_item_1.innerHTML = Product_card.length
    count_item_2.innerHTML = Product_card.length
}
function del_card(index){
    Product_card.splice(index,1)
    get_card()
}
function color_heart(){
    document.querySelectorAll(".product .fa-heart").forEach(button =>{
        button.addEventListener("click",()=>{
            button.style.color = "red";
        })
    })
    document.querySelectorAll(".product .fa-share").forEach(button =>{
        button.addEventListener("click",()=>{
            button.style.color = "blue";
        })
    })
}color_heart();

let Big_Img = document.querySelector(".Big_Img");
let Sm_Img = document.querySelector(".sect-1 .view-product .d-flex img");
function Swap(img){
    Big_Img.src = img ;
}

const Search = ()=>{
    const searchbox = document.getElementById("searchBox").value.toUpperCase();
    const Items = document.getElementById("product_Item");
    const product = document.querySelectorAll(".products");
    const Name = document.getElementsByTagName("h6");
    for(let i = 0 ; i < Name.length ; i++)
    {
        let match = product[i].getElementsByTagName('h6')[0];
        if(match){
            let val = match.textContent || match.innerHTML
            if(val.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";
            }
            else{
                product[i].style.display = "none";
            }
        }
    }
}

const Search2 = ()=>{
    const searchbox2 = document.getElementById("searchBox2").value.toUpperCase();
    const Items = document.getElementById("product_Item");
    const product = document.querySelectorAll(".products");
    const Name = document.getElementsByTagName("h6");
    for(let i = 0 ; i < Name.length ; i++)
    {
        let match = product[i].getElementsByTagName('h6')[0];
        if(match){
            let val = match.textContent || match.innerHTML
            if(val.toUpperCase().indexOf(searchbox2) > -1){
                product[i].style.display = "";
            }
            else{
                product[i].style.display = "none";
            }
        }
    }
}

function swiper(){
    var swiper = new Swiper(".slide_sec" , {
        pagination:{
            el:".swiper-pagination",
            dynamicBullests:true ,
            clickable:true ,
        },
        slidesPerView: 5,
        spaceBetween: 25,
        autoplay:{
            delay:10000,
        },
        navigation:{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev"
        },
        breakpoints:{
            1500:{
                slidesPerView: 5,
            },
            1200:{
                slidesPerView: 4,
            },
            600:{
                slidesPerView: 3,
            },
            300:{
                slidesPerView: 2,
            },
            100:{
                slidesPerView: 1,
            },
        },
        loop:true,
    })
}swiper();
