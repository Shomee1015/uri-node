const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const r = (lines.shift()).split(' ')
const r1 = (lines.shift()).split(' ')

const a = Number(r[0])
const b = Number(r[1])
const c = Number(r[2])

const d = Number(r1[0])
const e = Number(r1[1])
const f = Number(r1[2])

console.log(`VALOR A PAGAR: R$ ${(b*c + e*f).toFixed(2)}`)
