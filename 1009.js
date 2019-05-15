const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const a = lines.shift()
const b = Number(lines.shift())
const c = Number(lines.shift())

console.log(`TOTAL = R$ ${(b + c/100*15).toFixed(2)}`)
