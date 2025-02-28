// Función para cargar el link en el iframe
function cargarLink(url) {
    const iframe = document.getElementById('iframe-link');
    const container = document.getElementById('link-container');

    // Establecer el enlace en el iframe
    iframe.src = url;

    // Mostrar el contenedor
    container.classList.add('active');
}
