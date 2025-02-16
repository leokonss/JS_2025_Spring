import readline from 'readline-sync';

// 3 типа кофе
// 3 опции с молоком (животное молоко, растительное, нет молока)
// 3 размера стакана
// цена, которая зависит от размера.

let smallPriceEspresso = 1;
let smallPriceCappuccino = 2;
let smallPriceLatte = 3;
let priceIndexMed = 1.5;
let priceIndexLarge = 2;
let cowMilk = "Cow milk";
let almondMilk = "Almond milk";
let noMilk = "No milk";
let _Espresso = "Espresso";
let _Cappuccino = "Cappuccino";
let _Latte = "Latte";
let typeOfCoffee;
let typeOfMilk;
let coffee;
let milk;
let size;
let price;
let cupSizeString;
let tip;
let tipString;

function coffeeOrder(){
    selectCoffee();
    selectMilk(typeOfCoffee);
    selectSize();
    getFinalPrice(size);
}

function selectCoffee(){
    let whatTypeOfCoffee;
    while (isNaN(typeOfCoffee) || typeOfCoffee < 1 || typeOfCoffee > 3) {
        whatTypeOfCoffee = readline
            .question(`Please select the coffee you would like:
                            Enter 1 for ${_Espresso}
                            Enter 2 for ${_Cappuccino}
                            Enter 3 for ${_Latte}\n`);
        typeOfCoffee = parseInt(whatTypeOfCoffee);
    }

    switch(typeOfCoffee){
        case 1: coffee = _Espresso; price = smallPriceEspresso; break;
        case 2: coffee = _Cappuccino; price = smallPriceCappuccino; break;
        case 3: coffee = _Latte; price = smallPriceLatte; break;
    }
    return typeOfCoffee;
}

function selectMilk(typeOfCoffee){
    let whatTypeOfMilk;
    if (typeOfCoffee == 1) {
        console.log("This type of coffee is made without milk");
    } else {
        while (isNaN(typeOfMilk) || typeOfMilk < 1 || typeOfMilk > 2) {
            whatTypeOfMilk = readline
                .question(`Please select the milk you would like:
                            Enter 1 for ${cowMilk}
                            Enter 2 for ${almondMilk}\n`);
            typeOfMilk = parseInt(whatTypeOfMilk);
        }
    }

    switch(typeOfMilk){
        case 1: milk = cowMilk; break;
        case 2: milk = almondMilk; break;
        default: milk = noMilk;
    }
}

function selectSize(){
    let cupSize;
    while (isNaN(size) || size < 1 || size > 3) {
        cupSize = readline
            .question(`What cup size do you want?
                            Enter 1 for small size
                            Enter 2 for medium size
                            Enter 3 for large size\n`);
        size = parseInt(cupSize);
    }
    return size;
}

function selectTip() {
    let whatTip;
    while (isNaN(tip) || tip < 0 || tip > 3) {
        whatTip = readline
            .question(`Leave a tip?
                            Enter 0 for No tip
                            Enter 1 for 15%
                            Enter 2 for 20%
                            Enter 3 for 25%\n`);
        tip = parseInt(whatTip);
    }
    return tip;
}

function getFinalPrice(size){
    switch(size){
        case 1: cupSizeString = "small"; break;
        case 2: price *= priceIndexMed; cupSizeString = "medium"; break;
        case 3: price *= priceIndexLarge; cupSizeString = "large"; break;
    }

    let tip = selectTip();
    switch(tip){
        case 0: tipString = "No tip."; break;
        case 1: tipString = "Tip - 15%."; price += price*0.15; break;
        case 2: tipString = "Tip - 20%."; price += price*0.20; break;
        case 3: tipString = "Tip - 25%."; price += price*0.25; break;
    }

    console.log(`You chose ${coffee} with ${milk}, ${cupSizeString} size. ${tipString}\nYour receipt: $${price.toFixed(2)}`)
}

coffeeOrder();
