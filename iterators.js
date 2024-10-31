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



// C# en C
// malloc() en new
// malloc struct
// - new roept de constructor aan
// free()