let equals = (a, b) => {
  if (a.length == b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i])
        return 0;
    }
    return 1;
  }
  return 0;
};

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

function longestSlideDown(pyramid) {
  return pyramid.reduceRight((prev, curr) =>
    curr.map((val, i) => val + Math.max(prev[i], prev[i + 1]))
  )[0];
}

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

function matrixAddition(a, b){
    return a.map((row, i) => {
        return row.map((el, j) => {
            return el += b[i][j];
        })
    })
}

function duplicateEncode(word){
  word = word.toLowerCase().split(``);
  // return word.map(el => word.reduce((r,e) => r + (e === el ? 1 : 0), 1) > 1 ? el.join(``).split(el).join(`)`) : el.join(``).split(el).join(`(`));
}

const numTo256 = (num, pow) => pow ? num * 256 ** pow: num;

const ipsBetween = (start, end) => {
  start = start.split(`.`).map(el => Number(el)).reverse();
  end = end.split(`.`).map(el => Number(el));
  return end.reverse().reduce((res, el, i) => res + numTo256(el-start[i], i), 0);
};

function depth(obj) {
  if(obj === null || Array.isArray(obj) || !Object.keys(obj).length) return 0;
  let times = 1;
  Object.values(obj).map(el => {
    if(typeof el === 'object')
        times = Math.max(times, depth(el) + 1);
  });
  return times;
};

let uniqueInOrder = (iterable) => {
  
}

const sumDigPow = (a, b) => {

}

const cake = (x, y) => (x * 70 / 100) < y.split(``).reduce((prev, curr, index) => prev + ((index % 2 === 0) ? curr.charCodeAt(0) : 0), 0) ? `Fire!` : `That was close!`;

const mygcd = (a, b) => {
  while(b){
    
  }
  return a;
}

const factorial = n => {
  if(n < 0 && n > 13) throw new RangeError();
  let temp = 1;
  while(n!==1){
    n--;
    temp *= n;
  }
  return temp;
}

const fizzbuzz = n => {
  let arr =[];
  for (let i = 1; i != n + 1; i++) {
    switch (true) {
      case i % 5 === 0 && i % 3 === 0:
        arr.push("FizzBuzz");
        break;
      case (i % 3 === 0):
        arr.push("Fizz");
        break;
      case i % 5 === 0:
        arr.push("Buzz");
        break;
      default:
        arr.push(i);
        break;
    }
  }
  return arr;
}

const count = s => { 
  let res = {};
  s = s.split(``);
  const keys = [...new Set(s)].sort();
  keys.map(key => {
    let times = 0;
    s.map(el => {
      if(key === el){
        res[key] = ++times;
      }
    })
  })
  return res;
}

module.exports = {
    longestSlideDown,
    persistence,
    multiplies3and5,
    matrixAddition,
    duplicateEncode,
    ipsBetween,
    depth,
    sumDigPow,
    cake,
    count
}