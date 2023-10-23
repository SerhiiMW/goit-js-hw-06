const form = document.querySelector(".login-form")
form.addEventListener("submit", handleSubmit)
function handleSubmit(event) {
    event.preventDefault();
    if (event.currentTarget.elements.email.value === "" || event.currentTarget.elements.password.value === "") {
    alert("Всі поля мають бути заповнені")
    } else {
        const { email, password } = event.currentTarget.elements
        const users = {
            email: email.value,
            password: password.value
        };
        console.log(users)
        event.currentTarget.reset()
    }
}


