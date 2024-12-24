let tasaPEN =Number(15.85);
let tasaUsd =Number(63.40);
let dcto = parseInt(document.querySelector("select").value);
document.querySelector("#precio").addEventListener("keyup", leer);
document.querySelector("select").addEventListener("change", cambio);
document.querySelector("#tasaPen").value=tasaPEN;
document.querySelector("#tasaUsd").value=tasaUsd;

function cambio() {
    dcto = parseInt(document.querySelector("select").value);
    leer();
}

function leer() {
    (document.querySelector("#precio").value)
    ? calcular()
    : vaciar();
}

function vaciar() {
    //document.querySelector("#descuento").value="";
    document.querySelector("#bsEquivalentes").value="";
    document.querySelector("#total").value="";
}

function calcular() {
    let cantidad = Number(document.querySelector("#precio").value);
    let descuento = Number((cantidad*(dcto/100)).toFixed(2));
    let bsEquivalentes = Number(cantidad*tasaUsd);
    let total = Number((bsEquivalentes / tasaPEN).toFixed(2));
    //document.querySelector("#descuento").value=descuento;
    document.querySelector("#total").value=total;
    document.querySelector("#bsEquivalentes").value=bsEquivalentes;
}