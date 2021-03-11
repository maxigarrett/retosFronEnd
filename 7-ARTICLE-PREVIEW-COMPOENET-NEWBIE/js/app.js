const shareIcon= document.getElementById('share');
const tooltip=document.getElementById('tooltip');

shareIcon.addEventListener('click',(e)=>{
    if(tooltip.classList.contains('active')){
        tooltip.classList.remove('active');
        document.querySelector('.share__icon').classList.remove('share__icon--active');
    }else{
        tooltip.classList.add('active');
        document.querySelector('.share__icon').classList.add('share__icon--active');
    }
})