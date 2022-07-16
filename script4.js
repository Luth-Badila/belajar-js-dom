// DOM Manipulation
// Buat Element Baru

const newP = document.createElement('p');
const newTextP = document.createTextNode('New Paragraph');

// Simpan tulisan ke dalam paragraf

newP.appendChild(newTextP);

// simpan newP di akhir section a

const sectionA = document.getElementById('a');

sectionA.appendChild(newP);


const newLi = document.createElement('li');
const newLiText = document.createTextNode('item 1.5');

newLi.appendChild(newLiText);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(newLi, li2);

const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const newH2 = document.createElement('h2');
const newTextH2 = document.createTextNode('This is me');

newH2.appendChild(newTextH2);

sectionB.replaceChild(newH2, p4)

newP.style.backgroundColor = 'lightgreen';
newLi.style.backgroundColor = 'lightgreen';
newH2.style.backgroundColor = 'lightgreen';