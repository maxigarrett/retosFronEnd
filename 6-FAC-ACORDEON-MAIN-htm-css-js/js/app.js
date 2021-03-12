const articleAcordeon=document.querySelectorAll('.article');

articleAcordeon.forEach(element=>{
	console.log(element);
	element.addEventListener('click',(e)=>{
		if(e.target.classList.contains('article__title')){
			console.log(e.target);
			e.target.parentElement.classList.toggle('article--show')
			e.target.classList.toggle('article__title--active');
		}
	})
})
