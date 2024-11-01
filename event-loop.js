const fs = require('fs');

console.log('start');

// fs.readFile('boek.txt', 'utf8', (err, content) => {
//     console.log('content:', content);
// });

setTimeout(() => {
	console.log('timeout!');
}, 1000);

for (let i = 0; i < 50000; i++) {
	console.log('.', i);
}

console.log('klaar');

// JavaScript is single-threaded.
