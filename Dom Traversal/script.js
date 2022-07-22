// event handling

// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function() {
// 	card.style.display = 'none';
// })

// Dom Traversal

// const close = document.querySelectorAll('.close');
// const nama = document.querySelector('.nama');
// console.log(nama.nextElementSibling);

// for (let i = 0; i < close.length; i++) {
// 	close[i].addEventListener('click', function(e) {
// 		console.log(e.target)
// 		// close[i].parentElement.style.display = 'none';
// 		e.target.parentElement.style.display = 'none';
// 	})
// }

// close.forEach(function(ele) {
// 	ele.addEventListener('click', function(e) {
// 		console.log(e.target)
// // 		// close[i].parentElement.style.display = 'none';
// 		e.target.parentElement.style.display = 'none';
// 		e.preventDefault(); //to stop action in a href 
// 		e.stopPropagation();
// 	})
// })

// const cards = document.querySelectorAll('.card');

// cards.forEach(function(card){
// 	card.addEventListener('click', function() {
// 		alert('mantap bosku')
// 	});
// });

const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
	console.log(e.target);
	if(e.target.className == 'close') {
		e.target.parentElement.style.display = 'none';
		e.preventDefault();
	}
})