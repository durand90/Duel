class Card{
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, resilience){
        super(name, cost)
        this.resilience = resilience;
        this.power = power;
    }

    attack(target) {
        console.log(this.name + " attacked " + target.name)
        return target.resilience - this.power;
    }

}


class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target) {
        if(target instanceof Unit) {
            console.log(this.text);
        
        if(this.magnitude >= 0) {
            if(this.stat === "resilience") {
                target.resilience += this.magnitude
            }
            else {
            target.power += this.magnitude
        }
        }
        else {
            if(this.stat === "resilience") {
                target.resiience += this.magnitude
            }
            else {
                target.power += this.magnitude
            }
        }
    }
    else {
        throw new Error("Target must be a unit!")
    }
}
}

const redBeltNinja = new Unit("red belt ninja", 3, 3, 4);
const blackBeltNinja = new Unit("black belt ninja", 4, 5, 4);


const hardAlgorithm = new Effect("Hard algorithm", 2, "increase target's resiliece by 3", "resilience", +3);
const unhandledPromiseRejection = new Effect("unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", +2);

console.log(redBeltNinja.attack(blackBeltNinja));

hardAlgorithm.play(redBeltNinja); 
unhandledPromiseRejection.play(redBeltNinja); 
pairProgramming.play(blackBeltNinja); 

// console.log(redBeltNinja.attack(blackBeltNinja));