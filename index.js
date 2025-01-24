let dias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
let meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];

let tasaPEN =Number(16.65);//valor que Lau va a modificar diariamente
let tasaUsd =Number(69.13);//Valor modificado por la API (dolar paralelo)

//Fecha y hora en tiempo real
let fecha = document.querySelector("#fecha");
let hora = document.querySelector("#hora");

let fechaActual= new Date();
let dia = fechaActual.getDate();
let diaLetras = fechaActual.getDay();
let mes = fechaActual.getMonth();
let anio = fechaActual.getFullYear();

fecha.innerHTML=`${dias[diaLetras]} ${dia} de ${meses[mes]} del ${anio}`;

//Reloj
function actualizarHora() {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    const tiempoString = `${horas}:${minutos}:${segundos}`;
    hora.textContent = tiempoString;
}

// Actualizar la hora cada segundo
setInterval(actualizarHora, 1000);

// Inicializar el reloj al cargar la página
actualizarHora();


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
    let bsEquivalentesEnviar = Number((cantidadEnviar*tasaPEN).toFixed(2));
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
    let bsEquivalentes = Number((cantidad*tasaUsd).toFixed(2));
    let total = Number((bsEquivalentes / tasaPEN).toFixed(2));
    document.querySelector("#total").value=total;
    document.querySelector("#bsEquivalentes").value=bsEquivalentes;
}



// ... (código existente)

// Función para obtener las tasas de cambio desde la API de ExchangeRate-API
async function obtenerTasasDeCambio() {
    // const apiKey = '48cb3671fc81643e3c949ce5'; // clave API
    const respuesta = await fetch(`https://pydolarve.org/api/v1/dollar?page=enparalelovzla`);
    const data = await respuesta.json();

    // Actualizar las tasas en la interfaz
    tasaUsd = data.monitors.enparalelovzla.price;

    console.log(tasaPEN);//valor que Lau va a modificar diariamente
    console.log(tasaUsd);//Valor modificado por la API (dolar paralelo)

    
    document.querySelector("#tasaUsd").value = tasaUsd;
}

// Llamar a la función al cargar la página y luego cada cierto tiempo (por ejemplo, cada hora)
obtenerTasasDeCambio();
setInterval(obtenerTasasDeCambio, 3600000); // Cada hora