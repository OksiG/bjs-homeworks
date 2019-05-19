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

class Bow extends Weapon {
    constructor() {
      super('Лук', 10, 200, 3);   
    }   
  }

class Arm extends Weapon {
  constructor() {
    super('Рука', 1, Infinity, 1);   
  }   
}

class Sword extends Weapon {
    constructor() {
      super('Меч', 25, 500, 1);   
    }   
}

class Knife extends Weapon {
    constructor() {
      super('Нож', 5, 300, 1);   
    }   
}

class Crosier extends Weapon {
    constructor() {
      super('Посох', 8, 300, 21);   
    }   
}

class LongBow extends Bow {
    constructor() {
      super();   
      this.name = 'Длинный лук';    
      this.attack = 15;
      this.range = 4;   
    }   
}

class Axe extends Sword {
    constructor() {
      super();   
      this.name = 'Секира';      
      this.attack = 27;
      this.durabilityInitial = 800;
      this.durabilityNow = this.durabilityInitial;  
    }   
}

class CrosierOfStorm extends Sword {
    constructor() {
      super();   
      this.name = 'Посох Бури';    
      this.attack = 10;
      this.range = 3;     
    }   
}


const sword = new Weapon('Меч', 25, 500, 1); 

const arm = new Weapon('Рука', 1, Infinity, 1);

const bow = new Weapon('Лук', 10, 200, 3);

const knife = new Weapon('Нож', 5, 300, 1);

const crosier = new Weapon('Посох', 8, 300, 2);

sword.takeDamage(5);
console.log(sword);

const bow = new Bow();

//Задание 3//
class StudentLog {
    constructor(name) {
        this.name = name;
        this.journal = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {

        if (grade < 1 && grade > 5) {
            alert(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
            return this.journal[subject].length;
        } 
        
        if (this.journal[subject] === undefined) {
            this.journal[subject] = [];
        }
        
        this.journal[subject].push(grade);
           
        return this.journal[subject].length;
    }

    getAverageBySubject(subject) {
        let sumGrade = 0;
        let getAverage = 0;

        if (this.journal[subject] === undefined) {
            return 0;
        }
        
        for (let i = 0; i < this.journal[subject].length; i++) {
            sumGrade += this.journal[subject][i];
            getAverage = sumGrade / this.journal[subject].length;
        }
        
        return getAverage;
    }

    getTotalAverage() {
        let counter = 0;
        let sumSubject = 0;
        let sumAverage = 0;
        let totalAverage = 0;

        for (let key in this.journal) {
            if (this.journal[key] === undefined) {
                return 0;
            } 

            this.journal[key] = this.getAverageBySubject(this.journal[key]);
            sumAverage += this.journal[key];
            sumSubject = counter++;
        }
    
        totalAverage = sumAverage / sumSubject;

        return totalAverage;
    }
}


const log = new StudentLog('Олег Никифоров');

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getTotalAverage()); // 3,75
