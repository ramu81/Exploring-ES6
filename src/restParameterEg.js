const sum = function(...numbers) {
	console.log(' --- '+numbers.reduce((a,b) => a > b ? a: b));
}
let numbers = [1,2,3,4,5];
sum(...numbers);