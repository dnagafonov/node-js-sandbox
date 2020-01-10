const fs = require(`fs`);
const asyncRainbowText = require(`./util/async-rainbow-text`);


// fs.readFile(__filename, `r`, (err, data) => {
//     if(err){
//         return console.error(err.message);
//     }
//     return console.log(data);
// })

let lalal = async () => {
    console.log(`-`);
    await asyncRainbowText(`lalla`, 1000);
    console.log(`-`);
    console.log(`-`);
}

lalal();