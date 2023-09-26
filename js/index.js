/*Declare Constants*/
const checkMail = document.querySelector('#check-mail');
const mailField = document.querySelector('#mail-field')
const MailInputContainer = document.querySelector('#mail-container')
const passwordField = document.querySelector('#password-field');
const checkPassword = document.querySelector('#check-password');
const passwordContainer = document.querySelector('#password-container');
const passwordDiv = document.querySelector('#password');
const myForm = document.querySelector('#my-form');

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

 /*Control mail input while using it*/
    mailField.addEventListener('input',()=>{
        
        if(mailField.value === ''){
            
            checkMail.setAttribute('disabled','')
            checkMail.classList.remove('text-gray-600')
            checkMail.classList.add('text-gray-400')
            passwordDiv.classList.add('hidden');
            MailInputContainer.classList.add('rounded-xl')
            MailInputContainer.classList.remove('rounded-tl-xl')
            MailInputContainer.classList.remove('rounded-tr-xl')
    
        }else if(mailField.value!=""){
            checkMail.classList.remove('text-gray-400')
            checkMail.classList.add('text-gray-600')
            checkMail.removeAttribute('disabled','')
            
            
        }else{
            checkMail.classList.remove('text-gray-600')
            checkMail.classList.add('text-gray-400')
            checkMail.setAttribute('disabled','')
            
        }
    });

 /*Control password input while using it*/

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

//create events when the user confirms the mail value
checkMail.addEventListener('click',()=>{
    if((!checkMail.hasAttribute("disabled"))){
        passwordDiv.classList.remove('hidden')
        MailInputContainer.classList.remove('rounded-xl')
        MailInputContainer.classList.add('rounded-tl-xl')
        MailInputContainer.classList.add('rounded-tr-xl')
    }
})


myForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(('done'))

})
 
//control the popup
const openModalButton = document.getElementById('openModal');
const modal = document.getElementById('myModal');

openModalButton.addEventListener('click', () => {
    
    if(modal.classList.contains('hidden')){
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
}else{
    modal.classList.add('hidden');
    document.body.classList.add('modal-open');
}
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
});