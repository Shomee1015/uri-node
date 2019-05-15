const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const r = Number(lines.shift())

console.log(`VOLUME = ${((4/3) * 3.14159 * r*r*r).toFixed(3)}`)
