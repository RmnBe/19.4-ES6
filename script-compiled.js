'use strict';

//1
var x = 'Hello';
var y = 'World';
var xy = x + ' ' + y;
console.log(xy);

//2
var multiply = function multiply() {
	var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
	var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
	return a * b;
};
console.log(multiply(10));

//3
var average = function average() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var sum = 0;
	args.forEach(function (arg) {
		sum += arg;
	});
	return sum / args.length;
};
console.log(average(5, 6, 7));

//4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));

//5
var data = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = data[2],
    lastname = data[4];

var name = firstname + ' ' + lastname;
console.log(name);
