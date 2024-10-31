// symbols?

// primitief type
// - iets uniek te adresseren
//    12637828-a822baedf-393849a-c9d9395843

let sym = Symbol.for('sym'); // get or >>create<<
let sym2 = Symbol.for('sym'); // >>get<< or create
console.log(sym);
console.log('sym === sym2 met sym op beide plekken met for', sym === sym2);

let suffix = 'name';

let obj = {
	x: 24,
	y: 'hoi',
	['first' + suffix]: 'JP',
	['sur' + suffix]: 'tB',
	[sym]: 42,
	[sym2]: 108,
};
console.log(obj);
console.log(obj[sym]);
console.log(obj[sym2]);

// libs: Angular? nee. jQuery? nee. React? nee. Svelte? nee. Vue? nee. Next.js? nee.
// testen: nee.

let obj2 = {
    x: 24,
    toString() {
        console.log('toString()');
        return 'whooaaaa';
    },
    [Symbol.toPrimitive]() {
        console.log('nu in symbol');
        return 'uuuuuuuuuhhhhhh';
    }
};



console.log(`obj2: ${obj2}`)
