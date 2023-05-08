const form =  document.querySelector('form'),
firstName = document.querySelector('.name'),
lastName = document.querySelector('.last'),
user = document.querySelector('.user'),
email = document.querySelector('.email'),
password = document.querySelector('.firstPass'),
secondPassword = document.querySelector('.secondPass')
const inputs = document.querySelectorAll('input')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkError();
})
function checkError(){
    if(firstName.value ===""){
        errorHandling("Please write your first Name", firstName)
    }
    else if(lastName.value ===""){
        errorHandling("Please write your last Name", lastName)
    }
    else if(user.value ===""){
        errorHandling("Please write your user Name", user)
    }
    else if(email.value ===""){
        errorHandling("Please write your email", email)
    }
    else if(password.value ===""){
        errorHandling("Please write your password", password)
    }
    else if(secondPassword.value ===""){
        errorHandling("Please confirm your password", secondPassword)
    }
    else if(password.value !== secondPassword.value){
        errorHandling("Your password does not match", password)
        errorHandling("Your password does not match", secondPassword)
    }
    else{inputs.forEach((input)=> successBorder(input));
    }
}
function errorHandling(text, input){
    const parentElement = input.parentElement;
    const message = parentElement.querySelector('.error');
    message.innerText = text;
    message.classList.add("active");
    input.classList.add("errorBorder")
}
function successBorder(input){
    const parentElement = input.parentElement;
    parentElement.classList.add("greenBorder");
    const errorMessage = parentElement.querySelector(".error");
    if(errorMessage){
        errorMessage.remove()
    }
}

