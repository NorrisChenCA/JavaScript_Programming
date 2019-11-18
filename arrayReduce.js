const numbers = [-2, -1, 1, 2];

const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);

let sum = 0;
for(let n of numbers)
    sum += n;

console.log(sum);