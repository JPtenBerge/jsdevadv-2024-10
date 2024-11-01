'use strict';

// class/obj

// 1. IIFE/closures
// 2. getters/setters
// 3. private
// 4. conventie
// 5. configuratie

class Human {
	#age = 27;

	get leeftijd() {
		return this.#age;
	}
	set leeftijd(value) {
		if (value > 130) {
			throw new Error('no way dat een mens zo oud is');
		}
		this.#age = value;
	}
}

// class Subhuman extends Human {
//     bla() {
//         return this.#age;
//     }
// }

// Human.prototype.omzeil = function() {
//     return this.#age;
// };

let jp = new Human();
console.log(jp.leeftijd);
jp.leeftijd = 82;
console.log(jp);

// (someService as any).datPrivateDing

let obj = { x: 24, y: 'wauw' };
// Object.preventExtensions(obj);
// Object.seal();
Reflect.preventExtensions(obj);
// Object.freeze(obj); // configuratie
// obj.x = 3456; 
obj.z = 3456;
console.log(obj);
console.log(obj.x);

// Object.preventExtensions();