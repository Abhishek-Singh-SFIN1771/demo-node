// Built-In Module

// FS Module (File system module) - ASYNC
const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
        const second = result;

        writeFile('./content/result-async.txt', `Here is the result:  ${first} , ${second}`, (err, result) => {
            // if(err)
            // {
            //     console.log(err);
            //     return;
            // }
            // console.log(result); this part is optional but must have to create a call back funtion for working properly of this method
        });
    })
})