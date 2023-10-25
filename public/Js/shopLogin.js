
const accountInput = document.getElementById("account");
const passwordInput = document.getElementById("password");

const btnSignIn = document.getElementById("btnSignIn");   


btnSignIn.addEventListener("click", () => { validFormSignIn(); clearInput()})
btnSignIn.addEventListener("keyup", (event)  => { if (event.key === "Enter") {validFormSignIn(); clearInput()} })
const validFormSignIn = ()=>{
    const account = accountInput.value;
    const password = passwordInput.value;
    // if( fullName == "" || email == "" || phoneNumber == "" || password == "" || passAgain == ""  ){
        
    //     // emailInput.classList.add('borderNotValid');
    //     // phoneNumberInput.classList.add('borderNotValid');
    //     // passwordInput.classList.add('borderNotValid');
    //     // passAgainInput.classList.add('borderNotValid');
    //     alert("Input not valid");
    //     return;
    // }
    if( account == ""){  
        accountInput.classList.add('borderNotValid');
        alert("Input empty");
    }  else{ accountInput.classList.remove('borderNotValid');  }

    if( password == ""){  
        passwordInput.classList.add('borderNotValid');
        alert("Input empty");
    }  else{ passwordInput.classList.remove('borderNotValid');  }
    
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