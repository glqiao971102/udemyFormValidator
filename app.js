const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// Show error

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerHTML = message
}

// email validate

function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email.value.trim())){
        showSuccess(input)
    }else{
        showError(input, `Email is not valid`)
    }
}

// Show success

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

// check require (more clean)

function checkRequire(inputArr){
    inputArr.forEach( input => {
        if(input.value.trim() === ''){
            showError(input, `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} Cannot be blank`)
        }else{
            showSuccess(input)
        }
    })
}

// Check length

function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${input.id} must be at least ${min} character`)
    }else if(input.value.length > max){
        showError(input, `${input.id} must be less than ${max} character`)
    }else{
        showSuccess(input)
    }
}

// check Password match

function checkPassword(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, `Password is not match`)
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkRequire([username, email, password,password2])
    checkLength(username,3,15)
    checkLength(password,6,20)
    checkEmail(email)
    checkPassword(password,password2)

})