const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const x = Number(lines.shift())
const y = Number(lines.shift())

console.log(`MEDIA = ${((x*3.5+y*7.5)/11).toFixed(5)}`)
