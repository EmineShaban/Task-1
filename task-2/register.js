
document.getElementById('registerButton').addEventListener('click', function e(event) {
    event.preventDefault()
    let firstName = document.getElementById('firstName')
    let lastName = document.getElementById('lastName')
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let confirmPassword = document.getElementById('confirmPassword')

    let obj = {}

    let nameRGEX = /[a-zA-Z]/g
    let firstNameResult = nameRGEX.test(firstName.value)
    let lastNameResult = nameRGEX.test(lastName.value);
    let passwordRGEX = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{6,25}$/gm
    let passwordResult = passwordRGEX.test(password.value);
    let emailRGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    let emailResult = emailRGEX.test(email.value);


    if (firstName.value.length <= 2 || firstName.value.length >= 20) {
        
        firstName.classList.add("redBorder")
        alert('First name must be at least 2 characters and max 20 characters!')
        return
    } else if (firstNameResult == false) {
        firstName.classList.add("redBorder")
        alert('First name must contain only latin characters!')
        return

    } else {
        obj.firstName = firstName.value
        firstName.classList.remove('redBorder')
    }


    if (lastName.value.length <= 2 || lastName.value.length >= 20) {        
        lastName.classList.add("redBorder")
        alert('Last name must be at least 2 characters and max 20 characters')
        return

    } else if (lastNameResult == false) {
        lastName.classList.add("redBorder")
        alert('Last name must contain only latin characters!')
        return

    } else {        
        obj.lastName = lastName.value
        lastName.classList.remove('redBorder')
    }


    if (emailResult == false) {

        email.classList.add("redBorder")
        alert('Email is invalid!')
        return

    } else {

        obj.email = email.value
        email.classList.remove('redBorder')
    }

    if (password.value.length <= 6 || password.value.length >= 25 ) {
        password.classList.add("redBorder")
        alert('Password must be at least 6 characters and max 25 characters!')
        return

    } else if (passwordResult == false) {

        password.classList.add("redBorder")
        alert('Password must contain at least 1 latin character and 1 number!')
        return

    } else {
        obj.password = password.value
        password.classList.remove('redBorder')
    }

    if (password.value != confirmPassword.value) {
        password.classList.add("redBorder")
        confirmPassword.classList.add("redBorder")
        alert('Passwords do not match!')
        return

    } else if( password.value.length>=6 && confirmPassword.value.length>=6 && password.value == confirmPassword.value){
        obj.confirmPassword = confirmPassword.value
        password.classList.remove('redBorder')
        confirmPassword.classList.remove('redBorder')
    }
    // if need 

    // if(checkBox1 == false || checkBox2 == false){
    //     alert('Please confirm Terms and Conditions and User requirements!')
    // }
    // if (Object.keys(obj).length == 5 && checkBox1 == true || checkBox2 == true) {

    if (Object.keys(obj).length == 5) {

        console.log(obj)

        document.getElementById('register-input').style.display = 'none'
        document.getElementById('registerDiv').style.display = 'block'
        document.getElementById('registerDivP').style.display = 'block'


    }

})