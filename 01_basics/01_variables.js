const accountId = 12345  // declaration of constant 
let accountEmail = "rashid@google.com"  //  declaration of variable 
var accountPassword = "12345"
accountCity = "Bareilly"
let accountState;

// accountId = 12312312  this is prohibited beacuse of the property of const whose work is to declare constant.

console.log(accountId);

accountPassword = "6396247292"
accountCity = "Pilibhit"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// prefer not to use var because of issue in block scope  and functional scope 