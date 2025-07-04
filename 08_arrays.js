const myArr = [1,2,3,4,5,true,"vatsal"]
const myArr1 = [1,2,3,4,5]

const myArr2 = new Array(1,2,3,4)

console.log(myArr1[0]);
myArr1.push(6)
myArr1.push(7)
myArr1.pop()
myArr1.unshift(7)// not generally used as we have to push every elemnt to right and it increases the load also
myArr1.shift()
console.log(myArr1);
console.log(myArr1.includes(3));

//.join() is used to convert to string

// slice , splice -> in slice we dont inlcude range but in splice we do inlcude range ,

// in slice original array does not get changed but in splice original array gets changed or manipulated 

const marvelheroes = ["thor","ironman"]

const dcheroes = ["superman","batman"]

console.log(marvelheroes.concat(dcheroes));// join two arrays 

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)// used to covert to a single array 

console.log(real_another_array);

console.log(Array.isArray("Vatsal"));
console.log(Array.from("Vatsal"));//create an array from string 


