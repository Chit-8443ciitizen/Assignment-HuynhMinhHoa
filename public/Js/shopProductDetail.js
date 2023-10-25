// add datas to HTML

let nameItemsTitle = document.querySelector('.shopShow-nameItems-title'); 
let listNameItems = document.querySelector('.shopShow-nameItems');     
let listProduct = document.querySelector('.listProduct');// add products 
let itemShopShow = document.querySelector('.shopShow-item');
// open close cart
let iconCart = document.querySelector('.iconCart'); // console.log(iconCart)
let cartTab = document.querySelector('.cart'); //console.log(cart)
let shopShow = document.querySelector('.shopShow');
let closeCart = document.getElementById('close-Cart');// console.log(closeCart)
let listCart = document.querySelector('.listCart');

let listAddCarts = [];
let listProductCart = [];
let cart = [];
let totalQuantityHTML = document.querySelector('.totalQuantity');
// add cart
let btnAdd = document.querySelector('#btnAdd');

// find this product
function showDetail(){
        // Lấy URL hiện tại
    const currentURL = window.location.href;
    // Tạo đối tượng URLSearchParams từ URL hiện tại
    const url = new URL(currentURL);
    // Lấy giá trị product_id
    const productID = url.searchParams.get('product_id'); //console.log(productID);

    let detail = document.querySelector('.detail');
    let thisProduct = products.filter(value =>{
        return value.id == productID;
    })[0]; 
    // console.log(thisProduct)
    // if there is no product has id = productId 
    // > return to home page
    if (!thisProduct){
        window.location.href = "/Ass-JS-PD06987/public/htmls/shopProducts.html";
    }
    
    //  and if has add data this product in html
    detail.querySelector('.image img').src = "../../assets/Images/"+thisProduct.image;
    detail.querySelector('.name').innerText = thisProduct.name;
    detail.querySelector('.price').innerText = "$" + thisProduct.price; 
    btnAdd.dataset.id =  productID;
    detail.querySelector('.description').innerText =thisProduct.description;

    nameItemsTitle.innerHTML = "Same type";
    (products.filter(value => value.id != productID))
    .forEach(product => { // add products at shopShow    
        let newProduct = document.createElement('a');   // create new a element item
        newProduct.href = '/Ass-JS-PD06987/public/htmls/shopProductDetail.html?product_id=' + product.id; // /Z_SPA_LunDev/list-detailProduct/detail.html
        newProduct.classList.add('item');
        newProduct.innerHTML = `
            <img src="../../assets/Images/${product.image}">
            <h2>${product.name}</h2>
            <div class="price">${product.price} $</div>   
                        
        `
        listProduct.appendChild(newProduct); // add this element in listProduct class
    });
    categories.forEach( category =>{ // add this element in listNameItems class
        let newCategory = document.createElement('a');
        let newCate = document.createElement('p');
        newCate.className = 'ml5';
        newCate.id = 'custom-link'
        newCategory.href = '/Ass-JS-PD06987/public/htmls/shopProducts.html?category_id=' + category.id; 
        newCate.innerText = `${category.name}`;
        newCategory.appendChild(newCate);
        listNameItems.appendChild(newCategory);
    });
   
    btnAdd.addEventListener('click', () => { // get id add cart
        console.log(btnAdd.dataset.id);
        let product_id = btnAdd.dataset.id;
        addToCart(product_id);
        //console.log(products);
    });
    
}
iconCart.addEventListener('click', function(){
     //console.log(cartTab);
    if(cartTab.style.right == '-100%'){
        cartTab.style.right = '0';
       shopShow.style.transform = 'translateX(-100px)';
    }else{
        cartTab.style.right = '-100%';
        shopShow.style.transform = 'translateX(0)';
    }
})
if(closeCart){ 
   // console.log(closeCart)
    closeCart.addEventListener('click', function (){
        cartTab.style.right = '-100%';
        shopShow.style.transform = 'translateX(0)';
    })
}else {
    console.log("error")
}


const addToCart = (product_id) => {  
     // console.log(cart);
    //  if(!(localStorage.getItem('cart'))){
    //     cart = JSON.parse(localStorage.getItem('cart'));} console.log(cart);
    let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
    if(cart.length <= 0){
        cart = [{
            product_id: product_id,
            quantity: 1
        }];
    }
    else if(positionThisProductInCart < 0){
        cart.push({
            product_id: product_id,
            quantity: 1
        });
    }
    else{
        cart[positionThisProductInCart].quantity += 1;// console.log(cart)
    }
    addCartToMemory();
    
    addCartToHTML(); 
    
    console.log('Dữ liệu giỏ hàng trong local storage - cart:', cart);
}

const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}
console.log(cart)
const addCartToHTML = () => { 
    console.log(cart); 
    listCart.innerHTML = '';
    let totalQuantity = 0;
    if(cart.length > 0){
        cart.forEach(item => {
            totalQuantity +=  item.quantity; //console.log(totalQuantity)
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.product_id;

            let positionProduct = products.findIndex((value) => value.id == item.product_id);
            let info = products[positionProduct];// console.log(info)
            listCart.appendChild(newItem);
            newItem.innerHTML = `
            <img src="../../assets/Images/${info.image}">
            <div class="content">
                <div class="name">${info.name}</div>
                <div class="price">${info.price}$ / product</div>
            </div>
            <div class="quantity">
                <button class="minus">-</button>
                <span class="value">${item.quantity}</span>
                <button class="plus">+</button>
            </div>
            `;
        })
    }
    totalQuantityHTML.innerText = totalQuantity;
}
listCart.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let product_id = positionClick.parentElement.parentElement.dataset.id; //console.log(product_id)
        let type = 'minus';
        if(positionClick.classList.contains('plus')){
            type = 'plus';
        }
        changeQuantityCart(product_id, type);
    }
})
console.log(cart);
const changeQuantityCart = (product_id, type) => { 
    let positionItemInCart = cart.findIndex((value) => value.product_id == product_id); console.log(positionItemInCart)
    if(positionItemInCart >= 0){
        let info = cart[positionItemInCart];
        switch (type) {
            case 'plus':
                cart[positionItemInCart].quantity = cart[positionItemInCart].quantity + 1;
                break;
                    
            default:
                let changeQuantity = cart[positionItemInCart].quantity - 1;
                if (changeQuantity > 0) {
                    cart[positionItemInCart].quantity = changeQuantity;
                    
                }else{
                    cart.splice(positionItemInCart, 1);
                  
                }
                break;
        }
    }
    console.log(cart)
   // localStorage.setItem('cart', JSON.stringify(cart));
    addCartToHTML();
    addCartToMemory();
}
const initApp = () => {
    let datas = null;
    fetch('../../src/databases/products.json')
    .then(response => response.json())
    .then(data => {
        datas = data;
        products = datas.products; 
        categories = datas.categories;
        showDetail();
        // get data cart from memory
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
            //showDetail();
            addCartToHTML();
        } //console.log(cart)
    } )  

}
initApp();
