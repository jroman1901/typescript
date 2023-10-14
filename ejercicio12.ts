interface Cuadrado
{
    lado:number;
    color?:string;

}

function CacularCuadrado(datos:Cuadrado):number{
    let a= datos.lado *2;
    return a;

}

let daC = CacularCuadrado({lado:2,color:'amarillo'});
console.log(daC);
