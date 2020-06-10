
const symbol1 = Symbol('Hello');
const symbol2 = Symbol('Hello');
console.log(` -------------------------------------  
	symbol1 : ${symbol1.toString()}  
	symbol2 : ${symbol2.toString()}
	symbol1 === symbol2 ${symbol1===symbol2} `);

const gSymbol1 =  Symbol.for('Kondapalli');
const gSymbol2 =  Symbol.for('Kondapalli');

console.log(` -------------------------------------  
	globol symbol1 : ${gSymbol1.toString()} 
	globol symbol2 : ${gSymbol2.toString()}
	${Symbol.keyFor(gSymbol1)} === ${Symbol.keyFor(gSymbol2)} ${Symbol.keyFor(gSymbol1)===Symbol.keyFor(gSymbol2)}`);

const name = Symbol.for('Name of the person');
const age = Symbol.for('Age of the person');
const address = Symbol.for('Address of the person');

let ram = { [name]: 'Ram Kondapalli' , [age]: 40, [address] : 'Lake Mary, FL, USA' };

console.log(` -------------------------------------   
	Name : ${ram[name]}  age: ${ram[age]} address : ${ram[address]}
 -------------------------------------   `);

for( let prop in ram ) { console.log(`  ${prop} `);}
 
Object.getOwnPropertySymbols(ram).forEach( a => console.log(` ${Symbol.keyFor(a)}`));

class Person { constructor(name){this.name=name} }
 
class People {
	constructor() {
	this.persons = [new Person('Ram'),new Person('Vasantha'),new Person('Sai Charan')];
	}
 }
const people  = new People();

for( let prop of people ) { console.log(prop); }
