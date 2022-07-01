console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('You submitted your form, congrats');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let imageAlert = document.querySelector('img')

imageAlert.addEventListener('mouseover', alert)