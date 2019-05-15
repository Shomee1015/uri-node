const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const r = (lines.shift()).split(' ')
const x1 = Number(r[0])
const y1 = Number(r[1])

const r2 = (lines.shift()).split(' ')
const x2 = Number(r2[0])
const y2 = Number(r2[1])

console.log((Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)).toFixed(4)))