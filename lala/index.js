const readline = require(`readline`);
require(`colors`);

const rl = readline.createInterface({
    prompt: `OHAI>`,
    input: process.stdin,
    output: process.stdout
})

rl.prompt();

rl.on(`line`, line => {
    line = line.split(` `);

    switch (line[0]) {
        case `pause`:
            rl.pause();
            WhileFunc(`*`, 1000);
            rl.resume();
            break;
        case `rainbow`:
            console.error(line[1].rainbow);
            break;
        case `random`:
            console.log(line[1].random);
            break;
        case `question`:
            rl.question('What do you think of Node.js? ', (answer) => {
                rl.pause();
                console.log(`Thank you for your valuable feedback: ${answer}`);
                rl.close();
            });
            break;
        default:
            console.log(`Invalid command`);
            break;
    }
}).on(`close`, () => {
    console.log(`Bye!`);
    process.exit(0);
}).on(`error`, err => {
    console.error(err);
    process.exit(1);
});

const WhileFunc = (value, n) => {
    let text = ``;
    while(text.length < n){
        text += value;
        console.log(text);
    }
    return text;
}