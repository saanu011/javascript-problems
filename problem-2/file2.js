var fs = require("fs");

// reading the input file
var items = fs.readFileSync("/test/javascript-assignment/problem-2/input2.txt").toString().split("\n");


for (let i = 1; i < items.length; i++){
	var left_right = items[i].split(" ");

	var left = Number(left_right[0])
	var right = Number(left_right[1])

	console.log(left, right)

	var total_numbers = right - left + 1

	if (total_numbers %2 ==0)
		var number_of_odd_values = Math.floor(total_numbers / 2)

	else {
		if (right %2 == 0)
			var number_of_odd_values = Math.floor(total_numbers / 2)
		else
			var number_of_odd_values = (Math.floor(total_numbers / 2)) + 1
	}

	if (number_of_odd_values % 2 == 0)
		console.log("Even")
	else
		console.log("Odd")


}