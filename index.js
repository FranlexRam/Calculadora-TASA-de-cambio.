let tasaPEN =Number(16.52);
let tasaUsd =Number(66.99);

//Para recibir
document.querySelector("#precio").addEventListener("keyup", leer);
document.querySelector("#tasaPen").value=tasaPEN;
document.querySelector("#tasaUsd").value=tasaUsd;

//Para enviar
document.querySelector("#precioEnviar").addEventListener("keyup", leerEnviar);

//Para enviar
function leerEnviar() {
    (document.querySelector("#precioEnviar").value)
    ? calcularEnviar()
    : vaciarEnviar();
}
function vaciarEnviar() {
    document.querySelector("#bsEquivalentesEnviar").value="";
    document.querySelector("#totalEnviar").value="";
}
function calcularEnviar() {
    let cantidadEnviar = Number(document.querySelector("#precioEnviar").value);
    let bsEquivalentesEnviar = Number((cantidadEnviar*tasaPEN));
    let totalEnviar = Number(((cantidadEnviar*tasaPEN)/tasaUsd).toFixed(2));
    document.querySelector("#totalEnviar").value=totalEnviar;
    document.querySelector("#bsEquivalentesEnviar").value=bsEquivalentesEnviar;
}


//Para recibir
function leer() {
    (document.querySelector("#precio").value)
    ? calcular()
    : vaciar();
}
function vaciar() {
    document.querySelector("#bsEquivalentes").value="";
    document.querySelector("#total").value="";
}
function calcular() {
    let cantidad = Number(document.querySelector("#precio").value);
    let bsEquivalentes = Number(cantidad*tasaUsd);
    let total = Number((bsEquivalentes / tasaPEN).toFixed(2));
    document.querySelector("#total").value=total;
    document.querySelector("#bsEquivalentes").value=bsEquivalentes;
}