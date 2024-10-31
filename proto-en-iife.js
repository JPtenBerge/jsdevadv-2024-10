Array.prototype.fancySort = (() => {
	const sortFns = {
		number(arr) {
			return arr.sort((a, b) => a - b);
		},
		string(arr) {
			return arr.sort((a, b) => a.length - b.length);
		},
	};

	return function () {
		let type = typeof this[0];

		return sortFns[type](this);
	};
})();

let getallen = [99, 2, 41, 38, 50, 50, -6];
let teksten = ['hoi', 'testje', 'whatever', 'bladiebla', 'heuj'];
// let objecten = ['hoi', 'testje', 'whatever', 'bladiebla', 'heuj'];

console.log(getallen.fancySort());
console.log(teksten.fancySort());
