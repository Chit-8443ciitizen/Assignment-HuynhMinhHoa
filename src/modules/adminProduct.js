import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import {
  getDatabase,
  remove,
  update,
  ref,
  push,
  child,
  get,
  onValue,
  set,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyDN45ttOvM1TC-4TCTvS_-NuHR5oPc89i8",
  authDomain: "ecmascript-ed1df.firebaseapp.com",
  databaseURL: "https://ecmascript-ed1df-default-rtdb.firebaseio.com",
  projectId: "ecmascript-ed1df",
  storageBucket: "ecmascript-ed1df.appspot.com",
  messagingSenderId: "850062603860",
  appId: "1:850062603860:web:c73a3d7200e0224d5d1fc1",
  measurementId: "G-D452PMQPJ0",
};
const app = initializeApp(firebaseConfig);
const getDB = getDatabase(app);
// const storage = getStorage(app);
const getDbRefAdminProducts = child(
  ref(getDB),
  "ASSIGNMENT_PD06987/Admin/Products"
);
const getDbRefAdminCategories = child(
  ref(getDB),
  "ASSIGNMENT_PD06987/Admin/Categories"
);
// var productPath = "ASSIGNMENT_PD06987/Admin/Products";

const notyf = new Notyf({
  position: {
    x: "right",
    y: "top",
  },
});
notyf.success({
  message: `Please waiting for loading done !
            ^_^  `,
  duration: 3000,
  icon: false,
});

// --------------------create tbody-----------------------
var stdNo = 0;
var productList = document.getElementById("productList");
var selectList = document.getElementById("selectCatePro");
const addItemToTable = (
  namePro,
  imagePro,
  categoryPro,
  pricePro,
  desPro,
  keyPro,
  
) => { // keyCates, nameCates
  let trow = document.createElement("tr");
  let td1 = document.createElement("td"); // id
  let td2 = document.createElement("td"); // name
  let td3 = document.createElement("td"); // image
  let td4 = document.createElement("td"); // category
  let td5 = document.createElement("td"); // price
  let td6 = document.createElement("td"); // description
  let td7 = document.createElement("td"); // action ( delete / update)

  // thêm class boostrap
  trow.className = "pl-10px w100";
  trow.dataset.id = keyPro;
  td1.innerText = ++stdNo; // id
  td1.className = "col-1";
  td2.innerText = namePro; // name
  td2.className = "col-1";
  td3.innerHTML =
    // image
    ` <img class=" rounded-3 bcdm object-fit-contain" src="${imagePro}" alt="">  `;
  td3.className = "col-2";
  td4.innerText = categoryPro; // category
  td4.className = "col-2 col-2 h100 w100  m0";
  td5.innerText = pricePro + " $"; // price
  td5.className = "col-1";
  td6.innerText = desPro; // description
  td6.className = "col-2 text-center";
  td7.className =
    "col-12 d-flex justify-content-around w100 h100 align-item-center"; // action ( delete / update)
  td7.innerHTML = `
    <button type="button" class="btn btn-outline-info w40 btn-update " data-toggle="collapse"
    data-target="#multiCollapseExample2" aria-expanded="false"
    aria-controls="multiCollapseExample2">Sửa</button>
    <button type="button" class="btn btn-outline-danger w40 btn-remove">Xóa</button>
    `;

  // When have many categories
  // let keyCategories = [];
  // keyCategories = keyCates;
  // if (keyCategories.length < 1){
  //   return;
  // } else if (keyCategories.length == 1){
  //   let opt  = document.createElement("option");
  //   opt.dataset.id = keyCategories[0];
  //   opt = desPro;
  //   opt.value = desPro;
  //   opt.className = "bg-light rounded-3";
  //   selectList.appendChild(opt);
  // if (keyCates.length >= 1) {
  //   let opt = []; 
  //   for (let index = 0; index < keyCates.length; index++) {
  //     const keyCate = keyCates[index]; 
  //     const nameCate = nameCates[index];
  //     opt[index] = document.createElement("opt[index]ion");
  //     opt[index].dataset.id = keyCate;
  //     opt[index] = nameCate;
  //     opt[index].value = nameCate;
  //     opt[index].className = "bg-light rounded-3";
  //     selectList.appendChild(opt[index]);
  //   }
  // }

  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  trow.appendChild(td6);
  trow.appendChild(td7);

  productList.appendChild(trow);
};

// -------------------start get datas from firebase-------------- 

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const productsRef = database.ref("/ASSIGNMENT_PD06987/Admin/Products");
//                    end get datas from firebase

