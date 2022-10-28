function validatePwd() {
    let originalPassword = document.getElementById("pwd")
    let repeatPassword = document.getElementById("pwd-repeat")
    if (originalPassword.value != repeatPassword.value) {
        let label = document.getElementById("pwd-repeat-label");
        label.innerHTML = "Passwords must match"
        label.style.color = "red"
        return false;
    }
    else {
        return true;
    }

}

let btn = document.getElementById("btn");
btn.addEventListener("click",() => {
    
    if (validatePwd() == true) {
        document.getElementById("submission-form").submit()
    }


});
