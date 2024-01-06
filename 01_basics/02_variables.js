const accountID = 14452
let accountEmail = "jakobvargis@gmail.com"
var accountPassword = "a324#@!"
accountCity = "Kochi"
let accountState

// accountID = 21442 not allowed as declared as constant
accountEmail = "jv@jv.com"
accountPassword = "123456#@!"
accountCity = "Ernakulam"


console.log(accountID);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(accountState);

/*
its preferrable not to use 'var' and instead use 'let' as there are issues arsing in functional scope and block scope.
*/

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])
