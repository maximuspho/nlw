// Orientado a Objeto

class Poligono {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }

    get area() {
        return this.#calculaArea()
    }

    #calculaArea() {
        return this.altura * this.largura
    }
}

// Criar Objeto

let poligno = new Poligono(50, 60)
console.log(poligno.area)