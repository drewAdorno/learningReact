class Card{
    constructor(name, cost){
        this.name=name
        this.cost=cost
    }
}

class Unit extends Card{
    constructor(name, cost, power, res) {
        super(name, cost)
        this.power=power
        this.res=res
    }
    attack(target){
        console.log(`${this.name} attacked ${target.name} for ${this.power}`);
        target.res-=this.power
    }
    
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost)
        this.text=text
        this.stat=stat
        this.magnitude=magnitude
    }
    play(target){
        if(target instanceof Unit){
            target[this.stat]+=this.magnitude;
            console.log(`${this.name} is played on ${target.name}`);
            console.log(this.text);
        }
        else{
            throw new Error('Target must be a unit')
        }

    }
}