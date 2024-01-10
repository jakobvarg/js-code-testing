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

console.log("\n\n"+"Car brands and their models"+"\n")

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

for(let x in myCars.cars) {
    console.log(myCars.cars[x].name)
        for(let y in myCars.cars[x].models) {
           console.log(" "+myCars.cars[x].models[y])
        }
    console.log("\n")
}

//how to convert objects to JSON

const myBooks = {
    name: "To Kill a Mocking Bird",
    author: "Harper Lee",
    datePublished: new Date()
}

console.log(myBooks);

const myJsn = JSON.stringify(myBooks)
console.log(myJsn);

// to convert an object with a function to JSON
// you need to convert that function into an string

const myTestObjFun = {
    name: "Samson",
    age: function() {
        return 49
    }
}

//we do this to convert the function to string and in turn
//to be able to convert the object into JSON

myTestObjFun.age = myTestObjFun.age.toString()

const strFuncInObj = JSON.stringify(myTestObjFun)
console.log(myTestObjFun);
