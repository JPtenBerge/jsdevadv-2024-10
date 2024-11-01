// Promises?
// - belofte dat hij iets graag teruggeven
//   - resultaat van async uitvoering
//   - error
// chainen, whoo!
// leesbaarheid te verhogen
// promises zijn eager.

// let prom = new Promise((res, rej) => {
// 	console.log('promise starten');
// 	// async werk
// 	setTimeout(() => {
// 		console.log('promise async werk klaar');
// 		res(4);
// 		rej('wow!');
// 		console.log('hallejj');
// 		// res(8);
// 		// res(15);
// 		// res(16);
// 		// res(23);
// 		// res(42);
// 	}, 2000);
// });

// prom
// 	.then((result) => console.log('eerste then promise klaar:', result))
// 	.catch((err) => console.log('ohoh', err));

// prom
// 	.then((x) => x * 10)
// 	.then((x) => x.toString(2))
// 	.then((result) => console.log('result:', result))
// 	.catch((err) => console.log('ohoh', err));
// // fetch('api/product').then(x => x.json()).then(result => {})

// setTimeout(() => {
// 	console.log('thennen');
// 	prom
// 		.then((result) => console.log('tweede then promise klaar:', result))
// 		.catch((err) => console.log('ohoh', err));
// }, 5000);

let prom1 = new Promise((res) => setTimeout(() => res(2), 1000));
let prom2 = new Promise((res) => setTimeout(() => res(4), 2000));
let prom3 = new Promise((res, rej) => setTimeout(() => rej('ga weg'), 1500));

Promise.all([prom1, prom2, prom3])
	.then((results) => {
		console.log(results);
	})
	.catch((err) => console.error('oh nee', err));

Promise.allSettled([prom1, prom2, prom3]).then((results) => {
	console.log('allSettled:', results);
});

// (async () => {
let results = await Promise.allSettled([prom1, prom2, prom3]);
console.log('awaited settled:', results);
// })();

try {
	await prom1;
	await prom2;
	await prom3;
} catch (err) {}

// Observables <== RxJS Reactive Extensions for JavaScript
// signals <== per framework/library  Svelte Runes
// - heftig gebruik maken van closures
