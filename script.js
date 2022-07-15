// DOM SELECTION
// document.getElementById()

const judul = document.getElementById('judul');

judul.style.color = 'red';
judul.style.backgroundColor = 'black';
judul.innerHTML = 'Halo Dunia';

// document.getElementsByTagName()

const p = document.getElementsByTagName('p');

for(let i = 0; i < p.length; i++) {
	p[i].style.backgroundColor = 'lightblue';
}

const a = document.getElementsByTagName('a')[0];

a.style.color = 'pink';

// document.getElementsByClassName()

const p1 = document.getElementsByClassName('p1')[0];

p1.innerHTML = 'nama';



