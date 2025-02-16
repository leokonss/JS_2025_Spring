// Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает
// вниз на 2 метра. За сколько дней она доползет до вершины стены.

let position = 0;
let dayDist = 3;
let nightDrop = 2;
let wallHeight = 5;
let days;

function daysDuration(position, dayDist, nightDrop, wallHeight) {
    let days = 0;

    while (position < wallHeight) {
        days++;
        position += dayDist;
        if (position < wallHeight) {
            position -= nightDrop;
        }
    }
    return days;
}

console.log(daysDuration(position, dayDist, nightDrop, wallHeight));