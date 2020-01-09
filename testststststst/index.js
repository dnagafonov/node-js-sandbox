require(`colors`);
const EventEmitter = require(`events`);

const value = 12;
console.log(value);
console.log(`lalala2`.rainbow);
console.log(`lalala3`);
console.log(`lalala4`);

class StartupEmitter extends EventEmitter {
    constructor(){
        super();
        setImmediate(() => {
            this.emit(`startup`, `hello`);
        })
    }
}

const startup = new StartupEmitter();
startup.on(`uncauthException`, err => console.error(err));

