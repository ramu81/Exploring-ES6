class A {
	constructor(theName){
		this.name = theName;
	}
	
	set nameProp(theName) { this.name = theName;}
	get nameProp() { return this.name;}
}
	
class B extends A { }

const bInstance = new B('Ram')

console.log(bInstance.nameProp);

bInstance.nameProp = 'Vasantha';

console.log(bInstance.nameProp);