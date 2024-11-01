let target = { x: 24, y: 'hoi' };
let proxy = new Proxy(target, {
	get(target, prop) {
		console.log('get op', target, prop);
		return target[prop];
	},
	set(target, prop, value) {
		console.log('set op', target, prop, value);
		target[prop] = value + 'proxy';
	},
});

console.log(proxy.x);
console.log(proxy.y);
proxy.y = 'doei';
console.log(proxy.y);

// change detection? UI updaten.
// Angular? nee
// React? nee
// Vue? ja
// Svelte? nee
// Solid? nee
// Qwik? nee

// unittesten - mocken