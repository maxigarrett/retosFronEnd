const formElement=document.getElementById('form');
const emailRegExp=/^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const textElementError=document.getElementById('error-message')

const formSubmit=(e)=>{
    const emailValue=formElement.email.value;

    const emailIsEmpty=emailValue.trim()==='';
    const emailIsNotValid=!emailRegExp.test(emailValue);

    if(emailIsEmpty || emailIsNotValid){
        e.preventDefault();
        textElementError.classList.add('show__error')
        if(emailIsEmpty){
            return textElementError.textContent='email Empty';
        }
        if(emailIsNotValid){
            return textElementError.textContent='email is Not Valid'
        }
    }
}

formElement.addEventListener('submit',formSubmit);
formElement.addEventListener('focusin',()=>{
    textElementError.classList.remove('show__error')
})
