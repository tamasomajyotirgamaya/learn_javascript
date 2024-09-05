const accountId = 14422;
let accountEmail = "tush.h@gmail.com";
var accountPassword = "12312";

accountCity = "Jaipur";


accountEmail = "tushar1@gmail.com";
accountPassword = "8892";
accountCity = "bengaluru";
let accountState;
// accountId = 2; //not allowed

// console.log(accountId);

/*
avoid using var: because it does not have scope functionality: interview question
*/
console.table([accountEmail, accountCity, accountPassword, accountId, accountState])