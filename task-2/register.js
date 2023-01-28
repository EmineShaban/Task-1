
document.getElementById('registerButton').addEventListener('click', function e() {
    let firstName = document.getElementById('firstName')
    let lastName = document.getElementById('lastName')
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let confirmPassword = document.getElementById('confirmPassword')
console.log(firstName.value)

let obj={}

let nameRGEX = /[a-zA-Z]/g
let firstNameResult = nameRGEX.test(firstName.value);
let lastNameResult = nameRGEX.test(lastName.value);
let passwordRGEX = /([a-zA-Z]{1,})+(\d{1,})\w+/g
let passwordResult = passwordRGEX.test(password.value);


    if(firstName.value.length <= 2 || firstName.value.length >= 20 ){
        firstName.classList.add("redBorder")
        alert('First name must be at least 2 characters and max 20 characters!')
    }else if(firstNameResult == false){
        firstName.classList.add("redBorder")
        alert('First name must contain only latin characters!')
    }else{
        obj.firstName = firstName.value
        firstName.classList.remove('redBorder')
    }


    if(lastName.value.length <= 2 || lastName.value.length >= 25){
        lastName.classList.add("redBorder")
        alert('Last name must be at least 2 characters and max 20 characters and must contain only latin characters!')
    }else if(lastNameResult == false){
        lastName.classList.add("redBorder")
        alert('Last name must contain only latin characters!')
    }else{
        obj.lastName = lastName.value
        lastName.classList.remove('redBorder')
    }



    // }else if(password.value.length <= 6 || password.value.length >= 25 || passwordResult == false){
    //     console.log(passwordResult)
    //     console.log(password.value)

    //     password.classList.add("redBorder")
    //     alert('Password must be at least 6 characters and max 25 characters and must contain only latin characters and numbers!')
    // }else if(password.value !=confirmPassword.value){
    //     password.classList.add("redBorder")
    //     confirmPassword.classList.add("redBorder")
    //     alert('Password do not match!')
    // }

console.log( obj)
})