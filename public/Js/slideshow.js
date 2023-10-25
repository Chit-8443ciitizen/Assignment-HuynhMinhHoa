let listDivImg = document.querySelectorAll('.list-img div ')  // listImg
let next = document.querySelector('.next')                   //nextBtn
let prev = document.querySelector('.prev')                   //prevBtn
let imgWrap = document.querySelector('.img-wrap  img') // var imgFeature 
let currentIndex = 0;


function setCurrent(index){
    currentIndex = index;
    imgWrap.src = listDivImg[currentIndex].querySelector('img').src;
    // remove all active img
    listDivImg.forEach((item) =>{
        item.classList.remove('active')
    })
    // set active 
    listDivImg[currentIndex].classList.add('active')
}

listDivImg.forEach((img,index) =>{
    img.addEventListener('click', (e) =>{
        imgWrap.style.opacity = '0.1'
        setTimeout(()=>{
            setCurrent(index)
            imgWrap.style.opacity = '1'
        },500)        
    })
})

next.addEventListener('click', () =>{
    if (currentIndex == listDivImg.length -1){
        currentIndex = 0;
    } else currentIndex++;
    imgWrap.style.animation = ''
    setTimeout(()=>{
        setCurrent(currentIndex)
        imgWrap.style.animation = 'slideRight 1s ease-in-out forwards'
    },500)
})

prev.addEventListener('click',() =>{
    if (currentIndex == 0){
        currentIndex = listDivImg.length - 1;
    } else { currentIndex--;}
    imgWrap.style.animation = ''
    setTimeout(()=>{
        setCurrent(currentIndex)
        imgWrap.style.animation = 'slideLeft 1s ease-in-out forwards'
        
    },500)
})

// open close cart
let iconCart = document.querySelector(".iconCart"); // console.log(iconCart)
let cartTab = document.querySelector(".cart"); //console.log(cart)
let shopShow = document.querySelector(".shopShow");
let closeCart = document.getElementById("close-Cart"); // console.log(closeCart)
let listCart = document.querySelector(".listCart");
let listAddCarts = [];
let listProductCart = [];
let cart = [];
let totalQuantityHTML = document.querySelector(".totalQuantity");
iconCart.addEventListener("click", function () {
    //console.log(cartTab);
    if (cartTab.style.right == "-100%") {
      cartTab.style.right = "0";
      shopShow.style.transform = "translateX(-100px)";
    } else {
      cartTab.style.right = "-100%";
      shopShow.style.transform = "translateX(0)";
    }
  });
  if (closeCart) {
    // console.log(closeCart)
    closeCart.addEventListener("click", function () {
      cartTab.style.right = "-100%";
      shopShow.style.transform = "translateX(0)";
    });
  } else {
    console.log("error");
  }
  const addToCart = (product_id) => {
    // console.log(cart);
    //  if(!(localStorage.getItem('cart'))){
    //     cart = JSON.parse(localStorage.getItem('cart'));} console.log(cart);
    let positionThisProductInCart = cart.findIndex(
      (value) => value.product_id == product_id
    );
    if (cart.length <= 0) {
      cart = [
        {
          product_id: product_id,
          quantity: 1,
        },
      ];
    } else if (positionThisProductInCart < 0) {
      cart.push({
        product_id: product_id,
        quantity: 1,
      });
    } else {
      cart[positionThisProductInCart].quantity += 1; // console.log(cart)
    }
    addCartToMemory();
    addCartToHTML();
  
    console.log("Dữ liệu giỏ hàng trong local storage - cart:", cart);
  };
  
  const addCartToMemory = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  //console.log(cart)
  const addCartToHTML = () => {
    //console.log(cart);
    listCart.innerHTML = "";
    let totalQuantity = 0;
    if (cart.length > 0) {
      cart.forEach((item) => {
        totalQuantity += item.quantity; //console.log(totalQuantity)
        let newItem = document.createElement("div");
        newItem.classList.add("item");
        newItem.dataset.id = item.product_id;
  
        let positionProduct = products.findIndex(
          (value) => value.id == item.product_id
        );
        let info = products[positionProduct]; // console.log(info)
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
      });
    }
    totalQuantityHTML.innerText = totalQuantity;
  };
  listCart.addEventListener("click", (event) => {
    let positionClick = event.target;
    if (
      positionClick.classList.contains("minus") ||
      positionClick.classList.contains("plus")
    ) {
      let product_id = positionClick.parentElement.parentElement.dataset.id; //console.log(product_id)
      let type = "minus";
      if (positionClick.classList.contains("plus")) {
        type = "plus";
      }
      changeQuantityCart(product_id, type);
    }
  });
  //console.log(cart);
  const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = cart.findIndex(
      (value) => value.product_id == product_id
    );
    console.log(positionItemInCart);
    if (positionItemInCart >= 0) {
      let info = cart[positionItemInCart];
      switch (type) {
        case "plus":
          cart[positionItemInCart].quantity =
            cart[positionItemInCart].quantity + 1;
          break;
  
        default:
          let changeQuantity = cart[positionItemInCart].quantity - 1;
          if (changeQuantity > 0) {
            cart[positionItemInCart].quantity = changeQuantity;
          } else {
            cart.splice(positionItemInCart, 1);
          }
          break;
      }
    }
    console.log(cart);
    // localStorage.setItem('cart', JSON.stringify(cart));
    addCartToHTML();
    addCartToMemory();
  };
  
  const initApp = () => {
    let datas = null;
    fetch("../../src/databases/products.json")
      .then((response) => response.json())
      .then((data) => {
        datas = data;
        products = datas.products;
        categories = datas.categories;
        //showDetail();
        addDataToHtml();
        // get data cart from memory
        if (localStorage.getItem("cart")) {
          cart = JSON.parse(localStorage.getItem("cart"));
          //showDetail();
          addCartToHTML();
        } //console.log(cart)
      })
      .catch(
        (err) =>{
          console.log(err);
          
        }
      )
  };
  initApp();