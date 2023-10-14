let a:number = 10;
let b:number = 20;

function imprimir(a:number,b:number)
{
    return a+b;
}
function edad(): number{
    let edad : number = 30;
    return edad;
}

document.getElementById("edad").innerHTML= ""+edad();
document.getElementById("encabezado").innerHTML = ""+imprimir(a,b);