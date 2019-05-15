const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let a = Number(lines.shift())

console.log(a)
console.log(`${parseInt(a/100)} nota(s) de R$ 100,00`)
a = a - parseInt(a/100) * 100
console.log(`${parseInt(a/50)} nota(s) de R$ 50,00`)
a = a - parseInt(a/50) * 50
console.log(`${parseInt(a/20)} nota(s) de R$ 20,00`)
a = a - parseInt(a/20) * 20
console.log(`${parseInt(a/10)} nota(s) de R$ 10,00`)
a = a - parseInt(a/10) * 10
console.log(`${parseInt(a/5)} nota(s) de R$ 5,00`)
a = a - parseInt(a/5) * 5
console.log(`${parseInt(a/2)} nota(s) de R$ 2,00`)
a = a - parseInt(a/2) * 2
console.log(`${a} nota(s) de R$ 1,00`)
