class CustomArray {
	constructor(...values) {
		this.values = values;
		for(let i = 0; i<this.values.length; i++) {
			Object.defineProperty(this,i,{
				get: function() { return this.values[i];}
			});
		}
		this[Symbol.isCancatSpreadable] = true;
	}
	
	get length() { return this.values.length; }
	
	inspect() { return this.values; }
	
	static [Symbol.hasInstace](instance) {
		return Object.getPrototypeof(instance) === CustomArray.prototype;
	}
	
}

class MyArray extends Array {
	static get [Symbol.spiecies] () {
		return Array;
	}
}

const customArray = new CustomArray('Ram','Kondapalli');
const temp = ['Vasantha','Kondapalli'];
console.log(customArray);
console.log(customArray.length);
console.log(customArray[0]);
console.log(customArray[1]);
console.log('==============================');
console.log(temp.concat(customArray));
console.log(` CustomArray is instance of ${ customArray instanceof Object } `);
console.log(` CustomArray is instance of ${ customArray instanceof CustomArray } `);
const arr = new MyArray('Ram','Laxman');

