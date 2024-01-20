let caracter = {
    name: "Ioiô",
    age: 31,
    type: {
        0: ["mago", "magia"],
        1: ["guerreiro", "espada"],
        2: ["monge", "artes marciais"],
        3: ["ninja", "shuriken"]
    }
}

createHero(caracter)

function createHero(caracter){
    console.log(`O jogador ${caracter.name}`)
    console.log(`Com a idade de ${caracter.age} anos`)
    console.log("--------")
    console.log("Usou as personsagens:")
}

class attackHero{
    constructor(classHerro, heroStrike){
        this.classHerro = classHerro
        this.heroStrike = heroStrike
    }

    attack(){
        console.log(`-${this.classHerro} para atacar usando ${this.heroStrike}`)
    }
}

let caracterStrikeMage = new attackHero("Mago", "magia")
let caracterStrikeWarrior = new attackHero("Guerreiro", "espada")
let caracterStrikeMonk = new attackHero("Monge", "artes marciais")
let caracterStrikeNinja = new attackHero("Ninja", "shuriken")

caracterStrikeMage.attack()
caracterStrikeWarrior.attack()
caracterStrikeMonk.attack()
caracterStrikeNinja.attack()