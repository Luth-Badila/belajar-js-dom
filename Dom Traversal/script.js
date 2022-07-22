// event handling

// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function() {
// 	card.style.display = 'none';
// })

// Dom Traversal

const close = document.querySelectorAll('.close');
const nama = document.querySelector('.nama');
console.log(nama.nextElementSibling);

// for (let i = 0; i < close.length; i++) {
// 	close[i].addEventListener('click', function(e) {
// 		console.log(e.target)
// 		// close[i].parentElement.style.display = 'none';
// 		e.target.parentElement.style.display = 'none';
// 	})
// }

// const card = document.querySelectorAll('.card');

close.forEach(function(ele) {
	ele.addEventListener('click', function(e) {
// 		console.log(e.target)
// 		// close[i].parentElement.style.display = 'none';
		e.target.parentElement.style.display = 'none';
	})
})