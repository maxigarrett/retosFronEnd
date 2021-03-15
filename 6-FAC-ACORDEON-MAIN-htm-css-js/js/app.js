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
		articleAcordeon.forEach(element=>{
			console.log(element.childNodes[1].childNodes[1]);
			element.classList.remove('article--show')
			element.childNodes[1].classList.remove('article__title--active')
			element.childNodes[1].childNodes[1].classList.remove('article__icon--active')
		})
		if(!e.target.parentElement.classList.contains('article--show')){
			e.target.parentElement.classList.add('article--show')
			e.target.classList.add('article__title--active');
			e.target.children[0].classList.add('article__icon--active');
		}else{
			e.target.parentElement.classList.remove('article--show')
			e.target.classList.remove('article__title--active');
			e.target.children[0].classList.remove('article__icon--active');
		}
		
	}
	if(e.target.classList.contains('article__icon')){
		console.log(e.target.classList.contains('article__icon'));
		articleAcordeon.forEach(element=>{
			console.log(element.childNodes[1]);
			element.classList.remove('article--show')
			element.childNodes[1].classList.remove('article__title--active')
			element.childNodes[1].childNodes[1].classList.remove('article__icon--active')
		})
		if(!e.target.classList.contains('article--show')){
			e.target.parentElement.parentElement.classList.add('article--show')
			e.target.parentElement.classList.add('article__title--active');
			e.target.classList.add('article__icon--active');

		}
		else{
			e.target.parentElement.parentElement.classList.remove('article--show')
			e.target.parentElement.classList.remove('article__title--active');
			e.target.classList.remove('article__icon--active');
		}
	}
}