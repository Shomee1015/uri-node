const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const a = Number(lines.shift())
const b = Number(lines.shift())
const c = Number(lines.shift())

console.log(`NUMBER = ${a}`)
console.log(`SALARY = U$ ${(b*c).toFixed(2)}`)
