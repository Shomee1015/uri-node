const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const x = Number(lines.shift())
const y = Number(lines.shift())

console.log((x*y/12).toFixed(3))