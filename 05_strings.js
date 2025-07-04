const name = "vatsal"
const rep = 50
console.log(name + rep)

console.log(`hello my name is ${name} and my repo count is ${rep} `);// -> string inerpolation

const gameName = new String("vatsal")

console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("t"))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const anotherString1 = "         vatsal       "
console.log(anotherString1)
console.log(anotherString1.trim())

const string2 = "vatsal&arora"
console.log(string2.replace('&','*'))

