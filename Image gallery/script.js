const container = document.querySelector('.container');
const big = document.querySelector('.big');
const thumbs = document.querySelectorAll('.thumb')

container.addEventListener('click', function(e) {

// Cek yang diklik adalah thumb
	if(e.target.className == 'thumb') {
		big.src = e.target.src;
		big.classList.add('fade');
		setTimeout(function() {
			big.classList.remove('fade');
		}, 500);

		thumbs.forEach(function(thumb) {
			thumb.className = 'thumb'
		});

		e.target.classList.add('active');
	};

});