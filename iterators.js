// iterator: iets om over een collectie heen te gaan
// Iteratable IEnumerable<>

let jp = {
	favorieteChips: [
		"Lay's oven-baked paprika",
		'Sweet chili Doritos',
		'Nibb-it rings',
		'Wokkels Paprika',
	],
	favorieteDranken: ['Sprite Zero', 'Cafe con latte'],
	[Symbol.iterator]() {
		let alles = [...this.favorieteChips, ...this.favorieteDranken];
		let index = 0;
		return {
			next() {
				return {
					value: alles[index++],
					done: index > alles.length,
				};
			},
		};
	},
};

for (let item of jp) {
	console.log(item);
}

// Deno

// HTTP-servertje
// for await (let conn of server.connections) {}

// genereert op een iterator
function* gen() {
    console.log('eerste');
    yield 4;
    console.log('tweede');
    yield 8;
    console.log('derde');
    yield 15;
    console.log('vierde');
    yield 16;
    console.log('vijfde');
    yield 23;
    console.log('zesde');
    yield 42;
}
// for(let item of gen()) {
//     console.log('gen item:', item);
// }

let source = gen();
console.log(source.next());
console.log(source.next());
console.log(source.next());
console.log(source.next());
console.log(source.next());
console.log(source.next());
console.log(source.next());

function* traverseNode(node) {
    yield* node.left;
    yield node.value;
    yield* node.right;
}