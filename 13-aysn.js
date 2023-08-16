const { readFile, writeFile } = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);


// const getText = (path) => {
//     return new Promise ((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err){
//                 reject(err);
//             }else{
//                 resolve(data);
//             }
//         })
//     })

// }


const start = async() =>{
    try{
        const first = await readFilePromise('./subfolder/first.txt', 'utf8')
        const second = await readFilePromise('./subfolder/second.txt', 'utf8')
        await writeFilePromise("./subfolder/result-mind.txt", `This is awsome first ${first}`, 
        { flag: 'a'}
        )
        console.log(first, second);
    } catch(error){
        console.log(error);
    }
    
}
start()

// getText('./subfolder/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log('co loi'))



// ------

// const http = require('http')

// const server = http.createServer()

// server.on('request', (req, res) => {
//     res.end("welcome");
// })

// server.listen(5000)