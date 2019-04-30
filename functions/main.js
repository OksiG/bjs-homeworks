
//Задание 1
function getSolutions( a, b, c ) {
    let d = Math.pow(b, 2) - 4 * a * c;
    if (d < 0) {
        return 'D:' + d;
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
        let x = [x1, x2];
        let answer = {
            roots: x,
            D: d 
        }
        return answer;
    }
}
console.log(getSolutions(1, 2, 1));

function showSolutionsMessage( a, b, c ) {
    let result = getSolutions();
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result}`);
}
console.log(showSolutionsMessage(1, 2, 1));

//Задание 2
function getAverageScore(schoolSubject, ...data) {
    let text = `${schoolSubject}`;    
    for (let i = 0; i < data.length; i++) {
            text += `${data[i]}`
        }
            console.log (text);
    };
getAverageScore('algebra:', [ 2, 4, 5, 2, 3, 4]);

//Задание 3
function getPersonData( secretData ) {
    let firstName = aaa;
    let lastName = bbb;
        function returnName (aaa, bbb) {
            if (aaa && bbb === 0) {
                aaa = 'Родриго';
                bbb = 'Родриго';
                console.log(aaa, bbb);
                return aaa, bbb;
            } else if (aaa === 0 && bbb === 1) {
                aaa = 'Родриго';
                bbb = 'Эмильо';
                console.log(aaa, bbb);
                return aaa, bbb;
            } else if (aaa === 1 && bbb === 0) {
                aaa = 'Эмильо';
                bbb = 'Родриго';
                console.log(aaa, bbb);
                return aaa, bbb;
            } else if (aaa === 1 && bbb === 1) {
                aaa = 'Эмильо';
                bbb = 'Эмильо';
                console.log(aaa, bbb);
                return aaa, bbb;
            }
        }
    secretData = {
        firstName,
        lastName
    }
}

function returnName( aaa, bbb) {
    aaa = 1 ? 'Эмильо' : 'Родриго';
    bbb = 1 ? 'Эмильо' : 'Родриго';
    
    return aaa, bbb;
}
returnName(1, 0);

