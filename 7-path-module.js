// Built-In Module
 
 // Path Module - It allows  us to interact with our file system easily
 const path = require('path');

 console.log(path.sep); // path seprator property for a file path (/)

 const filePath = path.join('/content', 'subcontent' , 'text.txt'); // this will return a simple path of given file
 console.log(filePath);
 
 const base =  path.basename(filePath); // this will retun the base file name of the given path
 console.log(base);
 
const absolute = path.resolve(__dirname , 'content' , 'subcontent' , 'text.txt'); // this will give the absolute or the correct path to our resouse by giving it the correct file path order
console.log(absolute);