//Задание 1
class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durabilityInitial = durability;
        this.range = range;
        this.durabilityNow = this.durabilityInitial;
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
        return this.durabilityNow === 0;
    }
}

class bow extends Weapon {
    constructor(name, attack, durability, range) {
        super(name, attack, durability, range)
    }
}

class Weapon2 extends Weapon {
    constructor(name, versionweapon, attack, durability, range) {
        super(name, attack, durability, range)
        this.versionweapon = versionweapon;
    }
}

const sword = new Weapon('Меч', 25, 500, 1);

const arm = new Weapon('Рука', 1, Infinity, 1);

const bow = new Weapon('Лук', 10, 200, 3);

const knife = new Weapon('Нож', 5, 300, 1);

const crosier = new Weapon('Посох', 8, 300, 2);

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
        let arrGrade = [];
        
        arrGrade.push(grade);

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