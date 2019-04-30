"use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    //return x;
    discriminant = Math.pow(b, 2) - 4 * a * c;
    if (discriminant < 0) {
        console.log('Корней нет');
        return 'Корней нет';
    } else if (discriminant === 0) {
        x = -b / (2 * a);
        console.log(x);
        return x;
    } else if (discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        x = [x1, x2];
        console.log(x);
        return x;
    }
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №2 писать здесь
    //console.log(result)
    //return result;
    let yearOfBirthday = dateOfBirthday.getFullYear();
    let now = new Date();
    let yearNow = today.getFullYear();
    let years = yearNow - yearOfBirthday;
    if (years >= 18) {
        console.log('Не желаете ли олд-фэшн, ${name}'); 
        return 'Не желаете ли олд-фэшн, ${name}';       
    } else if (years < 18) {
        console.log('Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!');
        return 'Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!';
    }
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №3 писать здесь
    //return averageMark;
    let summarks = 0;
    let averageMark = 0;
    if (marks.length > 5) {
        console.log('Оценок больше 5');
        marks.splice(5);
    }
    for (let i = 0; i < marks.length; i++) {
        summarks += marks[i]; 
    }
   averageMark = summarks / marks.length;
   return averageMark;
}
