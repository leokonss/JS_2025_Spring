import readline from 'readline-sync';

// Напишите простенький калькулятор (*, /, +, -). У вас должны быть две переменные для исходных чисел и одна для оператора.
// В зависимости от оператора, должно происходить то или иное арифметическое действие и выводиться результат в консоль.
// Проверьте ваш код с разными значениями, положительными, отрицательными, дробными и т.д.

function selectFirstNum() {
    let num1 = readline.question("Enter your 1st number: ");
    while (!/^-?\d+(\.\d+)?$/.test(num1)) {
        num1 = readline.question("Error! Enter correct 1st number: ");
    }
    return parseFloat(num1);
}

function selectSecondNum() {
    let num2 = readline.question("Enter your 2nd number: ");
    while (!/^-?\d+(\.\d+)?$/.test(num2)) {
        num2 = readline.question("Error! Enter correct 2nd number: ");
    }
    return parseFloat(num2);
}

function selectMathOperation() {
    let operationArr = ['+', '-', '*', '/'];
    let operation = readline.question("Enter math operation: ");
    while (!operationArr.includes(operation)) {
        operation = readline.question("Error! Enter correct math operation from '+', '-', '*', '/': ");
    }
    return operation;
}

function calculate(num1, num2, operation) {
    if (num2 === 0 && operation === '/') {
        return 'Error! You can not divide by 0!';
    }

    switch (operation) {
        case '*':
            return `Result: ${num1} * ${num2} = ${multiply(num1, num2)}`;
        case '/':
            return `Result: ${num1} / ${num2} = ${divide(num1, num2)}`;
        case '+':
            return `Result: ${num1} + ${num2} = ${add(num1, num2)}`;
        case '-':
            return `Result: ${num1} - ${num2} = ${subtract(num1, num2)}`;
    }
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

console.log(calculate(selectFirstNum(), selectSecondNum(), selectMathOperation()));
