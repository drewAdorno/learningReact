class Ninja{
    constructor(name, health, speed=3, strength=3){
        this.name=name
        this.health=health
        this.speed=speed
        this.strength=strength
    }

    sayName(){
        console.log(`Hi my name is ${this.name}`);
        return this
    }

    sayStats(){
        console.log(`Name: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Strength: ${this.strength}`);
        console.log(`Speed: ${this.speed}`);
        return this
    }
    drinkSake(){
        console.log(`${this.name} drank Sake and gained 10 health`);
        this.health+=10
        return this
    }
}
module.exports=Ninja