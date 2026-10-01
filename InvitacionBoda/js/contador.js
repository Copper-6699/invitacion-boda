// Contador regresivo
const fechaEvento = new Date('2026-11-20T18:30:00-05:00').getTime();

function actualizarContador() {
    var ahora = new Date().getTime();
    var distancia = fechaEvento - ahora;

    if (distancia > 0) {
        var dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        var horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        var segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        document.getElementById("dias").innerHTML = dias;
        document.getElementById("horas").innerHTML = horas;
        document.getElementById("minutos").innerHTML = minutos;
        document.getElementById("segundos").innerHTML = segundos;
    } else {
        document.getElementById("dias").innerHTML = "0";
        document.getElementById("horas").innerHTML = "0";
        document.getElementById("minutos").innerHTML = "0";
        document.getElementById("segundos").innerHTML = "0";
        document.querySelector(".countdown-title").innerHTML = "¡Llegó el gran día!";
    }
}

actualizarContador();
setInterval(actualizarContador, 1000);
