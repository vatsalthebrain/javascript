let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate)//object

let createDate = new Date(2025,0,23)
console.log(createDate.toDateString());


let createDate1 = new Date("01-10-2024")
console.log(createDate1.toDateString());

let MyTimeStamp = Date.now()
console.log(MyTimeStamp);

let myDate1 = new Date()
console.log(myDate1);
console.log(myDate1.getMonth());
console.log(myDate1.getDay());