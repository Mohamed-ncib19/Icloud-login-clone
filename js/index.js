const checkMail = document.querySelector('#check-mail');
const mailField = document.querySelector('#mail-field')
const MailInputContainer = document.querySelector('#input-container')
const passwordField = document.querySelector('#password-field');
const checkPassword = document.querySelector('#check-password');
const passwordContainer = document.querySelector('#password-container');
const passwordDiv = document.querySelector('#password');

/*add a ring to the mail div container*/
mailField.addEventListener('focus',()=>{
    MailInputContainer.classList.add('ring')
});
mailField.addEventListener('blur',()=>{
    MailInputContainer.classList.remove('ring')
});

/*add a ring to the password div container*/
passwordField.addEventListener('focus',()=>{
    passwordContainer.classList.add('ring')
   console.log("object")
});
passwordField.addEventListener('blur',()=>{
    passwordContainer.classList.remove('ring')
});


/*control the mail button*/
mailField.addEventListener('input',()=>{
    if(mailField.value === ''){
        checkMail.setAttribute('disabled','')
        }else if(mailField.value!=""){
        checkMail.classList.remove('text-gray-400')
        checkMail.classList.add('text-gray-600')
        checkMail.removeAttribute('disabled','')
        

    }else{
        checkMail.classList.remove('text-gray-600')
        checkMail.classList.add('text-gray-400')
        checkMail.setAttribute('disabled','')
        passwordDiv.classList.add('hidden')
    }
});
/*control the password button */

passwordField.addEventListener('input',()=>{
    if(passwordField.value!=""){
        checkPassword.classList.remove('text-gray-400')
        checkPassword.classList.add('text-gray-600')
        checkPassword.removeAttribute('disabled','')
        

    }else{
        checkPassword.classList.remove('text-gray-600')
        checkPassword.classList.add('text-gray-400')
        checkPassword.setAttribute('disabled','')
       
    }
});

checkMail.addEventListener('click',()=>{
    if((!checkMail.hasAttribute("disabled")) && (mailField.value!='')){
        passwordDiv.classList.remove('hidden')
    }
})


