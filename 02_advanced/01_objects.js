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
