class Rectangulo {
    public base: number;
    public altura: number;


    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;

    }

    calcularArea():number{
        return this.base* this.altura;
    }
}

let clase: Rectangulo = new Rectangulo(2,2);
console.log(clase.calcularArea());


