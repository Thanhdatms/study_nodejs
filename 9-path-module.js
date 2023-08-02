const {readFileSync, writeFileSync, write} = require('fs');

const first  = readFileSync('./subfolder/first.txt', 'utf8');

const second  = readFileSync('./subfolder/second.txt', 'utf8');

console.log(first, second)

writeFileSync(
    './subfolder/result.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'}
)