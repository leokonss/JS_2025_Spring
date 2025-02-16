// Используя switch, напишите программу перевода дней недели из цифр в названия (перевести дни 1-7 в Пон-Вос)

const dayNumber = 6;
let day = '';

switch (dayNumber) {
    case 1:
        day = "Понедельник";
        break;
    case 2:
        day = "Вторник";
        break;
    case 3:
        day = "Среда";
        break;
    case 4:
        day = "Четверг";
        break;
    case 5:
        day = "Пятница";
        break;
    case 6:
        day = "Суббота";
        break;
    case 7:
        day = "Воскресенье";
        break;
    default:
        day = "Ошибка: введите число от 1 до 7";
        break;
}

console.log(day);
