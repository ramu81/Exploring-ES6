class Bus {
	constructor(year,color){
		this.year=year;
		this.color=color;
	}
	
	get model() { return this.year; }
	
	set model(model) { this.year=model; }	
}

const redBus = new Bus(2005,'Red');

console.log(redBus);

console.log(redBus.model);

redBus.model = 2020;

console.log(redBus.model);