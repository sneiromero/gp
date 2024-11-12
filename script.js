let index = 0;

function cambiarImagen(n) {
    const imagenes = document.querySelectorAll('.carrusel-1 .imagenes img');
    index += n;

    if (index >= imagenes.length) {
        index = 0;
    } else if (index < 0) {
        index = imagenes.length - 1;
    }

    const desplazamiento = -index * 100; // Mueve la imagen en función del índice
    document.querySelector('.carrusel-1 .imagenes').style.transform = `translateX(${desplazamiento}%)`;
}
