const main= document.getElementById('main');
main.addEventListener('click',(e)=>{
    if(e.target.classList.contains('article')){
        console.log(e.target.children.children);
    }
})