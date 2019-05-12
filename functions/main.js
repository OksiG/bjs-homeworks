
//Задание 1
function getSolutions( a, b, c ) {
    let d = Math.pow(b, 2) - 4 * a * c;
    if (d < 0) {
        let answer = {
            roots: [],
            D: d
        }
        return answer;
    } else if (d === 0) {
        let x1 = -b / (2 * a);
        let answer = {
            roots: x1,
            D: d 
        }
        return answer;
    } else if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        let x =  [x1, x2]
        let answer = {
            roots: x,
            D: d 
        }
        return answer;
    }
}
console.log(getSolutions(1, 2, 3));

function showSolutionsMessage( a, b, c ) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log('Уравнение не имеет вещественных корней');
    } else if (result.D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
    } else if (result.D > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}
console.log(showSolutionsMessage(1, 2, 3));

//Задание 2
function getAverageScore( data ) {
    let counter = 0;
    let sumSubject = 0;
    let sumAverage = 0;
    let average = 0;
    let a;

    for (let key in data) {
        a = {
            key: averageRating(data[key])
        };
        console.log(a);
        sumSubject = counter++;
        sumAverage += averageRating(data[key]);
    };

    //alert(`сумма ср. оценок: ${sumAverage}, сумма предметов: ${sumSubject}`);
   
    average = sumAverage / sumSubject;

return a, average;
}

function averageRating(marks) {
    let averageRating = 0;
    let sumMarks = 0;
    for (let i = 0; i < marks.length; i++) {
        sumMarks += marks[i];
    }
    averageRating = sumMarks / marks.length;
    return averageRating;
}

console.log(getAverageScore({
    algebra: [ 2, 4, 5, 2, 3, 4],
    geometry: [ 2, 4, 5],
    russian: [ 3, 3, 4, 5],
    physics: [ 5, 5],
    music: [ 2, 2, 6],
    english: [ 4, 4, 3],
    poetry: [ 5, 3, 4],
    chemistry: [ 2],
    french: [ 4, 4]
}));

//Задание 3
function getPersonData( secretData ) {
    return {
        firstName: returnName(secretData.aaa),
        lastName: returnName(secretData.bbb)
    };
}

function returnName(number) {
    if (number === 0) {
        return 'Родриго';
    } else if (number === 1){
        return 'Эмильо';
    }
}

console.log(getPersonData ({
    aaa: 1,
    bbb: 1
}));


