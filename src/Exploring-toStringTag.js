class Example {
	get [Symbol.toStringTag]() {
		return 'Example class';
	}
}

console.log(new Example().toString());