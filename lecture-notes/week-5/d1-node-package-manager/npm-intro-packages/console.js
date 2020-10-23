// console.log
console.log('this is a log statement');



// console.error
console.error('this is an error');



// console.table
const dogs = [
	{ name: 'Bodhi', age: 5 },
	{ name: 'Lucy', age: 10 }
]

console.table(dogs);



// console.group || console.groupEnd

console.log('DOGS');
console.group('dog group')
console.log('bodhi');
console.log('lucy');
console.groupEnd();

console.log('CATS');
console.group('cat group');
console.log('pancake');
console.log('bob');
console.groupEnd()