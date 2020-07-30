class Ninja
{
    constructor(name, health, strength=3, speed=3)
    {
        this.name=name
        this.health=health
        this.strength=strength
        this.speed=speed
    }
    sayName()
    {
        console.log(this.name);
        return this
    }
    showStats()
    {
        console.log(`Name: ${this.name}`)
        console.log(`Strength: ${this.strength}`)
        console.log(`Speed: ${this.speed}`)
        console.log(`Health: ${this.health}`)
        return this
    }
    drinkSake()
    {
        this.health+=10
        return this
    }   
}
class Sensei extends Ninja
{
    constructor(name)
    {
        super(name,200,10,10)
        this.wisdom=10
    }
    speakWisdom()
    {
        console.log('What one programmer can do in one month, two programmers can do in two months');
        return this
    }
    showStats()
    {
        super.showStats()
        console.log(`Wisdom: ${this.wisdom}`)
        return this
    }
}

bill=new Sensei('Bill')

bill.showStats()