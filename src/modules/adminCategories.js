import "../../src/style.css";
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
  set
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
const getDbRefAdminCategories = child(ref(getDB), "ASSIGNMENT_PD06987/Admin/Categories");


const notyf = new Notyf({
  position: {
    x: 'right',
    y: 'top',
  },
});
notyf.success(`Waiting for loading done  
                    ^_^ `)

const returnCategoryKeys = async () => {
  try {
    const snapshot = await get(getDbRefAdminCategories);

    if (snapshot.exists()) {
      const items = snapshot.val();
      const itemKeys = Object.keys(items);

      // Tạo một mảng Promises để lấy các key
      const keyCateMises = itemKeys.map(async (key) => {
        return key;
      });

      // Sử dụng Promise.all để đợi cho tất cả Promises hoàn thành
      const categoryKeys = await Promise.all(keyCateMises);

      return categoryKeys;
    }
    return [];
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};


// --------------------create tbody-----------------------
var stdNo = 0;
var categoryLists = document.getElementById("categoryLists"); // , keyCate
const addItemToTable = (nameCate, desCate, keyCate) => {
  let trow = document.createElement("tr");
  let td1 = document.createElement("td"); // id
  let td2 = document.createElement("td"); // name cate
  let td3 = document.createElement("td"); // description
  let td4 = document.createElement("td"); // action ( delete / update)


  // thêm class boostrap
  trow.className = "pl-10px w100";
  trow.dataset.id = keyCate;
  td1.innerText = ++stdNo; // id
  td1.className = "col-1";
  td2.innerText = nameCate; // name
  td2.className = "col-3";
  td3.innerHTML = desCate;  // description
  td3.className = "col-5";
  td4.className = "col-12 d-flex justify-content-around w100 h100 align-item-center"; // action
  td4.innerHTML = `
  <button type="button" class="btn btn-outline-info w40 btn-update " data-toggle="collapse"
  data-target="#multiCollapseExample2" aria-expanded="false"
  aria-controls="multiCollapseExample2">Sửa</button>
  <button type="button" class="btn btn-outline-danger w40 btn-remove">Xóa</button>
  `;
  // td5.className =
  //   "col-12 d-flex justify-content-around w100 h100 align-item-center";

  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);

  categoryLists.appendChild(trow);
};



// -------------------start get datas from firebase--------------
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const categoriesRef = database.ref("/ASSIGNMENT_PD06987/Admin/Categories");
//                    end get datas from firebase

// ---------------- start save new category -------------------------
// document.getElementById('btnSubmit').onsubmit = function() {
//     // Xử lý dữ liệu biểu mẫu
//     return false; // Ngăn chặn gửi biểu mẫu
// };
document.querySelector("#btnSubmit").addEventListener("click", function(event){
  event.preventDefault();
  var nameCate = getElementVal("nameCate");
  var desCate = getElementVal("desCate");

  if (nameCate == ""  ||   desCate ==""){
        // confirm(`You have to fill enough infomation of category ! `);
        notyf.error("Add new category not valid !");
    } else {
        confirm(`Do you want to save Category:
                    Name is: ${nameCate} 
                    Description is: ${desCate}
        `);
        saveFirebaseCategories(nameCate, desCate);
        clearInputs();
        notyf.success("Add new category successfully !");
        
    }
    // submitForm();
}) ;

const saveFirebaseCategories = (nameCate, desCate) => {
  var newCategoryTrForm = categoriesRef.push();
  newCategoryTrForm.set({
    nameCate: nameCate,
    desCate: desCate,
  });
};
//                   end save new category 

// ------------------ start  add image category-----------------------
//                   end  add image category-----------------------

