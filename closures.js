// closure: functie in een andere functie die een stukje private state bijhoudt

let counter = () => {
	let tellertje = 0;
	return () => {
		tellertje++;
		return tellertje;
	};
};

let myFirstCounter = counter();
console.log(myFirstCounter());
console.log(myFirstCounter());
console.log(myFirstCounter());

let mySecondCounter = counter();
console.log(mySecondCounter());
console.log(mySecondCounter());
console.log(mySecondCounter());
console.log(mySecondCounter());

let objCounter = () => {
	let tellertje = 0;
	return {
        get bla() { return tellertje; },
		increment() {
			tellertje++;
			return tellertje;
		},
        decrement() {

        }
	};
};
let myThirdCounter = objCounter();
console.log(myThirdCounter.increment());
console.log(myThirdCounter.increment());
console.log(myThirdCounter.increment());
console.log(myThirdCounter.bla);