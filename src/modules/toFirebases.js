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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const contactFormDB = firebase.database().ref("Customers");
document.querySelector("#btnSubmit").addEventListener("click", submitForm);

function submitForm(e) {
  e.preventDefault();
  var email = getElemantVal("email");
  var password = getElemantVal("password");
  // console.log(email);
  // console.log(password);
  saveMessages(email, password);
}

const saveMessages = (email, password) => {
  var newContacatrForm = contactFormDB.push();
  newContacatrForm.set({
    email: email,
    password: password,
  });
};

const getElemantVal = (id) => {
  return document.getElementById(id).value;
};
