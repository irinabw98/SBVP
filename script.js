<script>
    function showIframe(url) {
        // Cambiar la fuente del iframe al enlace que se pasa como parámetro
        document.getElementById('iframe-display').src = url;
        document.getElementById('iframe-container').style.display = 'block'; // Mostrar el iframe
    }

    function closeIframe() {
        // Cerrar el iframe
        document.getElementById('iframe-container').style.display = 'none';
        document.getElementById('iframe-display').src = ''; // Limpiar la URL para detener el contenido
    }
</script>
