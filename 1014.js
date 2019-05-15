const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const a = Number(lines.shift())
const b = Number(lines.shift())
const c = Number(lines.shift(0))

console.log(`${(a/b).toFixed(3)} km/l`)