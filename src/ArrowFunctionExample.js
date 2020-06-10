const set = new Set([1,2,3,4,5,6,7,8,9]);

const total = set.values()
				  .filter(a => a%2 == 0)
				  .map(a => a* 2)
				  .reduce((total,a) => total+a);
				  
console.log(` ${total} `)