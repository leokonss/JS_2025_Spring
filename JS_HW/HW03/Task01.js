let s = 'Knowledge of built-in JavaScript methods speeds up a tester’s work.';
// All string methods return a new string. They don't modify the original string.
// Strings are immutable: Strings cannot be changed, only replaced.

console.log('s.charAt()');
console.log(s.charAt());
console.log(s);
console.log('---------------------');

console.log('s.charAt(s.length -1)');
console.log(s.charAt(s.length -1));
console.log(s);
console.log('---------------------');

console.log('s.substring(1, 4)');
console.log(s.substring(1, 4));
console.log(s);
console.log('---------------------');

console.log('s.substr(1, 3)');
console.log(s.substr(1, 3));
console.log(s);
console.log('---------------------');

console.log('s.slice(-3)');
console.log(s.slice(-3));
console.log(s);
console.log('---------------------');

console.log('s.indexOf(\'l\')');
console.log(s.indexOf('l'));
console.log(s);
console.log('---------------------');

console.log('s.lastIndexOf(\'l\')');
console.log(s.lastIndexOf('l'));
console.log(s);
console.log('---------------------');

console.log('s.split(\'of\')');
console.log(s.split('of'));
console.log(s);
console.log('---------------------');

console.log('s.replace(\'l\', \'L\')');
console.log(s.replace('l', 'L'));
console.log(s);
console.log('---------------------');

console.log('s.replaceAll(\'l\', \'L\')');
console.log(s.replaceAll('l', 'L'));
console.log(s);
console.log('---------------------');

console.log('s.toUpperCase()');
console.log(s.toUpperCase());
console.log(s);
console.log('---------------------');

console.log('s.toLowerCase()');
console.log(s.toLowerCase());
console.log(s);
console.log('---------------------');
