const {readFile, writeFile} = require('fs')
console.log('start');
readFile('./subfolder/first.txt','utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./subfolder/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './subfolder/result.txt',
            `Here is the result of two files : ${first}, ${second}`,
            (err, result) => {
                if(err) {
                    console.log(err);
                    return;
                }
                console.log('done with this task');
            }
        )
    })
}) 

console.log('starting next task')