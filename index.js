let tasaPEN =Number(15.85);
let tasaUsd =Number(63.40);

document.querySelector("#precio").addEventListener("keyup", leer);
document.querySelector("#tasaPen").value=tasaPEN;
document.querySelector("#tasaUsd").value=tasaUsd;



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