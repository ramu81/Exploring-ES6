let Car = function() {}

Car.prototype.drive = function() { console.log('Driving...');}

Car.checkSpeed = function() { console.log('checkSpeed...');}

const car = new Car();

console.log(car);

car.drive();

Car.checkSpeed();


class Bus {
	
	constructor(year,color) {
		this.year=year;
		this.color=color;
	}
	
	drive() { console.log('Driving...');}
		
}

console.log(Reflect.ownKeys(Bus.prototype));

const redBus = new Bus(2010,'Red');
const blueBus = new Bus(2020,'Blue');

console.log(redBus);
console.log(blueBus);

console.log(Reflect.getPrototypeOf(redBus) === Reflect.getPrototypeOf(blueBus));




