let numbers = new Set([1,2,3,4,5,1,2,3,4,5])

numbers.forEach( a => console.log('  '+a))

let names = new Map ([[1,'Ram'],[2,'Vasantha'],[3,'Sai Charan']])

names.set(4,'sdd');

names.forEach( (key,value) => console.log(` ${key} ${value} `))

names.delete(4);

names.forEach( (key,value) => console.log(` ${key} ${value} `))

let tempNames = new WeakMap();

for(let a =0 ; a < 1000000000; a++) { tempNames.set({name:'Kondapalli',id:a},a); }
console.log('printning is done');

