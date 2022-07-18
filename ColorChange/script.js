const changeColorButton = document.getElementById('changeColorButton');
// const body = document.getElementsByTagName('body')[0];
changeColorButton.onclick = function() {
	// document.body.style.backgroundColor = "lightblue";
	// document.body.setAttribute('class', 'lightgreen');
	document.body.classList.toggle('lightgreen')
}


const randomColorButton = document.createElement('button');
const buttonText = document.createTextNode('Random Color');
randomColorButton.appendChild(buttonText);
randomColorButton.setAttribute('type', 'button'); 

changeColorButton.after(randomColorButton);

randomColorButton.addEventListener('click', function() {
	const r = Math.round(Math.random() * 255 + 1);
	const g = Math.round(Math.random() * 255 + 1);
	const b = Math.round(Math.random() * 255 + 1);
	console.log(r);
	document.body.style.backgroundColor = "rgb("+ r +","+ g +","+ b +")";
})

const redSlider = document.querySelector('input[name=redSlider]');
const greenSlider = document.querySelector('input[name=greenSlider]');
const blueSlider = document.querySelector('input[name=blueSlider]');

// redSlider.addEventListener('input', function() {
// 	const r = redSlider.value;
// 	document.body.style.backgroundColor = "rgb("+ r +",100,100)";
// })

// greenSlider.addEventListener('input', function() {
// 	const r = redSlider.value;
// 	const g = greenSlider.value;
// 	document.body.style.backgroundColor = "rgb("+ r +","+ g +",100)";
// })

// blueSlider.addEventListener('input', function() {
// 	const r = redSlider.value;
// 	const g = greenSlider.value;
// 	const b = blueSlider.value;
// 	document.body.style.backgroundColor = "rgb("+ r +","+ g +","+ b +")";
// })

// Lebih efektif

let rgb = () => {
    const r = redSlider.value;
    const g = greenSlider.value;
    const b = blueSlider.value;
    let rgbs = (document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`);
    return rgbs;
};

redSlider.addEventListener('input', rgb);
blueSlider.addEventListener('input', rgb);
greenSlider.addEventListener('input', rgb);


document.body.addEventListener('mousemove', function(e) {
	// Mouse position
	// console.log(e.clientX);
	// Browser size
	// console.log(window.innerWidth);

	const xPos = Math.round((e.clientX / window.innerWidth) * 255);
	const yPos = Math.round((e.clientY / window.innerHeight) * 255);
	document.body.style.backgroundColor = "rgb("+ xPos +","+ yPos +",100)";
});