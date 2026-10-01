// El invitado elige cuántas personas asistirán con los botones − / +.
// Mínimo 1, máximo 3 por invitación.
const MIN_PERSONAS = 1;
const MAX_PERSONAS = 3;
const NUMERO_WHATSAPP = '51958385424';

let cantidad = MIN_PERSONAS;

const numeroPases = document.getElementById('numero-pases');
const btnMenos = document.getElementById('btn-menos');
const btnMas = document.getElementById('btn-mas');
const btnConfirmar = document.getElementById('btn-confirmar');
const btnDeclinar = document.getElementById('btn-declinar');

function enlaceWhatsApp(mensaje) {
    return 'https://wa.me/' + NUMERO_WHATSAPP + '?text=' + encodeURIComponent(mensaje);
}

function actualizar() {
    numeroPases.textContent = cantidad;
    btnMenos.disabled = cantidad <= MIN_PERSONAS;
    btnMas.disabled = cantidad >= MAX_PERSONAS;

    const detalle = cantidad === 1 ? '1 persona' : cantidad + ' personas';
    btnConfirmar.href = enlaceWhatsApp('Hola Melissa y Alfredo, confirmo con mucha alegría mi asistencia (' + detalle + '). ¡Estoy feliz de acompañarlos en este día tan especial! 🤍');
    btnDeclinar.href = enlaceWhatsApp('Hola Melissa y Alfredo, lamentablemente no podré asistir.');
}

btnMenos.addEventListener('click', function () {
    if (cantidad > MIN_PERSONAS) { cantidad--; actualizar(); }
});

btnMas.addEventListener('click', function () {
    if (cantidad < MAX_PERSONAS) { cantidad++; actualizar(); }
});

actualizar();
