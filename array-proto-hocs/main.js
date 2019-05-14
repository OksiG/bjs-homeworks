function compareArrays( arr1, arr2 ) {
    for (let i = 0; i < arrLength( arr1, arr2 ); i++) {
        if (arr1[i] === arr2 [i]) {
            return true;
        } else {
            return false;
        }
    }
}

function arrLength ( arr1, arr2 ) {
    let j = 0; 

    if (arr1.length <= arr2.length) {
        j = arr2.length;
        return j;
    } else if (arr2.length <= arr1.length) {
        j = arr1.length;
        return j;
    }
}

compareArrays([8, 9], [6]); // false, разные значения
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); // false, разные значения
compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); // false, разные значения
compareArrays([1, 2, 3], [2, 3, 1]); // false, разные индексы, хотя и одинаковые значения
compareArrays([8, 1, 2], [8, 1, 2]); // true

function memoize(fn, limit) {
    const results = [];

    for (result in results) {

        results[i] = {
            args,
            result
        }
        
    }
    return mSum;
}

const sum = (a, b) => a + b;

const mSum = memoize(sum, 2); // 2 результата хранятся в памяти

// Вызов этих функций даёт один и тот же результат
sum( 3, 4 ); // 7
/* 
  разница только в том, что mSum запоминает результат (7)
  и повторно не делает вычисления
 */
mSum( 3, 4 ); // 7