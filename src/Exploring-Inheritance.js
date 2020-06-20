class Base {
	constructor(name) { this.name = name;}
	
	get toString() { return ` Name : ${this.name}`;}
}

class Sub extends Base {
	constructor(name,id) { super(name); this.id = id; }
	get toString() { return ` ${super.toString} id : ${this.id} `;}
}

const sub = new Sub('Ram',1);

console.log(sub);