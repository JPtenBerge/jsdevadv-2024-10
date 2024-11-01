// static functies

console.log('is({}, {})', Object.is({}, {}));
console.log('is(4, 4)', Object.is(4, 4));
console.log('is(4, "4")', Object.is(4, '4'));
console.log('is(NaN, NaN)', Object.is(NaN, NaN));
console.log('NaN === NaN', Object.is(NaN === NaN));
console.log('0 === -0', 0 === -0);
console.log('is(0, -0)', Object.is(0, -0));

if (7 / 'bla' === 5 / 'hoi') {
}

console.log('isNaN(NaN)', isNaN(NaN));
console.log('isNaN(tekstje)', isNaN('bla'));
console.log('Number.isNaN(NaN)', Number.isNaN(NaN));
console.log('Number.isNaN(tekstje)', Number.isNaN('bla'));

let obj = { x: 24, y: 'hoi' };

Object.assign(obj, { y: 'bla', z: 34 });

console.log(obj);
let otherObj = { ...obj, ...{ y: 'bla', z: 34 } };
console.log(otherObj);

