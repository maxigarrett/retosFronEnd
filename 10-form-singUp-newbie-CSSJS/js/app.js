const formElement=document.getElementById('form');
//inputs
const firstNameElement=formElement['firstName'];
const lasttNameElement=formElement['lastName'];
const emailElement=formElement['email'];
const passwordElement=formElement['pasword'];

//funcion donde captura el id del div de llos input y pasa el mensaje
const displayFieldError=(fieldId,errorMessage)=>{
    //como voy a utilizar muchas veces document.getElementById(fieldId) lo encierro en una variable
    const fieldElement=document.getElementById(fieldId);
    fieldElement.classList.add('error');
    //si el dataset tiene varios guiones js borra los guines y lo convierte a camelCase en este caso solo tiene el nombre error
    fieldElement.dataset.error=errorMessage;
}

const hideFieldError=(fieldId)=>{
   document.getElementById(fieldId).classList.remove('error')
}

//capturamos el valor de los input
const ValidateForm=(e)=>{
    e.preventDefault();
    const regEx= /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const firstName=firstNameElement.value.trim();
    const lasttName=lasttNameElement.value.trim();
    const email=emailElement.value.trim();
    const password=passwordElement.value.trim();

    if(firstName===''){
        //los mensajes de error en realidad viene de un JASON para poder tener acceso a traducciones,etc
        displayFieldError('first-name-field','first name cannot by empty');
    }else{
        hideFieldError('first-name-field')
    }
    if(lasttName===''){
        displayFieldError('last-name-field','Last name cannot be empty')
    }else{
        hideFieldError('last-name-field')
    }
    if(!regEx.test(email)){
        displayFieldError('email-field','Look like this is not an email')
    }else{
        hideFieldError('email-field')  
    }
    if(password===''){
        displayFieldError('password-field','Password cannot by empty')
    }else{
        hideFieldError('password-field')
    }
    
}

formElement.addEventListener('submit',ValidateForm);
