function copiarTexto(texto) {
    navigator.clipboard.writeText(texto)
        .then(() => {
            mostrarNotificacion("¡Número copiado correctamente!");
        })
        .catch(() => {
            mostrarNotificacion("No se pudo copiar. Inténtalo nuevamente.", true);
        });
}

function mostrarNotificacion(mensaje, error = false) {
    let notificacion = document.getElementById("notificacion-copia");

    if (!notificacion) {
        notificacion = document.createElement("div");
        notificacion.id = "notificacion-copia";
        notificacion.className = "notificacion-copia";
        document.body.appendChild(notificacion);
    }

    notificacion.textContent = mensaje;
    notificacion.classList.toggle("error", error);
    notificacion.classList.add("visible");

    clearTimeout(window.temporizadorNotificacion);

    window.temporizadorNotificacion = setTimeout(() => {
        notificacion.classList.remove("visible");
    }, 2500);
}