const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const r = (lines.shift()).split(' ')
const a = Number(r[0])
const b = Number(r[1])
const c = Number(r[2])

console.log(`TRIANGULO: ${(a*c/2).toFixed(3)}`)
console.log(`CIRCULO: ${(c*c*3.14159).toFixed(3)}`)
console.log(`TRAPEZIO: ${(((a+b)*c)/2).toFixed(3)}`)
console.log(`QUADRADO: ${(b*b).toFixed(3)}`)
console.log(`RETANGULO: ${(a*b).toFixed(3)}`)
