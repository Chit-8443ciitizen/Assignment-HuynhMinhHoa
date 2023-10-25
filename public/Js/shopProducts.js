
// get datas from products.json
let datas = null;
fetch('../../src/databases/products.json')
.then(response => response.json())
.then(data => {
    datas = data;
    // console.log(datas.categories); 
    addDataToHtml();
    //getTitleShopShow(); 
    }
) 
// add datas to HTML

let nameItemsTitle = document.querySelector('.shopShow-nameItems-title'); 
let listNameItems = document.querySelector('.shopShow-nameItems');     
let listProduct = document.querySelector('.listProduct');// add products 


let itemShopShow = document.querySelector('.shopShow-item');
function addDataToHtml(){
    nameItemsTitle.innerText = "Same type"
    datas.products.forEach(product => { // add products at shopShow    
        
        let newProduct = document.createElement('a');   // create new a element item
        newProduct.href = '/Ass-JS-PD06987/public/htmls/shopProductDetail.html?product_id=' + product.id; 
        newProduct.classList.add('item');
        newProduct.innerHTML = `
            <img src="../../assets/Images/${product.image}">
            <h2>${product.name}</h2>
            <div class="price">${product.price} $</div>                 
      `
        listProduct.appendChild(newProduct); // add this element in listProduct class
    });
    datas.categories.forEach( category =>{ // add this element in listNameItems class
        let newCategory = document.createElement('a');
        let newCate = document.createElement('p');
        newCate.className = 'ml5';
       newCategory.href = '/Ass-JS-PD06987/public/htmls/shopProductDetail.html?category_id=' + category.id; 
        newCate.innerText = `${category.name}`;
        newCategory.appendChild(newCate);
        listNameItems.appendChild(newCategory);
        // newCategory.addEventListener('click', function() {
        //     const categoryValue = newCategory.innerText; // Lấy giá trị bên trong phần tử newCategory
        //     console.log(categoryValue); // In giá trị ra console hoặc thực hiện các xử lý khác với giá trị này
        //     titleItem = categoryValue;
        // });

}
    )
}
iconCart.addEventListener('click', function(){
     //console.log(cartTab);
    if(cartTab.style.right == '-100%'){
        cartTab.style.right = '0';
       // shopShow.style.transform = 'translateX(-100px)';
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


