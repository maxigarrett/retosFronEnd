const slideArrow=document.getElementById('slide-arrow');
const cards=document.querySelectorAll('.card')
const images=document.querySelectorAll('.card__image')
let currentSlide='';
slideArrow.addEventListener('click',(e)=>{
    arrow(e)
})


const arrow=(e)=>{
    if(e.target.id=='left'){
        //console.log(e.target.id)
        moveLeft();
    }
    if(e.target.id=='rigth'){
        //console.log(e.target.id)
        moveRight();
    }
}

window.addEventListener('keyup',(e)=>{
   // console.log(e.key)
    if(e.key==='ArrowLeft'){
        moveLeft()
    }
    if(e.key==='ArrowRight'){
        moveRight()
    }
})
const moveLeft=()=>{
    currentSlide='left';
    //movemos con opacidad y traslate las imagenes
    cards[0].classList.remove('card--show')
    cards[1].classList.add('card--show')
    //le damos uns scale a las imagenes
    images[0].classList.remove('card__image--show')
    images[1].classList.add('card__image--show')
}
const moveRight=()=>{
    currentSlide='rigth';
    cards[0].classList.add('card--show')
    cards[1].classList.remove('card--show')
    images[0].classList.add('card__image--show')
    images[1].classList.remove('card__image--show')
}


//para que se mueva solo llamamos a las funciones para que se ejecuten cada 7segundops
setInterval(()=>{
  if(currentSlide==='rigth'){
      moveLeft();
  }else{
      moveRight();
  }
},7000)