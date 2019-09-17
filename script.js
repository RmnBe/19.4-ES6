//jak sprawdzic js w es6?
//1
const x = 'Hello';
const y = 'World';
const xy = `${x} ${y}`;
console.log(xy);

//2
const multiply = (a = 5, b = 6) => a * b;
console.log(multiply(10));

//3
const average = (...args) => {
	let sum = 0;
	args.forEach(arg => {
		sum += arg;
	})
	return sum / args.length;
}
console.log(average(5, 6, 7));

//4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

//5
const data = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstname, , lastname] = data;
const name = `${firstname} ${lastname}`;
console.log(name);


