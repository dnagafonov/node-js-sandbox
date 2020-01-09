const fs = require(`fs`);

fs.readFile(__filename, `r`, (err, data) => {
    if(err){
        return console.error(err.message);
    }
    return console.log(data);
})