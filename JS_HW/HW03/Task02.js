const s = "Hello, my name is John";

console.log('s.length');
console.log(s.length);
console.log('---------------------');

console.log('s.at()');
console.log(s.at());
console.log('---------------------');

console.log('s.charAt(1)');
console.log(s.charAt(1));
console.log('---------------------');

console.log('s.charCodeAt(0)');
console.log(s.charCodeAt(0));
console.log('---------------------');

console.log('s.concat()');
console.log(s.concat(' ', 'White'));
console.log('---------------------');

console.log('s.concat()');
console.log(s.concat(' ', 'White'));
console.log('---------------------');

console.log('s.endsWith()');
console.log(s.endsWith('John'));
console.log('---------------------');

console.log('s.includes()');
console.log(s.includes('name'));
console.log('---------------------');

console.log('s.indexOf()');
console.log(s.indexOf('name'));
console.log('---------------------');

console.log('s.lastIndexOf()');
console.log(s.lastIndexOf('h'));
console.log('---------------------');

console.log('s.padEnd()');
console.log(s.padEnd(52, ' White'));
console.log('---------------------');

console.log('s.padStart()');
console.log(s.padStart(52, 'White '));
console.log('---------------------');

console.log('s.repeat()');
console.log(s.repeat(2));
console.log('---------------------');

console.log('s.replace()');
console.log(s.replace('John', 'Peter '));
console.log('---------------------');

console.log('s.replaceAll()');
console.log(s.replaceAll('l', 'L'));
console.log('---------------------');

console.log('s.slice()');
console.log(s.slice(7, 20));
console.log('---------------------');

console.log('s.split()');
console.log(s.split(' '));
console.log('---------------------');

console.log('s.startsWith()');
console.log(s.startsWith('Hello'));
console.log('---------------------');

console.log('s.substring()');
console.log(s.substring(7, 20));
console.log('---------------------');

console.log('s.substr()');
console.log(s.substr(7, 15));
console.log('---------------------');

console.log('s.toUpperCase()');
console.log(s.toUpperCase());
console.log('---------------------');

console.log('s.toLowerCase()');
console.log(s.toLowerCase());
console.log('---------------------');

let num = 55;
console.log('num.toString()');
console.log(num.toString());
console.log(typeof num.toString());
console.log('---------------------');

let s2 = '   Hello, my name is John   '
console.log('s2.trim()');
console.log(s2.trim());
console.log('---------------------');

console.log('s2.trimEnd()');
console.log(s2.trimEnd());
console.log('---------------------');

console.log('s2.trimStart()');
console.log(s2.trimStart());
console.log('---------------------');
