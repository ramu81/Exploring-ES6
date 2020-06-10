const isPrime = function(num) {
	
	if(num < 2 ) return false;
	
	for(let i = 2 ; i < num ; i++) {
		if (num%i == 0) return false;
	}
	
	return true;
}

const primesFrom = function *(start) {
	let index = start;
	while(true) {
		if(isPrime(index)) {
			yield index;
		}
	index++;
	}
}

for(const prime of primesFrom(10)) {
	console.log(prime);
	if(prime > 25) break;
}