const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const r = Number(lines.shift())

console.log(`A=${(3.14159*r*r).toFixed(4)}`)
