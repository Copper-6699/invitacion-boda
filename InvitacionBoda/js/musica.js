// Música de fondo: se activa en el mismo clic que abre el sobre.
const audio = document.getElementById('cancion-boda');

audio.loop = true;
audio.volume = 0.6;
audio.setAttribute('playsinline', '');

function iniciarMusica() {
    if (!audio) {
        console.warn('No se encontró el elemento #cancion-boda');
        return;
    }

    const intento = audio.play();

    if (intento !== undefined) {
        intento.catch((err) => {
            console.log(
                'No se pudo iniciar la música automáticamente:',
                err.name
            );
        });
    }
}
