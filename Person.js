class Person {
    constructor(name, health, weapon){
        this.name = name;
        this.health = 100;
        this.weapon = null;
    }
    equipWeapon(weapon) {
        this.weapon = weapon;
    }
    attack(person) {
        person.health = person.health = this.weapon.damage;
    };
};