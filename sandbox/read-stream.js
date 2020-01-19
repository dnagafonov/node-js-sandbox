const fs = require(`fs`);

const stream = fs.createReadStream(`${__dirname}/someFileToRead.txt`);

stream.on(`data`, (data) => console.log(`File data: \n ${data}`)).
       on(`error`, (e) => console.error(e));