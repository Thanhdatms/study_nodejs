const {writeFileSync} = require('fs')

for( let i = 0; i < 100000; i++){
    writeFileSync("./subfolder/big1.txt", `hello ${i}\n`, {flag: 'a'}, 'utf8');
}