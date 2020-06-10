const numbers = [10,20,30,40];
const mask = function(texts,index,value){
	return texts[1]+'  '+index+'   '+value;
}
for(const [index,value] of numbers.entries()) {
	const message = mask ` ${index} --- ${value} `
	console.log(message)
}
