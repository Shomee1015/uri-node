const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const r = (lines.shift()).split(' ')
const a = Number(r[0])
const b = Number(r[1])
const c = Number(r[2])

let m = (a+b+Math.abs(a-b))/2
m = (m+c+Math.abs(m-c))/2

console.log(`${m} eh o maior`)