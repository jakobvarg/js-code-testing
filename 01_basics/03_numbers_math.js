const score = 400
console.log(score)

let balance = new Number(100)
console.log(balance)
console.log(balance.toString())
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const numPrecision = 23.4395425
console.log(numPrecision.toPrecision(4));

const numHundreds = 100000000;
console.log(numHundreds.toLocaleString());
console.log(numHundreds.toLocaleString("en-IN"));

//+++++++++++++++++++ Math ++++++++++++++++++++//
console.log(Math.round(numPrecision));
const numAbsolute = -456
const numHighLow = 4.3
console.log(Math.abs(numAbsolute));
console.log(Math.ceil(numHighLow));
console.log(Math.floor(numHighLow));
console.log("Minimum is: " + Math.min(9, 4, 19, 11, 3, 33));
console.log("Maximum is: " + Math.max(9, 4, 190, 11, 3, 33, 1));
console.log("Random Number: "+ Math.random());
console.log("Random Number between 1 to 10: "+ Math.floor((Math.random()*10) + 1));

//display random number from 10 to 20
const numMin = 10
const numMax = 20
console.log("Random Numbers between 10 and 20: " + Math.floor(Math.random() * ((numMax - numMin) + 1) + numMin));
