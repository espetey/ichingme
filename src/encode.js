// import md5 from 'blueimp-md5';
const md5 = require('blueimp-md5');

//863dda1124f2b438c607f5b8d00e8511f6f8d206b21aad3b9c460b8c5221e31b

const currentHash = '863dda1124f2b438c607f5b8d00e8511f6f8d206b21aad3b9c460b8c5221e31b';
const lastHash = '783aa3ef1b45121ee5bc33acb6c5986d6132d04cf20c85ba256b155b2c196006';
const thridthing = '809e342e6d919181164de08252a326c8ae5ad9e1b5683c7368b762fcba6ff9d5';

const hashed = md5(currentHash, lastHash);
console.log(hashed);

const binaryHash = breakdown(hashed);
console.log(binaryHash.length);
console.log(binaryHash);

// const right = Buffer.from(thing, 'base64').toString();
// const right1 = Buffer.from(thing).toString('base64');
// const right2 = Buffer.from(right1).toString('base64');
// const right3 = Buffer.from(right2).toString('base64');
// const right4 = Buffer.from(right3).toString('base64');
// const right5 = Buffer.from(right4).toString('base64');
// const teww = Buffer.from(thing, 'hex');

// console.log('what');

// const ugh = thing * 2;
// const done = breakdown(thing);
// console.log(done.length);
// console.log(done);
// split in half
// const halved = done.splice(0, (done.length / 2));
// breakdown2(done);

// console.log('00000000000000000000000000000000000000000');
// const another = breakdown(anotherThing);
// // console.log(another.length);
// // console.log(breakdown2(another));
// breakdown2(another);

// console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
// const thirdo = breakdown(thridthing);
// breakdown2(thirdo);

function breakdown2(text) {
  return text.forEach(www => {
    // console.log('ff');
    // console.log(parseInt(www));
    const eiei = parseInt(www);
    const esssss = eiei % 4;
    console.log(esssss + 6);
  });
}

function breakdown(text) {
  return (
    Array
      .from(text)
      .reduce((acc, char) => acc
        .concat(char
          .charCodeAt()
          .toString(2)), [])
      .map(bin => {
        return '0'.repeat(8 - bin.length) + bin
      })
    // .join(' ')
  )
}

// function binarize(text) {
//   const length = text.length;
//   const output = [];
//   for (let i = 0; i < length; i++) {
//     const bin = text[i].charCodeAt().toString(2);
//     output.push(Array(8-bin.length+1).join('0') + bin);
//   }
//   return output.join('');
// }

// console.log('1 ::: ' + thing);
// console.log('2 ::: ' + right);
// console.log('3 ::: ' + right1);
// console.log('4 ::: ' + right2);
// console.log('5 ::: ' + right3);
// console.log('6 ::: ' + right4);
// console.log('7 ::: ' + right5);


/**
 * 
 * 00 - 6
 * 01 - 7
 * 10 - 8
 * 11 - 9
 01 10 00 11
  7  8  6  9  
 
'01100011',143
  '00111000',70
  '00110001',61
  '00110000',60
  '01100011',143
  '01100101',145
  '00110011',63
  '00110011',
  '01100101',
  '00110000',
  '00110001',
  '01100101',
  '00111001',
  '01100001',
  '01100110',
  '00111001',
  '00110101',
  '00110001',
  '01100100',
  '00111000',
  '00110100',
  '01100011',
  '01100101',
  '01100100',
  '00110010',
  '01100010',
  '00110001',
  '00110001',
  '00111001',
  '00110001',
  '01100100',
  '01100100' 

 */