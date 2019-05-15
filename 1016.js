const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const x = Number(lines.shift())

console.log(`${x*2} minutos`)