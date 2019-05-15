const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const x = Number(lines.shift())
const y = Number(lines.shift())
const z = Number(lines.shift())

console.log(`MEDIA = ${((x*2+y*3+z*5)/10).toFixed(1)}`)
