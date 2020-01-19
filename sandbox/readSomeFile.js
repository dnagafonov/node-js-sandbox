const fs = require(`fs`);
const {promisify} = require(`util`);

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const unlink = promisify(fs.unlink);
const mkdir = promisify(fs.mkdir);
const rmdir = promisify(fs.rmdir);

const readSomeFile = (text) => {

    const dir = `${__dirname}/lala-autocreated-dir`;
    const file = `${dir}/newfile.txt`;
    let exist = false;
    
    mkdir(dir).
    catch((error) => {
        if(error.code === "EEXIST"){
            exist = true;
            return Promise.resolve();
        }
        return Promise.reject(error);
    }).
    then(() => writeFile(file, text)).
    then(() => readFile(file)).
    then(data => console.log(data)).
    then(() => exist ? Promise.resolve : rmdir(dir)).
    catch(e => console.error(e));
}

readSomeFile("2", false);