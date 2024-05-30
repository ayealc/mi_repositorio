document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    const targetCount = 250;
    const duration = 3000; // Duración en milisegundos (3 segundos en este ejemplo)
    const interval = duration / targetCount;


    let currentCount = 0;
    const timer = setInterval(() => {
        currentCount++;
        counterElement.textContent = currentCount;


        if (currentCount === targetCount) {
            clearInterval(timer);
        }
    }, interval);


    const imagenes = document.querySelectorAll('.imagen-container img');
    let indiceActual = 0;


    console.log(imagenes);
   
    function mostrarSiguienteImagen() {
        const imagenActual = imagenes[indiceActual];
        const siguienteIndice = (indiceActual + 1) % imagenes.length;
        const siguienteImagen = imagenes[siguienteIndice];


        imagenActual.style.opacity = '0';
        siguienteImagen.style.opacity = '1';
        indiceActual = siguienteIndice;
    }


    imagenes[indiceActual].style.opacity = '1';


    setInterval(mostrarSiguienteImagen, 7000);
});
