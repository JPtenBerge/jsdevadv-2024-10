'use strict';



// in een closure, this in de closure?

// this wijst standaard naar de eigenaar van de functie.
// - bij arrow functions zet hij de this vast bij het initten van je functie.

function Customer(name, age) {
	console.log('this in customer:', this);
	this.name = name;
	this.age = age;

    this.buy = () => {
        console.log('buy this:', this);
        console.log(`Ik, persoon met leeftijd ${this.age}, ga kopen kopen kopen`);

        const nested = () => {
            console.log('nested:', this);
        }
        nested();
    };
}
const jp = new Customer('JP', 38);
console.log(jp);

jp.buy();

const func = jp.buy;
func.call({ age: 99 }, 4, 8, 9, 0);
func.apply({ age: 99 }, [4, 8, 9, 0]);

let gebindeFunc = func.bind({ age: 99 });
gebindeFunc();
gebindeFunc();
gebindeFunc();


// const func = jp.buy;
// func();



// function test() {
// 	console.log('this:', this);
// }
// window.test();