// ---------------- start save new product -------------------------
// document.getElementById('btnSubmit').onsubmit = function() {
//     // Xử lý dữ liệu biểu mẫu
//     return false; // Ngăn chặn gửi biểu mẫu
// };
document.querySelector("#btnSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    var namePro = getElementVal("namePro");
    var imagePro = getElementVal("imagePro");
    var inputCatePro = getElementVal("inputCatePro");
    var selectCatePro = getElementVal("selectCatePro");
    var pricePro = getElementVal("pricePro");
    var desPro = getElementVal("desPro");
    var catePro;
    //const keyCates = [];
    if (  namePro == "" || imagePro == "" || (inputCatePro === "" && selectCatePro === "") || (inputCatePro && selectCatePro) || pricePro == "" || desPro == "" ) {
      // confirm(`You have to fill enough infomation of product ! `);
      notyf.error("Add new product not valid !");
    } else { catePro = selectCatePro == "" ? inputCatePro : selectCatePro;
      if (!catePro) {  return; }
      const confirmationMessage = `Do you want to save Product:
        Name is: ${namePro} 
        Price is: ${pricePro} 
        Src of image: ${imagePro}
        Category : ${catePro}
        Description is: ${desPro}`;

      if (confirm(confirmationMessage)) {
        // const cateFirebaseKeys = [];              //  // get keyCategory to match with value ipnut
        // returnCategoryKeys().then( cateFirebaseKey => {  cateFirebaseKeys.push(...cateFirebaseKey); } );

        //const cateProInput = catePro;       // Lấy nameCate từ Input

        // getDbRefAdminCategories.once("value") .then( snapshot => { // Lấy tất cả các nameCate từ categoriesData
        //   const categoriesData = snapshot.val();
        //   if (categoriesData) {  
        //     const nameCatesFirebase = Object.values(categoriesData).map(cate => cate.nameCate);
           
        //     for (let index = 0; index < nameCatesFirebase.length; index++) {
        //       if( cateProInput == nameCatesFirebase[index] ){
        //         keyCates.push(cateFirebaseKeys[index]);
        //       } }      
        //   }})
        saveFirebaseProducts(namePro, imagePro, catePro, pricePro, desPro); // , keyCates
        clearInputs();
        notyf.success("Add new product successfully !");
        //console.log(keyCates);
        catePro = null;           // //  reset array
        //keyCates.length = 0
      }
      
    }
    
  });

const saveFirebaseProducts = (namePro, imagePro, catePro, pricePro, desPro) => {
  var newProductTrForm = productsRef.push();
  newProductTrForm.set({
    namePro: namePro,
    imagePro: imagePro,
    catePro: catePro,
    pricePro: pricePro,
    desPro: desPro,
  });
};

//                   end save new product

// ------------------ start  update product-----------------------
const updateKeyProducts = () => {
  const classTarget = "btn-update";
  const targetID = [];
  const handleClicked = document.getElementsByClassName(`${classTarget}`);
  for (let i = 0; i < handleClicked.length; i++) {
    handleClicked[i].addEventListener("click", function (e) {
      console.log('Button with class "btn-update" is clicked');
      // const IDclickeds = [];
      targetID.splice(0, targetID.length);
      const clickedButton = document.getElementsByClassName(`${classTarget}`);
      const clickedTrId = clickedButton[i].parentNode.parentNode.dataset.id;
      targetID.push(clickedTrId);
      console.log(targetID);
      returnProductKeys()
        .then((productKeys) => {
          // check key valid ?
          productKeys.forEach((element) => {
            if (element == targetID) {
              // update
              updateForm(targetID);
              // updateForm(element);
              // console.log(element);
            }
          });
        })
        .catch((error) => {
          // console.error("Lỗi:", error);
          notyf.error(`Has something wrong: ${error}`);
        });
    });
  }
};
function updateForm(keyProduct) {
  const keyPro = keyProduct;
  // console.log(keyPro);

  document
    .getElementById("updateForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Ngăn form gửi lại trang
      const updateNamePro = getElementVal("updateNamePro");
      const updateImagePro = getElementVal("updateImagePro");
      let updateCatePro;
      const inputUpCatePro = getElementVal("inputUpCatePro");
      const selectUpCatePro = getElementVal("selectUpCatePro");
      const updatePricePro = getElementVal("updatePricePro");
      const updateDesPro = getElementVal("updateDesPro");
      // console.log(updateNamePro, updatePricePro, updateDesPro);
      if (
        updateNamePro === "" ||
        updateImagePro === "" ||
        (inputUpCatePro === "" && selectUpCatePro === "") ||
        (inputUpCatePro && selectUpCatePro) ||
        updatePricePro === "" ||
        updateNamePro === ""
      ) {
        notyf.error("You updated not valid !");
      } else {
        updateCatePro =
          selectUpCatePro == "" ? inputUpCatePro : selectUpCatePro;
        // if (!updateCatePro) {
        //   return;
        // }
        const confirmationMessage = `Do you want to update Product:
          Name is: ${updateNamePro} 
          Price is: ${updatePricePro} 
          Src of image: ${updateImagePro}
          Category : ${updateCatePro}
          Description is: ${updateDesPro}`;
        if (confirm(confirmationMessage)) {
          updateFirebaseProducts(
            updateNamePro,
            updateImagePro,
            updateCatePro,
            updatePricePro,
            updateDesPro,
            keyPro
          );
          clearInputs();
          notyf.success("Add new product successfully !");
        }
      }
    });
}
const updateFirebaseProducts = (
  updateNamePro,
  updateImagePro,
  updateCatePro,
  updatePricePro,
  updateDesPro,
  keyUpdatedPro
) => {
  const productUpdateRef = database.ref(
    `/ASSIGNMENT_PD06987/Admin/Products/${keyUpdatedPro}`
  );
  const newUpdateTrForm = {
    namePro: updateNamePro,
    imagePro: updateImagePro,
    catePro: updateCatePro,
    pricePro: updatePricePro,
    desPro: updateDesPro,
  };
  productUpdateRef
    .update(newUpdateTrForm)
    .then(() => {
      // console.log(`Cập nhật sản phẩm thành công`);
      notyf.success("You updated successful !");
      clearInputs();
    })
    .catch((error) => {
      notyf.error(`You updated failed  ! -- ${error}`);
      // console.error(`Lỗi khi cập nhật sản phẩm: ${error.message}`);
    });
};
//                     end update product

