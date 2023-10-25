// get datas from products.json
let products = null;
fetch('dataJsons/products.json')
.then(response => response.json())
.then(data => {
    products = data;
    showDetail();
})
// find this product
function showDetail(){
    let detail = document.querySelector('.detail');
    let productId = new URLSearchParams(window.location.search).get('id'); 
    let thisProduct = products.filter(value =>{
        return value.id == productId;
    })[0]; 
    // console.log(thisProduct)
    // if there is no product has id = productId 
    // > return to home page
    if (!thisProduct){
        window.location.href = "/Z_SPA_LunDev/list-detailProduct";
    }
    //  and if has add data this product in html
    detail.querySelector('.image img').src = thisProduct.image;
    detail.querySelector('.name').innerText = thisProduct.name;
    detail.querySelector('.price').innerText = "$" + thisProduct.price;  
    detail.querySelector('.description').innerText =thisProduct.description;
    
    // add datas similar products
    // show all product
    let listProduct = document.querySelector('.listProduct');
    (products.filter(value => value.id != productId))
    .forEach( product => {
        let newProduct = document.createElement('a');
        newProduct.href = '/Z_SPA_LunDev/list-detailProduct/detail.html?id=' + product.id  ;
        newProduct.classList.add('item');
        newProduct.innerHTML = `
            <img src="${product.image}">
            <h2>${product.name}</h2>
            <div class="price">${product.price}</div>
        `;
        listProduct.appendChild(newProduct);
        });
        // $(".container").html(html);
}

// open close cart
let iconCart = document.querySelector('.iconCart');
let cart = document.querySelector('.cart');
let container = document.querySelector('.container');
let close = document.querySelector('.close');



iconCart.addEventListener('click', function(){

    // console.log("kkk");
    if(cart.style.right == '-100%'){
        cart.style.right = '0';
        container.style.transform = 'translateX(-100px)';
    }else{
        cart.style.right = '-100%';
        container.style.transform = 'translateX(0)';
    }
})
close.addEventListener('click', function (){
    cart.style.right = '-100%';
    container.style.transform = 'translateX(0)';
})

// check list cart
let listCart = [];

function checkCart(){
     
    // var cookieValue = document.cookie
    // .split('; ')
    // .find(row => row.startsWith('listCart='));
    // if(cookieValue){
    //     listCart = JSON.parse(cookieValue.split('=')[1]);
    // }else{
    //     listCart = [];
    // }
    // console.log(listCart);
}
checkCart();

// add to cart insert icon
let btnAdd = document.querySelector('#btnAdd'); 

// let totalIcon = 0;
    btnAdd.onclick = function(){ 
        // find id product was added
        let productId = new URLSearchParams(window.location.search).get('id'); 
        let thisProduct = products.filter(value =>{
            return value.id == productId;
        })[0]; 
        // console.log("id"+thisProduct.id);
        let productsCopy = JSON.parse(JSON.stringify(products));
        // console.log(productsCopy);
        //// If this product is not in the cart
        if(!listCart[thisProduct.id]) 
        {
            listCart[thisProduct.id] = productsCopy.filter(product => product.id == thisProduct.id)[0];
            listCart[thisProduct.id].quantity = 1;
        }else{
            //If this product is already in the cart.
            //I just increased the quantity
            listCart[thisProduct.id].quantity++;
        }
        // console.log(listCart);
        // document.cookie = "listCart=" + JSON.stringify(listCart) 
        //         + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
        document.cookie = JSON.stringify(listCart) 
        + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
                
        addCartToHTML();
        // console.log(document.cookie);
        // return b;
    };
    function addCartToHTML(){
        // clear data default
        let listCartHTML = document.querySelector('.listCart');
        listCartHTML.innerHTML = '';
    
        let totalHTML = document.querySelector('.totalQuantity');
        let totalQuantity = 0;
        // if has product in Cart
        if(listCart){
            listCart.forEach(product => {
                if(product){
                    let newCart = document.createElement('div');
                    newCart.classList.add('item');
                    newCart.innerHTML = 
                        `<img src="${product.image}">
                        <div class="content">
                            <div class="name">${product.name}</div>
                            <div class="price">$${product.price} / 1 product</div>
                        </div>
                        <div class="quantity">
                            <button onclick="changeQuantity(${product.id}, '-')">-</button>
                            <span class="value">${product.quantity}</span>
                            <button onclick="changeQuantity(${product.id}, '+')">+</button>
                        </div>`;
                    listCartHTML.appendChild(newCart);
                    totalQuantity += product.quantity;
                }
            })
        }
        totalHTML.innerText = totalQuantity;
    }

    



