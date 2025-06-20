const amount = 12;
if(amount < 10)
    {
        console.log("number is smaller");
    }else{
        console.log("number is greater");
    }

console.log(`Het it's my forst node app!!!`);
 
// Exportn and Import module
const sayHi = require("./4-utils");
const names = require("./3-name")

// Using expost and import modules objects.
console.log('Hi Sussan');
sayHi(names.john);
sayHi(names.peter);

// Mind-Grenade of how Node wrap module into Functions
require('./5-mind-grenade') // will invoke the module which is wrap inisde a funtion
