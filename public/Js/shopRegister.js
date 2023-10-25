
const fullNameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const phoneNumberInput = document.getElementById("phoneNumber");
const passwordInput = document.getElementById("password");
const passAgainInput = document.getElementById("passAgain");
const radioButtons = document.querySelectorAll('input[type="radio"]');
 // Biểu thức chính quy kiểm tra số điện thoại (84xxxxxxxxx)
 const phoneRegex = /(84|[3|5|7|8|9])+([0-9]{9})\b/g;
 // Biểu thức chính quy kiểm tra email
 const emailRegex =
   /^[\w-]+@((email\.com|gmail\.com|outlook\.com|icloud\.com|yahoo\.com|fpt\.edu\.vn))$/;
// Biểu thức chính quy kiểm tra password
   const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d|\W).{5,}$/;

const btnRegister = document.getElementById("btnRegister");   


btnRegister.addEventListener("click", () => { validFormRegister(); clearInput()})
btnRegister.addEventListener("keyup", (event)  => { if (event.key === "Enter") {validFormRegister(); clearInput()} })
const validFormRegister = ()=>{
    const fullName = fullNameInput.value;
    const email = emailInput.value;
    const phoneNumber = phoneNumberInput.value;
    const password = passwordInput.value;
    const passAgain = passAgainInput.value;
    // if( fullName == "" || email == "" || phoneNumber == "" || password == "" || passAgain == ""  ){
        
    //     // emailInput.classList.add('borderNotValid');
    //     // phoneNumberInput.classList.add('borderNotValid');
    //     // passwordInput.classList.add('borderNotValid');
    //     // passAgainInput.classList.add('borderNotValid');
    //     alert("Input not valid");
    //     return;
    // }
    if( fullName == ""){  
        fullNameInput.classList.add('borderNotValid');
        alert("Input empty");
    }  else{ fullNameInput.classList.remove('borderNotValid');  }

    if( email == ""){  
        emailInput.classList.add('borderNotValid');
        alert("Input empty");
    }  else{ emailInput.classList.remove('borderNotValid');  }

    if( phoneNumber == ""){  
        phoneNumberInput.classList.add('borderNotValid');
        alert("Input empty");
    }  else{ phoneNumberInput.classList.remove('borderNotValid');  }

    if( password == ""){  
        passwordInput.classList.add('borderNotValid');
        alert("Input empty");
    }  else{ passwordInput.classList.remove('borderNotValid');  }

    if( passAgain == ""){  
        passAgainInput.classList.add('borderNotValid');
        alert("Input empty");
    }  else{ passAgainInput.classList.remove('borderNotValid');  }

    if (!emailRegex.test(email)) {       // regex email
        emailInput.classList.add('borderNotValid');
        alert(
          "Vui lòng nhập địa chỉ email hợp lệ (email.com, gmail.com, outlook.com, icloud.com, yahoo.com)."
        );
        return;
    } else{
        emailInput.classList.remove('borderNotValid');
    }
    if (!phoneNumber.match(phoneRegex)) {    // regex phone numeber
        fullNameInput.classList.add('borderNotValid');
        alert("Vui lòng nhập số điện thoại hợp lệ (84xxxxxxxxx).");
        return;
      } else {
        fullNameInput.classList.remove('borderNotValid');
      }
    if (!passwordRegex.test(password)) {     // regex password
        passwordInput.classList.add('borderNotValid');
        alert("Password ít nhất 5 kí tự, có chữ hoa, chữ thường, số hoặc kí tự đặc biệt, không có khoảng trống");
        return;
    } else {
        passwordInput.classList.remove('borderNotValid');
    }
    if (passAgain !== password) {           // regex passAgain
        passAgainInput.classList.add('borderNotValid');
        alert("Password không khớp");
        return;
    } else {
        passAgainInput.classList.remove('borderNotValid');
    }
    let payed = false; // // regex gender
    radioButtons.forEach((radioButton) => {
        if (radioButton.checked) {
        const inputIdValue = radioButton.value;
        console.log(inputIdValue);
        payed = true;
        alert("form valid ^_^");
        // window.location.href = "http://127.0.0.1:49328/Ass-JS-PD06987/public/htmls/thankyou.html";
        }
    });
    if (payed == false) {
        alert("phải chọn giới tính");
        return;
    } 
}
const clearInput = ()=>{
    document.getElementsByTagName('input').value = "";
} 