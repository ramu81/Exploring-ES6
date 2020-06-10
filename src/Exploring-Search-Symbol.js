class Words {
	
	constructor(theWord){ this.word = theWord;}
	[Symbol.search](statement) {
		const regex = new RegExp('there','i');
		console.log(regex);
		return statement.search(regex);
	}
}

const there = new Words('There');
const ram = new Words('ram');

const statement = 'Hello There ? How are you';

console.log('		'+statement.search(there));

console.log('		'+statement.search(ram));

