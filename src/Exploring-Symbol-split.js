class CustomString {
	constructor(theStatement){
		this.statement = theStatement;
	}
	[Symbol.split](message,length) {
		console.log(` message ${message} statement ${this.statement}`);
		return message.split(this.statement);
	}
}

const aStatement =  'Hello Kondapalli, How are you doing';

const aCustomString = new CustomString('i');

console.log(aStatement.split(aCustomString));