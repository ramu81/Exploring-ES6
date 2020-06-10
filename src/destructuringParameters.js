class Person {
	constructor(fname,lname,age,email){
		this.fname=fname;
		this.lname=lname;
		this.age=age;
		this.email=email;
	}
}

const printPerson = function({lname,email}){
	console.log(lname+' -- '+email);
}

const ram = new Person('Ram','Kondapalli',40,'rakondapalli@deloitte.com');

printPerson(ram);