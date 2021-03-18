const slideArrow=document.getElementById('slide-arrow');
const cards=document.querySelectorAll('.card')
const images=document.querySelectorAll('.card__image')
console.log(images)
slideArrow.addEventListener('click',(e)=>{
    arrow(e)
})


const arrow=(e)=>{
    if(e.target.id=='left'){
        console.log(e.target.id)
        moveLeft();
    }
    if(e.target.id=='rigth'){
        console.log(e.target.id)
        moveRight();
    }
}

window.addEventListener('keyup',(e)=>{
    console.log(e.key)
    if(e.key==='ArrowLeft'){
        moveLeft()
    }
    if(e.key==='ArrowRight'){
        moveRight()
    }
})
const moveLeft=()=>{
    //movemos con opacidad y traslate las imagenes
    cards[0].classList.remove('card--show')
    cards[1].classList.add('card--show')
    //le damos uns scale a las imagenes
    images[0].classList.remove('card__image--show')
    images[1].classList.add('card__image--show')
}
const moveRight=()=>{
    cards[0].classList.add('card--show')
    cards[1].classList.remove('card--show')
    images[0].classList.add('card__image--show')
    images[1].classList.remove('card__image--show')
}