// ------------------ start remove product ---------------------
const removeFirebaseProducts = () => {
  const classTarget = "btn-remove";
  const targetID = [];
  const handleClickeds = document.getElementsByClassName(`${classTarget}`);
  for (let i = 0; i < handleClickeds.length; i++) {
    handleClickeds[i].addEventListener("click", function (e) {
      console.log('Button with class "btn-remove" is clicked');
      // const IDclickeds = [];
      targetID.splice(0, targetID.length);
      const clickedButton = document.getElementsByClassName(`${classTarget}`);
      const clickedTrId = clickedButton[i].parentNode.parentNode.dataset.id;
      targetID.push(clickedTrId);
      console.log(targetID);
      returnProductKeys()
        .then((productKeys) => {
          // check key valid ?
          productKeys.forEach((element) => {
            if (element == targetID) {
              // update
              if (confirm("Do you really want to remove this Product ?")) {
                removeByKeyProducts(targetID);
              }
            }
          });
        })
        .catch((error) => {
          console.error("Lỗi:", error);
          notyf.error(`Something is wrong : ${error}`);
        });
    });
  }
};
const removeByKeyProducts = (keyPro) => {
  const key = keyPro;
  const productUpdateRef = database.ref("ASSIGNMENT_PD06987/Admin/Products");
  productUpdateRef
    .child(`${key}`)
    .remove()
    .then(() => {
      const removeProductTr = document.querySelector(`[data-id="${key}"]`)
        .parentNode.parentNode;
      try {
        if (removeProductTr.remove()) {
          // console.log(`Sản phẩm đã được xóa thành công.`);
          notyf.success("Product remove. Click here to continue");
        }
      } catch (error) {
        console.error(`Không thể xóa sản phẩm: ${error.message}`);
      }
    })
    .catch((error) => {
      console.error(`Lỗi khi xóa sản phẩm:` + error);
    });
};
//                    end remove product

// ---------------   start function item  ------------------------
const clearInputs = () => {
  getElementVal("namePro") = "";
  getElementVal("imagePro") = "";
  getElementVal("inputCatePro") = "";
  getElementVal("pricePro") = "";
  getElementVal("desPro") = "";

  getElementVal("updateNamePro") = "";
  getElementVal("updateImagePro") = "";
  getElementVal("inputUpCatePro") = "";
  getElementVal("updatePricePro") = "";
  getElementVal("updateDesPro") = "";
};
const getElementVal = (id) => {
  return document.getElementById(id).value;
};

