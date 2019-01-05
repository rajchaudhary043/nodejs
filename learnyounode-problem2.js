var arguments = process.argv,
	length = arguments.length,
	i = 2,
	sum = 0;
while(i<length){
	sum += parseInt(arguments[i]);
	i++;
}

console.dir(sum);