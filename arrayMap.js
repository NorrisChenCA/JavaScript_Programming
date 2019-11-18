const numbers = [-2, -1, 1, 2];
const filtered = numbers.filter(n => n >= 0);
const items = filtered.map(n => ({value: n}));
console.log(items);