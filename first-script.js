for(let i = 0; i < 100; i++) {
	isPrime(i);
}

function isPrime(monNombre) {
	let count = 0;
	for (let j = monNombre; j > 0; j--) {
		if( monNombre % j === 0) {
			count++
		}
	}
	if(count === 2) {
		console.log(monNombre)
	}
}