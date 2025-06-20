// Built-In Module
  
 // FS Module (File system module)- SYNC
 const {readFileSync , writeFileSync} = require('fs') // this is called Destructuring means we are gettting fucntions out of the FS Module 

 // const fs = require('fs') it is also same as we create a variable of our module anf then with the help of that refreing varinble we can access funtions of that module

 // this mehtod is used to read the file data 
 const first = readFileSync('./content/first.txt', 'utf8'); // two prameter one is path and ohter is type if we don't provide this type utf8 it will give us some buffer data
 const second = readFileSync('./content/second.txt', 'utf8');

console.log(first , second);

// this method is used to create a new and write data inside it (we give parameter the file name is file is  presented it will only write the data inside it and if not then it will create a new file with same name that is pass to it as a parameter)
writeFileSync('./content/result-sync.txt' , `here is the result : ${first} , ${second} ,{flag : 'a'}`);// this flat will append all the process happennd in this method paramater 