//examples of arrays

let arrFruits = ["Banana", "Orange", "Apple", "Guava", "Grapes", "Pineapple"]
console.log("The initial array contains: "+arrFruits);

//removes the last element of the array
arrFruits.pop()
console.log("After using pop(): "+arrFruits);

//adds a new element at the end of the array
arrFruits.push("Watermelon")
console.log("Have added to end of array a new fruit: "+arrFruits);

//Replace Orange with Mango, here Orange is has an index 1 and we are asking splice to insert Mango in that index position
arrFruits.splice(1,1, "Mango")
console.log("Replacing Orange with Mango using splice: "+arrFruits)

//Add Nagpur Orange after Mango, here Mango is has an index 1
arrFruits.splice(2,0, "Nagpur Orange")
console.log("Add Nagpur Orange after Mango using splice: "+arrFruits)

//assign the values from Apple to grapes to arrFruitBasket
//here the index of nagpur orance is 2 and grapes is 5
const arrFruitBasket = arrFruits.slice(3,6)
console.log("The fruits added to the arrFruitsBasket are: "+arrFruitBasket);

//every(function()) returns if all the values provided in the array meets a criteria or not. The value returned is boolean (True/False)
const arrAges = [22, 17, 19, 21, 18, 25]
let eligible = arrAges.every(checkTeamEligibility)

//here the value returned is false as the array arrAges contains a value under 18. But if all values were either greater or equal to 18 then the value printed below would have been true.
console.log(eligible);

function checkTeamEligibility(age) {
    return age >= 18;
}

//create a new array to hold the names of all the fruits inside one array
console.log(arrFruits);
console.log(arrFruitBasket);

//here we will concatnate arrFruits with arrFruitBasket into a new arry arrAllFruits
const arrAllFruits = arrFruitBasket.concat(arrFruits)
console.log("All the fruits that me and my friends brought are: "+arrAllFruits)

//but nowadays developers use the 'spread' operator '...' which is more easy and widely used by the younger generation

const marvelHeros = ["Batman", "Superman", "Flash", "Wonderwoman"]
const dcHeros = ["Ironman", "Thor", "Black Widow", "Captain America"]

const newHeros = [...marvelHeros, ...dcHeros]
console.log("The new heros of the world are: "+newHeros);

//in certain cases there will be instances of of an array within an array then we use the flat() method to display or access these arrays

const arrWithin = [1,2,3, [4,5], [6,7,[8,9,10,[11,12,13]]]]
const arrFlat = arrWithin.flat(Infinity)
console.log("The flat out put of arrays within a array "+arrFlat);