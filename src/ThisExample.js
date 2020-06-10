const create = function() {
	const a = 0;
	return {func1 : function(...params) {
		console.log(` local ${a} `);
		console.log(` ${JSON.stringify(this)} `);
		console.log(` rest params ${params} `);
	},
	
	func2: (...params) => {
		console.log(` local ${a} `);
		console.log(` ${JSON.stringify(this)} `);
		console.log(` rest params ${params} `);
	}}
}

const funcs = create(2);

funcs.func1(1);
funcs.func2(1);
