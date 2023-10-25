// add datas to HTML
let listNameItems = document.querySelector(".shopShow-nameItems");
let listProduct = document.querySelector(".listProduct"); // add products
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

function addDataToHtml() {
    const dataSearch = [ // data to search
        // 'Apparel',
        // 'Accessories',
        // 'Bags',
        // 'Racquets',
        // 'Shuttlecocks',
      ];
  // Lấy URL hiện tại
  const currentURL = window.location.href;
  // Tạo đối tượng URLSearchParams từ URL hiện tại
  const url = new URL(currentURL);
  // Lấy giá trị product_id
  const categoryName = url.searchParams.get("category_name"); //console.log(categoryName);
  if (!categoryName) {
    window.location.href =
      "/Ass-JS-PD06987/public/htmls/shopCategories.html?category_name=Apparel";
  }
  products.forEach((product) => {
    // add products at shopShow
    if (categoryName == "All"){
        let newProduct = document.createElement('a');  // create new a element item
        newProduct.href = '/Ass-JS-PD06987/public/htmls/shopProductDetail.html?product_id=' + product.id; // /Z_SPA_LunDev/list-detailProduct/detail.html
        newProduct.classList.add('item');
        newProduct.innerHTML = `
           <img src="../../assets/Images/${product.image}">
           <h2>${product.name}</h2>
           <div class="price">${product.price} $</div>
        `;
       listProduct.appendChild(newProduct); // add this element in listProduct class

    }

    if (product.category === categoryName) {
      let newProduct = document.createElement("a"); // create new a element item
      newProduct.href =
        "/Ass-JS-PD06987/public/htmls/shopProductDetail.html?product_id=" +
        product.id; // /Z_SPA_LunDev/list-detailProduct/detail.html
      newProduct.classList.add("item");
      newProduct.innerHTML = `
           <img src="../../assets/Images/${product.image}">
           <h2>${product.name}</h2>
           <div class="price">${product.price} $</div>                 
        `;
      listProduct.appendChild(newProduct); // add this element in listProduct class
    } 
    dataSearch.push(product.name);
    //dataSearch.push(product.description);
    dataSearch.push(product.price);
  });
  categories.forEach((category) => {
    // add this element in listNameItems class
    let newCategory = document.createElement("a");
    newCategory.className = "category";
    newCategory.dataset.id = category.id;
    let newCate = document.createElement("p");
    newCate.className = "ml5";
    newCategory.href =
      "/Ass-JS-PD06987/public/htmls/shopCategories.html?category_name=" +
      category.name;
    newCate.innerText = `${category.name}`;
    newCategory.appendChild(newCate);
    listNameItems.appendChild(newCategory);
    dataSearch.push(category.name);
    //dataSearch.push(category.description);

    //console.log(dataSearch);
  });

 
    //console.log(dataSearch); // Mảng dữ liệu mẫu (thay thế bằng dữ liệu thực tế)
    
          // Sự kiện tìm kiếm khi người dùng nhấn nút hoặc nhập phím Enter
          searchButton.addEventListener("click", () => {
            searchResults.innerHTML = ``;
            const query = searchInput.value;
            performSearch(query);
        });
    
        searchInput.addEventListener("keyup", (event) => {
            searchResults.innerHTML = ``;
            if (event.key === "Enter") {
            const query = searchInput.value; 
            performSearch(query);
          
            }
        });
        
        // Hàm tìm kiếm 
        console.log(dataSearch);
        function performSearch(query) {
             if (dataSearch){
                const dataSearchString = dataSearch.map(item => item.toString());
                const results = dataSearchString.filter((item) =>
                item.toLowerCase().includes(query.toLowerCase())
                );
                displaySearchResults(results);
                
            } else{
                searchResults.innerText = "No data to search";
            } 
            
        }
        // function performSearch(query, fieldToSearch) {
        //     if (dataSearch) {
        //         const results = dataSearch.filter((item) => {
        //             if (typeof item[fieldToSearch] === "string") {
        //                 return item[fieldToSearch].toLowerCase().includes(query.toLowerCase());
        //             }
        //             return false; // Bỏ qua các đối tượng không có trường cụ thể hoặc không phải chuỗi
        //         });
        //         displaySearchResults(results);
        //     } else {
        //         searchResults.innerText = "No data to search";
        //     }
        // }
        // Hàm hiển thị kết quả tìm kiếm
        function displaySearchResults(results) {
            if (results.length === 0) {
            searchResults.innerHTML = `<h3>Không tìm thấy kết quả.</h3>`;
            } else {
            results.map((item) => {
                //listResult.push(item);
                let aResult = document.createElement("a");
                let br = document.createElement("br");
                aResult.innerText = item;
    
                searchResults.appendChild(aResult);
                //searchResults.appendChild(br);
            });
            }
        }

} //console.log(categories);

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
// sccroll
// Hiển thị button khi người dùng cuộn xuống một phần tử cụ thể
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll-to-top").style.display = "block";
  } else {
    document.getElementById("scroll-to-top").style.display = "none";
  }
};

// Hàm cuộn lên đầu trang
function scrollToTop() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
}
// -------------- start search -----------------

// Lấy các phần tử HTML
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchResults = document.getElementById("searchResults");

// -------------- end search -----------------
