const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let a = Number(lines.shift())

console.log(`${parseInt(a/365)} ano(s)`)
a = a - parseInt(a/365) * 365
console.log(`${parseInt(a/30)} mes(es)`)
a = a - parseInt(a/30) * 30
console.log(`${a} dia(s)`)
