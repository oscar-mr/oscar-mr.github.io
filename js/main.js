document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('video');
    var sectionCard = document.querySelector('.section__card');

    video.addEventListener('ended', function() {
        // Cuando el video inicial ha terminado
        video.style.display = 'none'; // Oculta el video inicial
        sectionCard.style.display = 'block'; // Muestra la sección deseada
    });
});