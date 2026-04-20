function mostrarSeccion(seccion) {
    let secciones = document.querySelectorAll('.seccion');

    secciones.forEach(sec => {
        sec.classList.remove('activa');
    });

    document.getElementById(seccion).classList.add('activa');
}