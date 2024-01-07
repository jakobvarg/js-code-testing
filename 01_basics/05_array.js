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
