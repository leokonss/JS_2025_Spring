import readline from 'readline-sync';

// Напишите программу по согласованию отпуска в зависимости от месяца. Если месяц “July” или “August”, то программа
// должна показать - “approved”, если другие месяцы, то - “denied”.

const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
    'November', 'December'];

let month = readline.question('Enter a month of your vacation: ');

if (monthArr.includes(month)) {
    if (month === monthArr[6] || month === monthArr[7]) {
        console.log('Your vacation has been approved!');
    } else {
        console.log('Your vacation has been denied!');
    }
} else {
    console.log('Error! Enter correct month!');
}