test();
window.test(134, 8);

function Customer(name, age) {
	this.name = name;
	this.age = age;
}
let jp = new Customer('JP', 38);
console.log(jp); // constructor function

function test() {
	console.log('hoi vanaf test');
}
function test(p1, p2) {
	console.log('hoi vanaf test met params', p1, p2);
}

const func = () => {
	console.log('arrow function');
};
func();

// Immediately Invoked Function Expression

(function() {
    console.log('hoi 4');
    let hoi = 'iets';
})();
console.log(hoi);

// IIAsync A FE
// II Arrow FE
(() => {
    console.log('hoi 4');
})();


function bla() { } // function declaration
const bla2 = function() { }; // function expression

// patterns
// - revealing module pattern
// - namespace pattern

// VBScript - IE
// Dart - Chrome

// jQuery
// - websites <== wordpress <= jQuery
// - webapplicaties <== custom code IS  <== NIET.
