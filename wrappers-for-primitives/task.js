function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    // код для задачи №1 писать здесь
    //return totalAmount;
    'use strict';
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }
    if (isNumeric (percent) === false) {
        console.log('Данные указаны не верно! Введите процент заново');
    } else if (percent > 100) {
        console.log('Данные указаны не верно! Процентная ставка не может быть более 100%')
    }  else if (isNumeric (contribution) === false) {
        console.log('Данные указаны не верно! Введите первоночальный взнос заново');
    } else if (isNumeric (amount) === false) {
        console.log('Данные указаны не верно! Введите сумму кредита заново');
    } else if (isNumeric (date) === false) {
        console.log('Данные указаны не верно! Введите срок кредита заново');
    } 

    let AmountWithoutContribution = amount - contribution;
    let p = percent / 100 / 12;
    let payMounth = AmountWithoutContribution * (p + p / ((Math.pow( (1 + p), date)) - 1));
    let totalAmount = payMounth * date;
    console.log(Math.ceil(totalAmount * 100) / 100);
    return totalAmount;
    }
calculateTotalMortgage (10, 1000, 50000, 12);


function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    //return greeting;
    'use strict';
    let greeting = name;
    if ( name === '') {
        name = 'Аноним';
    } else if ( name === undefined) {
        name = 'Аноним';
    } else if ( name === null) {
        name = 'Аноним';
    }

    console.log(`Привет, мир! Меня зовут ${name}`);
    return greeting;
}
getGreeting('');