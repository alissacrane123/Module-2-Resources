class Dragon {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    breathesFire() {
        return `${this.name} breaths fire everywhere! BURN!!!!`;
    }

    static getDragons(...dragons) {
        return dragons.map(dragon => dragon.name);
    }
}

class NiceDragon extends Dragon {
    constructor(name, color, lifeGoal, friend) {
        super(name, color);
        this.lifeGoal = lifeGoal;
        this.friend = friend;
    }
    hasLifeGoals() {
        this.lifeGoal.forEach( goal => {
            console.log(`${this.name} likes to ${goal}`)
        });
    }
    helpsPeople() {
        return `${ this.name } helps his friend ${this.friend}`;
    }
}

class EvilDragon extends Dragon {
    constructor(name, color, causesTrouble, nemesis) {
        super(name, color);
        this.causesTrouble = causesTrouble;
        this.nemesis = nemesis;
    }
    dontInviteHimOverForDinner() {
        this.causesTrouble.forEach(trouble => {
            console.log(`${this.name} will ${trouble}`)
        });
    }

    burnsNemesis() {
    return `${this.name} destroys the ${this.nemesis} with fire! WHOOOSH!!!`;
    }
}





const puff = new NiceDragon("Puff", "green", ["live by the sea", "frolict in the autumn mist", "help small schildren"], "Jackie Paper");
console.log(puff);
puff.hasLifeGoals();
console.log(puff.helpsPeople());

const toothless = new NiceDragon("Toothless", "black", ["save the town of Burke", 'fly with a kid on his back', "hang out with vikings"], "Hiccup");
console.log(toothless);
toothless.hasLifeGoals();
console.log(toothless.helpsPeople());
console.log(toothless.breathesFire());   //Good dragons can still breathe fire!

const smaug = new EvilDragon("Smaug", "black", ["take over your mountain kingdom", "steal all your dwarven gold", "burn down your floating village"], "Dwarf King");
console.log(smaug);
smaug.dontInviteHimOverForDinner();
console.log(smaug.breathesFire());
console.log(smaug.burnsNemesis());

const drogon = new EvilDragon("Drogon", "black-red", ["eat all your livestock", "burn down your castle in Westeros", "burn your father and brother"], "Night King");
console.log(drogon);
drogon.dontInviteHimOverForDinner();
for(let i = 0; i <5; i++){
    console.log(drogon.breathesFire());
}
console.log(drogon.burnsNemesis());

const dragons = Dragon.getDragons(puff, toothless, smaug, drogon);
console.log(dragons);
