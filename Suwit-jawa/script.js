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

const playerElephant = document.getElementsByClassName('gajah')[0];
playerElephant.addEventListener('click', function() {
	const computerChoice  = getComputerChoice();
	const playerChoice = playerElephant.className;
	const result = getResult(computerChoice, playerChoice);
	console.log('comp : ' + computerChoice);
	console.log('player : ' + playerChoice);
	console.log('result: ' + result);
})



