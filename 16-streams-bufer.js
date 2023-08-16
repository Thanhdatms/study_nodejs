// using streams reading file

const {createReadStream} = require('fs');

const stream = createReadStream('./subfolder/big.txt', {
    encoding: 'utf8',
    // highWaterMark: 128 * 1024,
});

// deflaut: 64kb
// last buffer - remainder
// highWaterMaker: control size of buffer

stream.on('data', (result) => {
    console.log(result)
})

stream.on('error', (result) => {
    console.log(result);
})


// const http = require('http');
// const fs = require('fs');

// http.createServer((req, res) => {
//         // const text = fs.readFileSync('./subfolder/big1.txt', 'utf8');
//         // res.end(text);
//     const fileStream = fs.createReadStream('./subfolder/big1.txt', 'utf8');
//     fileStream.on("open", ()=>{
//         fileStream.pipe();
//     })
//     fileStream.on("error", (err) => {
//         console.log(err);
//     })
// }).listen(5000)