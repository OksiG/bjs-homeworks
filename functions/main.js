
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
    data = {
        schoolSubject: [...marks]
    }
    
    return {
        schoolSubject: averageRating(...marks),
        average: function () {
            let average = 0;
            let sumSchoolSubject = 0;
            let sumAverageRating = 0;
            for (let i = 0; i < schoolSubject.length; i++) {
                sumSchoolSubject += schoolSubject[i];
                sumAverageRating += averageRating[i];
            }
            average = sumAverageRating / sumSchoolSubject;
            return average;
        }
    };
};
console.log(getAverageScore({algebra: [ 2, 4, 5, 2, 3, 4]}));

function averageRating(...marks) {
    let averageRating = 0;
    let sumMarks = 0;
    for (let i = 0; i < marks.length; i++) {
        sumMarks += marks[i];
    }
    averageRating = sumMarks / marks.length;
    return averageRating;
}
console.log(averageRating(1,2,3,4,5));

//Задание 3
function getPersonData( secretData ) {
    secretData = {
        aaa: 1,
        bbb: 1
    }
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


