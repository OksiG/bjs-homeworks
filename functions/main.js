
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
        let answer = {
            root1: x1,
            root2: x2,
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
        console.log(`Уравнение имеет два корня. X₁ = ${result.root1}, X₂ = ${result.root2}`);
    }
}
console.log(showSolutionsMessage(1, 2, 3));

//Задание 2
function getAverageScore( data ) {
    data = {
        schoolSubject: text,
        marks: []
    }
    let text = `${schoolSubject}`;    
    for (let i = 0; i < data.length; i++) {
            text += `${data[i]}`
        }
            console.log (text);
    };
getAverageScore({'algebra: [ 2, 4, 5, 2, 3, 4]});

//Задание 3
function getPersonData( secretData ) {
    secretData = {
        aaa: 1,
        bbb: 1
    }
    let x = returnName(secretData.aaa);
    let y = returnName(secretData.bbb)
    let a = {
        firstName: x,
        lastName: y
    }
    console.log(a.firstName, a.lastName);
    return a;
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


