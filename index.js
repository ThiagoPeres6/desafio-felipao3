class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(tipo){
        if (tipo === "guerreiro"){
            let ataque = "espada"
            console.log("O " + tipo + " atacou usando " + ataque)
        }else if(tipo === "mago"){
            let ataque = "magia"
            console.log("O " + tipo + " atacou usando " + ataque)
        }else if(tipo === "ninja"){
            let ataque = "shuriken"
            console.log("O " + tipo + " atacou usando " + ataque)
        }else if(tipo === "monge"){
            let ataque = "artes marciais"
            console.log("O " + tipo + " atacou usando " + ataque)
        }
    }
}

let heroi1 = new heroi("Obi Wan", "30", "guerreiro")
let heroi2 = new heroi("Mace Windu", "100", "mago")
let heroi3 = new heroi("Anakin", "20", "ninja")
let heroi4 = new heroi("Yoda", "60", "monge")

heroi1.atacar(heroi1.tipo)
heroi2.atacar(heroi2.tipo)
heroi3.atacar(heroi3.tipo)
heroi4.atacar(heroi4.tipo)
