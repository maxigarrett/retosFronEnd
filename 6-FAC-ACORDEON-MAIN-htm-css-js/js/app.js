const articleAcordeon=document.querySelectorAll('.article');
const iconArrowAcordeon=document.querySelectorAll('.article__icon')

articleAcordeon.forEach(element=>{
	element.addEventListener('click',(e)=>{
		if(e.target.classList.contains('article__title')){
			selectTitleOrArrow(e)
		}

	})
})

iconArrowAcordeon.forEach(element=>{
	element.addEventListener('click',(e)=>{
		selectTitleOrArrow(e)
	})
})

//funcion que comprueba si hacemos click en el titulo o en la imagen de flecha para desplegar 
const selectTitleOrArrow=(e)=>{
	//este if comprueba si seleccionamos el titulo del articulo tiene que ir porque tambien capturamos la clase de la imagen
	//si lo sacamos no anda aunque se repita arriba
	if(e.target.classList.contains('article__title')){
		e.target.parentElement.classList.toggle('article--show')
		e.target.classList.toggle('article__title--active');
		e.target.children[0].classList.toggle('article__icon--active');
	}
	if(e.target.classList.contains('article__icon')){
		console.log(e.target.classList.contains('article__icon'));
		e.target.parentElement.parentElement.classList.toggle('article--show')
		e.target.parentElement.classList.toggle('article__title--active');
		e.target.classList.toggle('article__icon--active');
	}
}