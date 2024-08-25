const form = document.querySelector("#form")
const usernameinput = document.querySelector("#username")
const passwordinput = document.querySelector("#password")
const passwordvalidationinput = document.querySelector("#passwordvalidation")
const agreeinput = document.querySelector("#agree")
const errorContainer = document.querySelector('.errors')
const errorList = document.querySelector('.error-list')


//code for rendering page

const formContaier = document.querySelector(".formcontainer")
const previousPage = document.querySelector(".nextpage")

form.addEventListener("submit",e=>{
    const errorMesseges = []

    clearerror()

    if(usernameinput.value.length < 6){
        errorMesseges.push("Username must have length more than 6 value")
    }
    if(passwordinput.value.length < 10){
        errorMesseges.push("password must be of 10 digits")
    }

    if(passwordinput.value != passwordvalidationinput.value){
        errorMesseges.push("password must be same")
    }


    if( !agreeinput.checked ){
        errorMesseges.push("You must accept the terms!")
    }

    
    if(errorMesseges.length >0){
        showerror(errorMesseges)
    }

    if(errorMesseges.length <= 0){
    document.getElementById('formcontainer').classList.add('nextpage')
    document.getElementById('html-linker').classList.remove('nextpage')
    }
    e.preventDefault()


})

function clearerror(){

    while(errorList.children[0] != null){
        errorList.removeChild(errorList.children[0])
    }

    errorContainer.classList.remove("show")



}

function showerror(errorMesseges){

    errorMesseges.forEach(message=>{
        const li = document.createElement('li')
        li.innerText = message
        errorList.appendChild(li)

    })
    errorContainer.classList.add("show")

}


// code to acsess the previous page from current page 

// document.getElementById('return-link').addEventListener('click', function() {
//     document.getElementById('form-container').classList.remove('hidden');
//     document.getElementById('thank-you-container').classList.add('hidden');
//     document.getElementById('myForm').reset();
