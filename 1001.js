const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const x = parseInt(lines.shift())
const y = parseInt(lines.shift())

console.log(`X = ${x + y}`)