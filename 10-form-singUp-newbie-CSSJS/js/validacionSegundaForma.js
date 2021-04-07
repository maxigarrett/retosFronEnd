const formElement=document.getElementById('form');
//inputs
const firstNameElement=formElement['firstName'];
const lasttNameElement=formElement['lastName'];
const emailElement=formElement['email'];
const passwordElement=formElement['pasword'];

//validacion regExp para que no este vacio
emtyEstring=/^[a-zA-Z0-9@._]{3,}$/;

const inputElement=[
    {elementId:'first-name-field',inputDOMElement:firstNameElement,regExp:emtyEstring,errorMessage:'first name cannot by empty'},
    {elementId:'last-name-field',inputDOMElement:lasttNameElement,regExp:emtyEstring,errorMessage:'last name cannot by empty'},
    {elementId:'email-field',inputDOMElement:emailElement,regExp:emtyEstring,errorMessage:'Look like this is not an email'},
    {elementId:'password-field',inputDOMElement:passwordElement,regExp:emtyEstring,errorMessage:'Password cannot by empty'}
]

//funcion donde captura el id del div de llos input y pasa el mensaje
const displayFieldError=(fieldId,errorMessage)=>{
    const fieldElement=document.getElementById(fieldId);
    fieldElement.classList.add('error');
    fieldElement.dataset.error=errorMessage;
}

const hideFieldError=(fieldId)=>{
   document.getElementById(fieldId).classList.remove('error');
   document.getElementById(fieldId).dataset.error=null;
}


const ValidateForm=(e)=>{
    e.preventDefault();

    inputElement.forEach(input=>{
        if(!input.regExp.test(input.inputDOMElement.value)){
            displayFieldError(input.elementId,input.errorMessage);
        }else{
            hideFieldError(input.elementId);     
        }
    })
}


formElement.addEventListener('submit',ValidateForm);
formElement.addEventListener('focusin',(e)=>{
    if(e.target.tagName==='INPUT'){
        hideFieldError(e.target.parentElement.id); 
    }
})
formElement.addEventListener('focusout',(e)=>{
    if(e.target.tagName=='INPUT' & e.target.value==''){
        inputElement.forEach(input=>{
            if(input.elementId==e.target.parentElement.id){
                displayFieldError(input.elementId,input.errorMessage);
            }
        })
    }else{
        hideFieldError(e.target.parentElement.id);
    }

})

