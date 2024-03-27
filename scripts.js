asyncThing1()
	.then(() => {
		// do something with value
		console.log(add(2, 6));
		return add(2, 6);
	})
	.then((nextValue) => {
		// do something with nextValue
		console.log(multiply(nextValue, 2));
		return multiply(nextValue, 2);
	})
	.then((nextValue) => {
		// do something with nextValue
		console.log(divide(nextValue, 4));
		return divide(nextValue, 4);
	})
	.then((nextValue) => {
		// do something with nextValue
		console.log(subtract(nextValue, 3));
		return subtract(nextValue, 3);
	})
	.then((nextValue) => {
		// do something with nextValue
		console.log(add(nextValue, 98));
		return add(nextValue, 98);
	})
	.then((nextValue) => {
		// do something with nextValue
		console.log(remainder(nextValue, 2));
		return remainder(nextValue, 2);
	})
	.then((nextValue) => {
		// do something with nextValue
		console.log(multiply(nextValue, 50));
		return multiply(nextValue, 50);
	})
	.then((nextValue) => {
		// do something with nextValue
		console.log(remainder(nextValue, 40));
		return remainder(nextValue, 40);
	})
	.then((nextValue) => {
		// do something with nextValue
		console.log(add(nextValue, 32));
		return add(nextValue, 32);
	})
	.then((nextValue) => {
		console.log("The final result is", nextValue);
	})
	.catch((err) => {
		// something in either asyncThing1, asyncThing2, or asyncThing3 failed
		console.log(err);
	});
