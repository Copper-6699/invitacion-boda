// Apertura del sobre: revela la invitación y dispara la música
// en el mismo gesto de clic (requisito de los navegadores para permitir audio).
let sobreAbierto = false;

function openEnv() {
    if (sobreAbierto) return;
    sobreAbierto = true;

    // 1) Música: se llama de inmediato, dentro del propio clic del usuario.
    iniciarMusica();

    // 2) Animación de apertura del sobre
    const wrap = document.getElementById('envWrap');
    wrap.classList.add('abierto');

    // 3) Tras la animación, ocultar la escena del sobre y mostrar la invitación
    setTimeout(() => {
        document.getElementById('envelope-scene').classList.add('closing');
        const contenido = document.getElementById('post-envelope');
        contenido.classList.add('visible');
        //contenido.style.pointerEvents = 'auto';
        // Llevar el scroll arriba del todo para empezar la invitación desde el inicio
        window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    }, 900);
}
