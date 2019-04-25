

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
    "use strict";
    discriminant = Math.pow(b, 2) - 4 * a * c;
    if (discriminant < 0) {
        console.log('Корней нет');
    } else if (discriminant === 0) {
        x = -b / (2 * a);
        console.log(x);
        return x;
    } else if (discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log(x1, x2);
        return x1, x2;
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
        return years;       
    } else if (years < 18) {
        console.log('Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!');
        return years;
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
    let summarks, avMark;
    if (marks.length > 5) {
        console.log('Оценок больше 5');
        marks.slice(0, 5);
          for (let j = 0; j < marks.length; j++) {
              summarks += marks[i]; 
          }
         avMark = summarks / marks.length;
         return marks, avMark;
    } if else (marks.length < 5) {
        for (let j = 0; j < marks.length; j++) {
            summarks += marks[i]; 
        }
       avMark = summarks / marks.length;
       return marks, avMark;
    }
}
