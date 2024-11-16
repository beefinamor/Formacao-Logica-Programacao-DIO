class hero {
    constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    }

    atacar() {
    let ataque;
    switch (this.tipo) {
        case "maga":
        ataque = "magia";
        break;
        case "guerreira":
        ataque = "espada";
        break;
        case "monge":
        ataque = "marciais";
        break;
        case "ninja":
        ataque = "shuriken";
        break;
        default:
        throw new error("Tipo de herói inválido");
    }
    console.log(`A ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi = new hero("Emilie Baudelaire", 21, "guerreira");
heroi.atacar(); 