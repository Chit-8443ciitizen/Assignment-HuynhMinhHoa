

let totalOrder = document.querySelector(".pay-inf-quantity");
let listOrders = document.querySelector(".pay-inf-quantity-details");
let totalBill = document.querySelector("#totalBill");

let listCart = [];
function checkCart() {
  var cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("listCart="));
  if (cookieValue) {
    listCart = JSON.parse(cookieValue.split("=")[1]);
  }
}
checkCart();
function showOrders() {
  console.log(cart);
  console.log(products);
}
const addCartToHTML = () => {
  if(cart){console.log("Dữ liệu giỏ hàng trong local storage - cart:", cart);}
  listOrders.innerHTML = "";
  let totalQuantity = 0;
  let totalbill = 0;
  if (cart.length > 0) {
    cart.forEach((item) => {
      totalQuantity += item.quantity; //console.log(totalQuantity)
      let newItem = document.createElement("div");
      newItem.classList.add("pay-inf-quantity-detail");
      newItem.dataset.id = item.product_id;

      let positionProduct = products.findIndex(
        (value) => value.id == item.product_id
      );
      let info = products[positionProduct]; // console.log(info)
      let toltalrow = item.quantity * info.price;
      listOrders.appendChild(newItem);
      newItem.innerHTML = `
            <div>
                <img src="../../assets/Images/${info.image}" alt="">
                <span>${item.quantity}</span>
            </div>
            
            <p>${info.name}</p>
            <p>${toltalrow} $</p>                
            `;
      totalbill += toltalrow;
    });
  }
  totalOrder.innerText = "You have: " + totalQuantity + " products";
  totalBill.innerText = totalbill + " $";
};
const initApp = () => {
  let datas = null;
  fetch("../../src/databases/products.json")
    .then((response) => response.json())
    .then((data) => {
      datas = data;
      products = datas.products;
      categories = datas.categories;

      // get data cart from memory
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart")); //console.log(cart)
        addCartToHTML();
      }
    });
};
initApp();
// validate
const fullNameInput = document.getElementById("fullname");
const phoneNumberInput = document.getElementById("numphone");
const addressInput = document.getElementById("address");
const emailInput = document.getElementById("email");
const submitButton = document.getElementById("purchase");
const radioButtons = document.querySelectorAll('input[type="radio"]');

submitButton.addEventListener("click", () => {
  // Lấy giá trị từ các trường
  const fullName = fullNameInput.value;
  const phoneNumber = phoneNumberInput.value;
  const address = addressInput.value;
  const email = emailInput.value;

  // Biểu thức chính quy kiểm tra họ tên
  const nameRegex = /^[a-zA-Z]+\s[a-zA-Z]+$/;

  // Biểu thức chính quy kiểm tra số điện thoại (84xxxxxxxxx)
  const phoneRegex = /(84|[3|5|7|8|9])+([0-9]{9})\b/g;

  // Biểu thức chính quy kiểm tra email
  const emailRegex =
    /^[\w-]+@((email\.com|gmail\.com|outlook\.com|icloud\.com|yahoo\.com|fpt\.edu\.vn))$/;

  // Kiểm tra và validate dữ liệu
  // if (!nameRegex.test(fullName)) {
  //     alert('Vui lòng nhập họ và tên theo đúng định dạng.');
  //     return;
  // }
  if (fullName == "" || phoneNumber == "" || address == "" || email == "") {
    alert("Input not valid");
    return;
  }
  if (!phoneNumber.match(phoneRegex)) {
    alert("Vui lòng nhập số điện thoại hợp lệ (84xxxxxxxxx).");
    return;
  }

  if (!emailRegex.test(email)) {
    alert(
      "Vui lòng nhập địa chỉ email hợp lệ (email.com, gmail.com, outlook.com, icloud.com, yahoo.com)."
    );
    return;
  }
  let payed = false; console.log(cart)
  radioButtons.forEach((radioButton) => {
    if (radioButton.checked) {
      const inputIdValue = radioButton.value;
      console.log(inputIdValue);
      payed = true;
      localStorage.removeItem('cart');
      window.location.href = "shopThankyou.html";
    }
  });
  if (payed == false) {
    alert("phải chọn cách thanh toán");
    return;
  } 
});