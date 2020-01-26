const fs = require(`fs`);
const { promisify } = require(`util`);

const mkdir = promisify(fs.mkdir);
const rmdir = promisify(fs.rmdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);

const readWrite = async (name, text, type) => {
    const dir = `${__dirname}/auto-created-dir`;
    const fileName = `${dir}/${name}.txt`;
    let created = false;
    try {
        created = true;
    } catch (e) {
        if(e.message !== `EEXIST`) throw e;     
    }
    switch (type) {
        case `write`:
            await writeFile(fileName, text);
            break;
        case `read`:
            await readFile(fileName).then(data => console.log(data.toString()));
            break;
        default:
            throw new Error(`Invalid type`);
            break;
    }
}

readWrite(`test`,`lalalal2002`, `read`).catch(e => console.error(e.message));