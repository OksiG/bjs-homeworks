//Задание 1

function compareArrays( arr1, arr2 ) {
    return arr1.length !== arr2.length
      ? false
      : arr1.every((n, i) => n === arr2[i]);
};

compareArrays([8, 9], [6]); // false, разные значения
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); // false, разные значения
compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); // false, разные значения
compareArrays([1, 2, 3], [2, 3, 1]); // false, разные индексы, хотя и одинаковые значения
compareArrays([8, 1, 2], [8, 1, 2]); // true

function memoize (fn, limit) {
    let results = [];

    return function (arg1, arg2) {
        const args = [arg1, arg2];

        if (results.length === 0) {
            results.push({
                args,
                result: fn (arg1, arg2),
            });
            return fn (arg1, arg2);
        } else {
            const search = results.find(element => compareArrays(element.args, args));

            if (search) {
                console.log('Результат находится в памяти');
                return search.result;
            } else {
                let result = fn (arg1, arg2);
                results.push ({
                    args,
                    result
                });

                if (results.length > limit) {
                    results.shift();
                }
                return result;
            };
        };
    };
};

const fn = (a, b) => {
    console.log('Результат не находится в памяти');
    return a + b;
}

const mSum = memoize( fn, 10 );
