function getComputerChoice() {
	const comp = Math.random();
	if (comp < 0.34) return 'gajah';
	if (comp >= 0.34 && comp < 0.67 ) return 'orang';
	return 'semut';
}


function getResult(comp, player) {
    if( player == comp ) return 'SERI!';
    if( player == 'gajah' ) return  ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
   	if( player == 'semut' ) return  ( comp == 'orang' ) ? 'KALAH' : 'MENANG!'; 
}

// const playerElephant = document.getElementsByClassName('gajah')[0];
// const playerHuman = document.getElementsByClassName('orang')[0];
// const playerAnt = document.getElementsByClassName('semut')[0];

// playerElephant.addEventListener('click', function() {
// 	const computerChoice  = getComputerChoice();
// 	const playerChoice = playerElephant.className;
// 	const result = getResult(computerChoice, playerChoice);

// 	const imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src', 'img/' + computerChoice + '.png')


// 	const info = document.querySelector('.info');

// 	info.innerHTML = result;
// })

// playerHuman.addEventListener('click', function() {
// 	const computerChoice  = getComputerChoice();
// 	const playerChoice = playerHuman.className;
// 	const result = getResult(computerChoice, playerChoice);

// 	const imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src', 'img/' + computerChoice + '.png')


// 	const info = document.querySelector('.info');

// 	info.innerHTML = result;
// })

// playerAnt.addEventListener('click', function() {
// 	const computerChoice  = getComputerChoice();
// 	const playerChoice = playerAnt.className;
// 	const result = getResult(computerChoice, playerChoice);

// 	const imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src', 'img/' + computerChoice + '.png')


// 	const info = document.querySelector('.info');

// 	info.innerHTML = result;
// })


function rotate() {
	const imgComputer = document.querySelector('.img-komputer');
	const image = ['gajah', 'orang', 'semut'];
	let i = 0;
	const timeStart = new Date().getTime();
	setInterval(function(){
		if( new Date().getTime() - timeStart > 1000) {
			clearInterval;
			return;
		}
		imgComputer.setAttribute('src', 'img/' + image[i++] + '.png');
		if(i === image.length) i = 0;
	}, 100)
}

const choice = document.querySelectorAll('li img');
choice.forEach(function(e) {
	e.addEventListener('click', function() {
			const computerChoice  = getComputerChoice();
			const playerChoice = e.className;
			const result = getResult(computerChoice, playerChoice);

			rotate();

			setTimeout(function() {
				const imgComputer = document.querySelector('.img-komputer');
				imgComputer.setAttribute('src', 'img/' + computerChoice + '.png')


				const info = document.querySelector('.info');
				info.innerHTML = result;
			}, 1000)
	})
})


