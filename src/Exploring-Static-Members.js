class Person {
	
	constructor(firstName,lastName='Kondapalli') {
		this.firstName=firstName;
		this.lastName=lastName;
		Person.generatedId = Person.generatedId + 1;
	}
	
	get name() {  return ` ${this.firstName} ${this.lastName}`;}
	set name(theName) { this.lastName=theName;this.firstName=theName;}
	
	static get personId() {
		return Person.generatedId;
	}
	
	get [Symbol.toStringTag]() { return `Person Name : ${this.lastName} ${this.firstName} ${Person.generatedId}`; }
	
}

Person.generatedId=0;

const ram = new Person('Ram');

const vasanha = new Person('Vasantha');

const charan = new Person('Sai Charan');

console.log(ram.toString());
console.log(vasanha.toString());
console.log(charan.toString());
