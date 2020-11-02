let form = document.getElementById("fill-area");
let email = document.getElementById("email");


form.addEventListener("submit", e => {
    //This will prevent the page from reloading
    e.preventDefault();
    //Check if it's a valid email
    let emailValue = email.value;

    if(!validateEmail(emailValue)) {
        form.classList.add("error");
    } else {
        form.classList.remove("error");
    }
});

function validateEmail(email) {
    return re.test(String(email).toLowerCase());
}