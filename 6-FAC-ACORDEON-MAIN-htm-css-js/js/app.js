const articleAcordeon=document.querySelectorAll('.article');


articleAcordeon.forEach(element=>{
	console.log(element);
	element.addEventListener('click',(e)=>{
		console.log(e.target);
	})
})
