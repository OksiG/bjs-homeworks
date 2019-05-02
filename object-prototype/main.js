function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    // код для задачи №1 писать здесь
    let now = Date.now();
    new Date(1993, 0, 26, 12, 00);
    let birthday = Date.now(Date);
    let diff = now - birthday;
    let age = diff / Date.now();
    if ( age >= 18) {
       return 'Клиент совершеннолетний';
    } else {
        return 'Клиент НЕ совершеннолетний';
    }   
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    // код для задачи №2 писать здесь
    getAnimalSound.prototype = initPrintAnimalSound();
    if (animal === undefined) {
        return null;
    } else if (animal !== undefined) {
        return sound;
    }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    // код для задачи №3 писать здесь
    let sumMarks = 0;
    for (let i = 0; i < marks.length; i++) {
        sumMarks += marks[i];
    }
    let average = sumMarks / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}
console.log(getAverageMark(1,2,3,4,5));