// ---------------- start get all keys, categories on firebase -------------
const returnProductKeys = async () => {
  try {
    const snapshot = await get(getDbRefAdminProducts);

    if (snapshot.exists()) {
      const items = snapshot.val();
      const itemKeys = Object.keys(items);

      // Tạo một mảng Promises để lấy các key
      const keyPromises = itemKeys.map(async (key) => {
        return key;
      });

      // Sử dụng Promise.all để đợi cho tất cả Promises hoàn thành
      const productKeys = await Promise.all(keyPromises);
      return productKeys;
    }
    return [];
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

// const returnCategoryKeys = async () => {
//   try {
//     const snapshot = await get(getDbRefAdminCategories);

//     if (snapshot.exists()) {
//       const items = snapshot.val();
//       const itemKeys = Object.keys(items);

//       // Tạo một mảng Promises để lấy các key
//       const keyPromises = itemKeys.map(async (key) => {
//         return key;
//       });

//       // Sử dụng Promise.all để đợi cho tất cả Promises hoàn thành
//       const categoryKeys = await Promise.all(keyPromises);
//       return categoryKeys;
//     }
//     return [];
//   } catch (error) {
//     console.error("Error:", error);
//     return [];
//   }
// };

// ---------------- end get all categories on firebase -------------

//                     end function item
// const keyCategories = [];
// if(keyCategories == ""){
//   returnCategoryKeys().then(categoryKeys => {
//     keyCategories.push(categoryKeys);
//   })
// }
// const aaa = keyCategories;
// console.log(aaa)


// ================= Add all products from firebase realtime================
const addAllItemsToTable = (theProducts) => {
  stdNo = 0;
  productList.innerHTML = "";
  // onValue(getDbRefAdminCategories, (snapshot) => {    // get array nameCategories
  //   const cateFirebases = [];
  //   const cateFirebaseKeys = [];
  //   // const optionKeys = [];
  //   // const optionValues = [];
  //   try {
  //     if (snapshot.exists()){
  //       snapshot.forEach((childSnapshot) => {
  //         cateFirebases.push(childSnapshot.val()); 
  //       }) 
  //       cateFirebaseKeys.push( Object.keys(snapshot.val()) );  // get category names        
  //     }  
  //   } catch (error) {
  //     notyf.error("Something was wrong!");
  //     console.log(error);
  //   } // console.log(cateFirebases[i]["nameCate"]);      console.log(cateFirebaseKeys[0][i]);

    const productPromises = theProducts.map((product, index) => {
     // const keyCategory = [];
    //   let i = 0;
    //   cateFirebases.forEach(cateFirebase => {
    //     if(cateFirebase["nameCate"] == product.catePro){
    //       keyCategory.push( cateFirebaseKeys[0][i] );
    //       return;
    //     } 
    //  });
      // for (let i = 0; i < cateFirebases.length; i++) {
      //   if (cateFirebases[i]["nameCate"] == product.catePro ){
      //     keyCategory.push(cateFirebaseKeys[0][i]);
      //     nameCategory.push(cateFirebases[i]["nameCate"]);
      //     //return keyCategory, nameCategory ;
      //   }
      // } 
      //console.log(keyCategory); console.log(nameCategory);
      return returnProductKeys().then((productKeys) => {
       // console.log(cateFirebases);     console.log(cateFirebaseKeys[0]);
        const keyPro = productKeys[index]; // console.log(keyCategories[index]);

        const productAddTable = {
          nameProduct: product.namePro,
          imageProduct: product.imagePro,
          categoryProduct: product.catePro,
          priceProduct: product.pricePro,
          desProduct: product.desPro,
          keyProduct: keyPro,
        ////  keyCategory: keyCategory, // data-id of <option></option>
          //nameCategory: nameCategory , // value of <option></option>
        }; 
        return productAddTable;
      });
    });
   // console.log(productPromises)
    Promise.all(productPromises)
      .then((productHasKeys) => {
        console.log(productHasKeys);
        // Xử lý mảng productHasKeys ở đây
        productHasKeys.forEach((e) => {
          console.log(e);
          addItemToTable(
            e["nameProduct"],
            e["imageProduct"],
            e["categoryProduct"],
            e["priceProduct"],
            e["desProduct"],
            e["keyProduct"],
           // e["keyCategory"],
            //e["nameCategory"], // value of <option></option>
          );
        });
        // places excute function
        removeFirebaseProducts();
        updateKeyProducts();
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  //}); // console.log(theProducts);


};
//  ------------- load page -------------------
const getAllDataOnce = () => {
  onValue(getDbRefAdminProducts, (snapshot) => {
    const productList = document.getElementById("listPro");
    const products = [];
    //const categories = [];
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        products.push(childSnapshot.val());
      });
      if (products.length > 0) {
        // onValue(getDbRefAdminProducts, (snapshot) => {

        // if (snapshot.exists()) {
        //   snapshot.forEach((childSnapshot) => {
        //     categories.push(childSnapshot.val());
        //     });
        // }
        // });
        addAllItemsToTable(products); //, categories
        // getTrIdclassClicked("btn-update");
      }
    } else {
      productList.style.position = "relative";
      let pleaseAdd = document.createElement("p");
      pleaseAdd.className = "bcdm";
      pleaseAdd.style.position = "absolute";
      pleaseAdd.style.left = "35%";
      pleaseAdd.style.width = "300px";
      pleaseAdd.style.margin = "50px 0";
      pleaseAdd.style.textAlign = "center";
      pleaseAdd.innerText = `Please add new product`;
      productList.appendChild(pleaseAdd);
    }

    // console.log(categories);
    console.log(products);
  });
};
// /////////////////////////////////////////////////////
getAllDataOnce();
