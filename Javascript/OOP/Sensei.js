const Ninja= require('./Ninja')


class Sensei extends Ninja{
    constructor(name, health=200, speed=10, strength=10) {
        super(name, health, speed, strength)
        this.wisdom=10
    }
    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.");
        return this
    }
    drinkSake(){
        super.drinkSake()
        return this
    }
    sayStats(){
        super.sayStats()
        console.log(`Wisdom: ${this.wisdom}`);
    }
}

const drew = new Sensei('Drew')

drew.sayStats()