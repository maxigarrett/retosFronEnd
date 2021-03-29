const form=document.getElementById('form');
const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const validateEmail=(email,regEx)=>{
    if(regEx.test(email.value)){
        form.classList.remove('form--show-error')
    }
    else{
        form.classList.add('form--show-error')
    }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    validateEmail(e.target.email,emailRegex)
})

form.email.addEventListener('focus',()=>form.classList.remove('form--show-error'))


