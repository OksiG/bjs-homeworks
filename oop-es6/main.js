//Задание 1
class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durabilityInitial = durability;
        this.range = range;
    }

    takeDamage(damage) {
        this.durabilityNow = this.durabilityInitial - damage;

        if (this.durabilityNow < 0) {
            this.durabilityNow = 0;
        }

        return this.durabilityNow;
    }

    getDamage() {
        if (this.durabilityNow >= this.durabilityInitial * 3 / 10) {
            return this.attack;
        } else if (this.durabilityNow === 0) {
            return 0;
        } else {
            return this.attack / 2;
        }
    }

    isBroken() {
        if (this.durabilityNow < 0) {
        return true;
        } else if (this.durabilityInitial < 0) {
            return true;
        } else {
            return false;
        }
    }
}

const sword = new Weapon('Старый меч', 20, 10, 1);

const arm = new Weapon('Рука', 1, Infinity, 1);

const bow = new Weapon('Лук', 10, 200, 3);

sword.takeDamage(5);
console.log(sword);

//Задание 3
class StudentLog {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (grade < 1 && grade > 5) {
            alert(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
        }
    
        return grade.length;
    }

    getAverageBySubject(subject) {
        let getAverage = 0;
        let sum = 0;
        for (let i = 0; i < grade.length; i++) {
            sum += grade[i];
            getAverage = sum / grade.length;
        }
        return getAverage;
    }
}

const log = new StudentLog('Олег Никифоров');

console.log(log);
console.log(log.getName());
console.log(log.addGrade(3, 'algebra'));