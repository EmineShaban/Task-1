
document.getElementById('loginButton').addEventListener('click', function e(event) {
    event.preventDefault()
    let emailInput = document.getElementById('email')
    let passwordInput = document.getElementById('password')
    if (emailInput.value == 'hello@ab.bg' && passwordInput.value == '1234') {
        emailInput.classList.remove('redBorder')
        passwordInput.classList.remove('redBorder')

        let obj = {
            username: emailInput.value,
            password: passwordInput.value
        }
        console.log(obj)
        alert("Login is successful!");
    } else if (emailInput.value == '' && passwordInput.value == '') {
        emailInput.value = ''
        passwordInput.value = ''
        alert("Email and Password are required!");

    } else {
        emailInput.classList.add("redBorder");
        passwordInput.classList.add("redBorder");
        emailInput.value = ''
        passwordInput.value = ''
        alert("Email and Password are wrong!");

    }
})