// set? => lijst met unieke waarden ===
let setje = new Set();
setje.add(5);
setje.add(5);
setje.add(5);
setje.add(null);
setje.add('5');
setje.add(5);
console.log(setje);
console.log(setje.size);

console.log('==========');

// map? => key-value pairs/dictionary/hashmap
let mapje = new Map(); // 2015
mapje.set('hoi', 'doei');
mapje.set('bla', 42);
mapje.set(null, 42);
console.log(mapje.size);
console.log(mapje);
console.log(mapje.keys());
console.log(mapje.values());

// hoe verschilt dit ding van een gewoon JS object?
let obj = {
	hoi: 'doei',
	hoi: 'whoo',
};
Object.keys(obj);
Object.values(obj);

mapje.set(obj, 'whoo!'); // complexe keys
console.log(mapje.get(obj));

// WeakMap WeakSet
// houden geen ref vast naar een obj.
// - DOM-elementen
