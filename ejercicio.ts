let nombre:string  = "JOSE VINICIO PEÑA";
let direccion:string = "UMG";
function saludo(nombre)
{
    return "saludo " +nombre + direccion;
}
document.getElementById("encabezado").innerHTML=saludo(nombre);


