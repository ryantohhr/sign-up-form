const submitBtn = document.querySelector(".create");
const pwdSet = document.querySelector("#pwdSet");
const pwdCfm = document.querySelector("#pwdCfm");
const pwdMsg = document.createElement("div");
const pwdDiv = document.querySelector("#pwdDiv");

function validatePwd(pwd1, pwd2) {
    console.log(pwdSet.value);
    console.log(pwdCfm.value);
    console.log(pwd1);
    console.log(pwd2);
    if (pwd1 == pwd2 && pwd1 !== "") {
        return true;
    }
    else {
        return false;
    }
}

window.addEventListener('keyup', () => {
    let isValid = validatePwd(pwdSet.value, pwdCfm.value);
    if (!isValid) {
        pwdMsg.textContent = "* Passwords do not match";
        pwdMsg.style.cssText = "color: rgb(219, 0, 0); letter-spacing: 0";
        pwdDiv.appendChild(pwdMsg);
        
    }
    else {
        pwdDiv.removeChild(pwdMsg);
    }
    console.log(isValid);
})