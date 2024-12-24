let dcto = parseInt(document.querySelector("select").value);
document.querySelector("#precio").addEventListener("keyup", leer);
document.querySelector("select").addEventListener("change", cambio);

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
    document.querySelector("#descuento").value="";
    document.querySelector("#total").value="";
}

function calcular() {
    let cantidad = Number(document.querySelector("#precio").value);
    let descuento = Number((cantidad*(dcto/100)).toFixed(2));
    let total = `${cantidad} - ${descuento} = ${Number((cantidad - descuento).toFixed(2))}`;
    document.querySelector("#descuento").value=descuento;
    document.querySelector("#total").value=total;
}