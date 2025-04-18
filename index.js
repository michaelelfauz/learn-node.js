// TODO 1
const { EventEmitter} = require('events');

// TODO 2
const myEmitter = new EventEmitter();

const birthdayEventListener = (name) => {
    console.log(`happy birthday ${name}`);
}

myEmitter.on('birthday', birthdayEventListener);

// TODO 4

myEmitter.emit('birthday', 'Michael');