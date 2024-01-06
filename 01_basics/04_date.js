let myDate = new Date()
console.log(myDate);
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())

//what is the data type of Date() => object
console.log(typeof myDate);

//how to create a particular date variable Date(year, month, day)
let myCreatedDate = new Date(1975, 6, 9)
console.log("My birthday is on: "+myCreatedDate.toDateString());

//create time with date(year, month(0 is jan), day, hour, minute, seconds)
let myCreatedDateTime = new Date(1975, 6, 9, 21, 36, 33)
console.log("I was born on: "+myCreatedDateTime.toLocaleString());
