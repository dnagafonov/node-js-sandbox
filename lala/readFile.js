const fs = require(`fs`);
const asyncRainbowText = require(`./util/async-rainbow-text`);

let equals = (a, b) => {
    if(a.length == b.length){
        for (let i = 0; i < a.length; i++) {
            if(a[i] !== b[i])
                return 0;
        }
        return 1;
    }
    return 0;
}
// fs.readFile(__filename, `r`, (err, data) => {
//     if(err){
//         return console.error(err.message);
//     }
//     return console.log(data);
// })

// let lalal = async () => {
//     console.log(`-`);
//     await asyncRainbowText(`lalla`, 1000);
//     console.log(`-`);
//     console.log(`-`);
// }

// lalal();

function setFromString(word){
    let arr = [];
    word.toLowerCase().split(``).map(el => arr.includes(el) ? null : arr.push(el));
    return arr.sort();
}

function anagrams(word, words) {
    word = word.toLowerCase().split(``).sort().join(``);
    words = words.filter(el => el.split(``).sort().join(``) == word);
    return words;
}
//console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));

function likes(names) { 
    switch (names.length) {
        case 0:
            return "no one likes this";
        case 1:
            return `${names[0]} likes this`;
        case 2:
            return `${names[0]} and ${names[1]} like this`;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default:
            return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`; 
    }
}
//console.log(likes(["lina", "lasla", "Piter", "Lina", "Laila"]));


function getSum( a,b ){
    let c = Math.min(a,b);
    if(a != b){
        for (let i = c; i != Math.max(a,b); ++i)
            c += i + 1;
    }
    return c;
}

function array_diff(a, b) {
    return a.filter(el => b.includes(el) ? null : el);
}

array_diff();
console.log(getSum(1,5));
