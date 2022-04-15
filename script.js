const confirmLabel = document.getElementById('confirm-label')

const pWordInput = document.getElementById('password');
const pWordConfirmInput = document.getElementById('password-confirm');

let pWord = "";
let pWordConfirm = "";

pWordInput.onkeyup = function() {
    pWord = document.getElementById('password').value;

    if (pWordConfirm === "") {
        return;
    }
    
    if (pWord != pWordConfirm.substring(0, pWord.length)) {
        pWordConfirmInput.style.borderColor = "red";
        confirmLabel.style.color = "red";
        confirmLabel.innerHTML = "Password does not match"
    } else if (pWordConfirm === pWord) {
        pWordConfirmInput.removeAttribute("style");
        confirmLabel.removeAttribute("style");
        confirmLabel.innerHTML = "Confirm Password"
    }
}

pWordConfirmInput.onkeyup = function() {
    pWordConfirm = document.getElementById('password-confirm').value;
    
    if (pWordConfirm != pWord.substring(0, pWordConfirm.length)) {
        pWordConfirmInput.style.borderColor = "red";
        confirmLabel.style.color = "red";
        confirmLabel.innerHTML = "Password does not match"
    } else if (pWordConfirm === pWord) {
        pWordConfirmInput.removeAttribute("style");
        confirmLabel.removeAttribute("style");
        confirmLabel.innerHTML = "Confirm Password"
    }
}



