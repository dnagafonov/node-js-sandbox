// const fs = require(`fs`);
// const asyncRainbowText = require(`./util/async-rainbow-text`);

// let equals = (a, b) => {
//   if (a.length == b.length) {
//     for (let i = 0; i < a.length; i++) {
//       if (a[i] !== b[i]) {
//         return 0;
//       }
//     }
//     return 1;
//   }
//   return 0;
// };

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

function setFromString(word) {
  let arr = [];
  word.toLowerCase().split(``).map((el) => arr.includes(el) ? null : arr.push(el));
  return arr.sort();
}

function anagrams(word, words) {
  word = word.toLowerCase().split(``).sort().join(``);
  words = words.filter((el) => el.split(``).sort().join(``) == word);
  return words;
}
// console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));

function likes(names) {
  switch (names.length) {
    case 0:
      return `no one likes this`;
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
// console.log(likes(["lina", "lasla", "Piter", "Lina", "Laila"]));


function getSum(a, b) {
  let c = Math.min(a, b);
  if (a != b) {
    for (let i = c; i != Math.max(a, b); ++i) {
      c += i + 1;
    }
  }
  return c;
}

function array_diff(a, b) {
  return a.filter((el) => b.includes(el) ? null : el);
}

function humanReadable(seconds) {
  let sec = Math.trunc(seconds % 60);
  let min = Math.trunc((seconds / 60) % 60);
  let hour = Math.trunc((seconds / 3600) % 300);
  const stringFormat = (number) => {
    return number.toString().length === 1 ? `0${number}` : number;
  };
  return `${stringFormat(hour)}:${stringFormat(min)}:${stringFormat(sec)}`;
}
// console.log(humanReadable(86400));

function longestSlideDown(pyramid) {
  return pyramid.reduceRight((prev, curr) =>
    curr.map((val, i) => val + Math.max(prev[i], prev[i + 1]))
  )[0];
}

console.log(longestSlideDown([[3],
  [7, 4],
  [2, 4, 6],
  [8, 5, 9, 3]]));

// console.log(longestSlideDown(
//     [[75],
//       [95, 64],
//       [17, 47, 82],
//       [18, 35, 87, 10],
//       [20, 4, 82, 47, 65],
//       [19, 1, 23, 75, 3, 34],
//       [88, 2, 77, 73, 7, 63, 67],
//       [99, 65, 4, 28, 6, 16, 70, 92],
//       [41, 41, 26, 56, 83, 40, 80, 70, 33],
//       [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
//       [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
//       [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
//       [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
//       [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
//       [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]]
// ));

let someArr = [1, 2, 3, 4, 5];
let someObj = {
  name: `AnyName`,
  surname: `AnySurname`
};

const objectBasicMethods = (object) => {
  console.log(`Object.keys:`);
  console.log(Object.keys(object));
  console.log(`Object.values: `);
  console.log(Object.values(object));
  console.log(`Object.entries: `);
  console.log(Object.entries(object));
};

// objectBasicMethods(someObj);
// console.log(getSum(1,5));

let persistence = (num) => {
    let count = 0;
    while(num.toString().length > 1){
        num = num.toString().split(``).reduce((result, el) => result * el);
        count++;
    }
    return count;
 }

 function multiplies3and5(number){
    let res = 0;
    for (let i = 0; i < number; i++)
        if(i % 3 === 0 || i % 5 === 0)
            res += i;
    return res;
}

console.log(persistence(39));

module.exports = {
    longestSlideDown,
    persistence,
    multiplies3and5,
}