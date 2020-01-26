const fs = require(`fs`);

const stream = fs.createReadStream(`${__dirname}/someFileToRead.txt`,{highWaterMark: 1});
const w = fs.createWriteStream(`${__dirname}/fileToWrite.txt`, {highWaterMark: 1});

w.on(`data`, data => console.log(`Chunk: ${data}`)).
  on(`end`, () => console.log(`w ended`));

let readTimes = 0;

stream
    .on(`data`, data => {
        readTimes++;
        console.log(`Times: ${readTimes}, chunk: ${data}`);
    }).
    on(`error`, e => console.log(e.message)).
    on(`end`, () => {
        console.log(`Stream expired`);
    })
stream.pipe(w);