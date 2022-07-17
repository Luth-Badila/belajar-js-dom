const p3 = document.querySelector('.p3');
const p2 = document.querySelector('.p2');
const p4 = document.querySelector('section#b p');


// p2.onclick = colorChangep2;
// function colorChangep2() {
// 	p2.style.backgroundColor = 'lightblue';
// }

// function colorChangep3() {
// 	p3.style.backgroundColor = 'lightgreen';
// }

// p4.addEventListener('click', function() {
// 	const ul = document.querySelector('section#b ul')
// 	const newLi = document.createElement('li')
// 	const newLiText = document.createTextNode('wah ada barang baru');
// 	newLi.appendChild(newLiText);
// 	ul.appendChild(newLi);
// });

// p3.onclick = function () {
// 	p3.style.backgroundColor = 'lightgreen';
// }

// p3.onclick = function () {
// 	p3.style.color = 'blue';
// }

p3.addEventListener('mouseenter', function() {
	p3.style.backgroundColor = 'lightgreen';
});

p3.addEventListener('mouseleave', function() {
	p3.style.color = 'red';
});





