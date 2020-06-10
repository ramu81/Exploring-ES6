# Exploring-ES6

Babel :
	
	Babel is a transpiler (translates code in one language to another computer language 
at the same abstraction level) that can turn our ES6 code into ES5.

Install Babel ClI 

 First and formost thing is to download the Babel command line interface, which will allow 
us to use Babel in our terminal.

>  npm install -D babel-cli

For Loop & templet String :  

	for( const [index,value] of array.entries() ) console.log(` ${index} --- ${value}`)

Calling to prototype method: call using super.method()
	
Default parameters :  const func = function ( a, b=2) {} func(1)
	 
rest parameter : function(...numbers) {}

spread  : const numbers = [1,2,3]; function(...numbers);

Destructuring :  for( const [index,value] of array.entries() ) {} , [a,b] = [b,a]
	Enhanced literal : person = {name: 'Ram', age: 40}; [name,age] = person;

Arrow Function : (parameter list) => body of the function.

Symbol :  it generate an unique value for each call. Eg: const symbol = Symbol('Hello')
		  Create Global Symbols : Symbol.for('Hello');
		  Get Global Reference  : Symbol.keyFor('Hello');
		  Iterator : along with yeild we can achive this easily.
		  
		  
		  



