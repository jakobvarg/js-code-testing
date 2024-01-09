//this is an example for objects 

const person = {
    firstName: "Jakob",
    lastName: "Vargis",
    age: 48,
    eyeColor: "Brown",
    fullName: function(){
        return this.firstName+" "+this.lastName
    }
}

console.log(person["firstName"]);
//the above is the right way to display an object key: value the other method is shown below
console.log(person.lastName);
console.log(person.fullName());

//complex objects with objects inside objects

const myCars = {
    name: "Jakob",
    age: 48,
    cars:[
        {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
        {name:"BMW", models:["320", "X3", "X5"]},
        {name:"Fiat", models:["500", "Panda"]}
      ]
}

// console.log(myCars.cars[0].name);
// console.log(myCars.cars[0].models[0]);

let brandName = ""
let modelName = ""

for(let x in myCars.cars) {
    brandName += myCars.cars[x].name + "\n"
    for(let y in myCars.cars[x].models) {
        modelName += myCars.cars[x].models[y] + "\n"
    }
}

console.log(brandName);
console.log(modelName);
