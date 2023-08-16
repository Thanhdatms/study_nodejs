const EvenEmitter = require('events');

const customEmitter = new EvenEmitter();

customEmitter.on('response', () => {
    console.log(`data recieved`);
});

customEmitter.addListener('response', (name, id) => {
    console.log(`My name is ${name} with id ${id} `)
})
customEmitter.emit('response', "dat", "12")

