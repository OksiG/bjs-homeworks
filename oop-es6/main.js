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
      this.versionWeapon = 'Лук';  
      this.attack = 15;
      this.durabilityInitial = '-';
      this.range = 4;
      this.durabilityNow = this.durabilityInitial;      
    }   
}

class Axe extends Sword {
    constructor() {
      super();   
      this.name = 'Секира';    
      this.versionWeapon = 'Меч';  
      this.attack = 27;
      this.durabilityInitial = 800;
      this.range = '-';
      this.durabilityNow = this.durabilityInitial;      
    }   
}

class CrosierOfStorm extends Sword {
    constructor() {
      super();   
      this.name = 'Посох Бури';    
      this.versionWeapon = 'Посох';  
      this.attack = 10;
      this.durabilityInitial = '-';
      this.range = 3;
      this.durabilityNow = this.durabilityInitial;      
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
        let a = {};
        
        arrGrade.push(grade);

        for (let key in subject) {
            a[key] = arrGrade
        }

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