// ------------------ start  update category-----------------------
const updateKeyCategories = () => {
    const classTarget = "btn-update";
    const targetID = [];
    const handleClicked = document.getElementsByClassName(`${classTarget}`); 
    for (let i = 0; i < handleClicked.length; i++) {
        handleClicked[i].addEventListener('click', function(e) {
            // console.log('Button with class "btn-update" is clicked');
            // const IDclickeds = [];
            targetID.splice(0, targetID.length);
            const clickedButton = document.getElementsByClassName(`${classTarget}`);  
            const clickedTrId = clickedButton[i].parentNode.parentNode.dataset.id;
            targetID.push(clickedTrId);
            console.log(targetID);
            returnCategoryKeys().then(categoryKeys => { // check key valid ?
                categoryKeys.forEach(element => {
                    if(element == targetID){ // update
                        updateForm(targetID);
                        // updateForm(element);
                        // console.log(element);
                    }
                });
            }).catch(error => {
                // console.error("Lỗi:", error);
                notyf.error(`Has something wrong: ${error}`);
            });
        });
    }
}
function updateForm(key) { 
    const keyDemo = key;  
    // console.log(keyDemo); 

    document.getElementById('updateForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Ngăn form gửi lại trang
      const updateNameCate = document.getElementById('updateNameCate').value;
      const updateDesCate = document.getElementById('updateDesCate').value;
      // console.log(updateNameCate, updatepriceCat, updateDesCate);
      if(updateNameCate === "" || updateDesCate === "" ){
        notyf.error("Your updated not valid !");
      } else {
        updateFirebaseCategories(updateNameCate, updateDesCate, keyDemo );
      }
      clearInputs();
    });
} 
  const updateFirebaseCategories = (updateNameCate, updateDesCate, keyUpdatedCate) => {
    const categoryUpdateRef = database.ref(`/ASSIGNMENT_PD06987/Admin/Categories/${keyUpdatedCate}`);
    const newUpdateTrForm = {
        nameCate: updateNameCate,
        desCate: updateDesCate,
      };
    categoryUpdateRef.update(newUpdateTrForm)
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

//                     end update category

// ------------------ start remove category ---------------------
const removeFirebaseCategories = () => {
  const classTarget = "btn-remove";
  const targetID = [];
  const handleClickeds = document.getElementsByClassName(`${classTarget}`); 
  for (let i = 0; i < handleClickeds.length; i++) {
      handleClickeds[i].addEventListener('click', function(e) {
          console.log('Button with class "btn-remove" is clicked');
          // const IDclickeds = [];
          targetID.splice(0, targetID.length);
          const clickedButton = document.getElementsByClassName(`${classTarget}`);  
          const clickedTrId = clickedButton[i].parentNode.parentNode.dataset.id;
          targetID.push(clickedTrId);
        //   console.log(targetID);
          returnCategoryKeys().then(categoryKeys => { // check key valid ?
              categoryKeys.forEach(element => {
                  if(element == targetID){ // update
                    if( confirm("Do you really want to remove this Category ?") ){
                      removeByKeyCategories(targetID);
                      
                    }
                  }
              });
          }).catch(error => {
              console.error("Lỗi:", error);
              notyf.error(`Something is wrong : ${error}`);
          });
      });
  }
}
const removeByKeyCategories = (keyCate) => {
  const key = keyCate;
  const categoryUpdateRef = database.ref("ASSIGNMENT_PD06987/Admin/Categories");
  categoryUpdateRef.child(`${key}`).remove()
  .then(() => {
      const removecategoryTr = document.querySelector(`[data-id="${key}"]`).parentNode.parentNode;
      try {
        if (removecategoryTr.remove()) {
          // console.log(`Sản phẩm đã được xóa thành công.`);
          notyf.success('Category remove. Click here to continue');
        }
      } catch (error) {
        console.error(`Không thể xóa Category: ${error.message}`);
      }
    })
    .catch((error) => {
      console.error(`Lỗi khi xóa Category:` + error);
    });
};
//                    end remove category

// ---------------   start function item  ------------------------
const clearInputs = () => {
  document.getElementById("nameCate").value = "";
  document.getElementById("desCate").value = "";

  document.getElementById("updateNameCate").value =  "";
  document.getElementById("updateDesCate").value = ""; 
};
const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
//                     end function item  

// ================= Add all categories from firebase realtime================
const addAllItemsToTable = (theCategories) => {
  stdNo = 0;
  categoryLists.innerHTML = "";
  const categoryPromises = theCategories.map((category, index) => {
    return returnCategoryKeys().then((categoryKeys) => {
      const keyCategory = categoryKeys[index];
      const categoryAddTable = {
        nameCategory: category.nameCate ,
        desCategory: category.desCate ,
        keyCategory: keyCategory ,
      };
      return categoryAddTable;
    });
  });
  Promise.all(categoryPromises)
    .then((categoryHasKeys) => {
      // Xử lý mảng categoryHasKeys ở đây
      categoryHasKeys.forEach((e) => {
        addItemToTable(
          e["nameCategory"],
          e["desCategory"],
          e["keyCategory"]
        );
      });
      // places excute function 
          removeFirebaseCategories();
          updateKeyCategories();
          
    })
    .catch((error) => {
      console.error("Error:", error);
    });
    
};
//  ------------- load page -------------------
const getAllDataOnce = () => {
  onValue(getDbRefAdminCategories, (snapshot) => {
    const categoryLists = document.getElementById("listCate");
    const categories = [];
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        categories.push(childSnapshot.val());
      });
      if (categories.length > 0) {
        addAllItemsToTable(categories);
        // getTrIdclassClicked("btn-update");
      }
    } else {
      categoryLists.style.position = 'relative';
      let pleaseAdd = document.createElement("p");
      pleaseAdd.className = 'bcdm';
      pleaseAdd.style.position = 'absolute';
      pleaseAdd.style.left = '35%';
      pleaseAdd.style.width = '300px';
      pleaseAdd.style.margin = '50px 0';
      pleaseAdd.style.textAlign = 'center';
      pleaseAdd.innerText = `Please add new category`;
      categoryLists.appendChild(pleaseAdd);
    }
    
  });
};
// /////////////////////////////////////////////////////
getAllDataOnce();


