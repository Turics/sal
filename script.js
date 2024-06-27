
    // Selecciona todos los elementos summary dentro de los detalles de la clase .menu
    document.querySelectorAll('.menu > summary').forEach(summary => {
      summary.addEventListener('click', function() {
        // Encuentra el elemento details padre
        var details = this.parentElement;
        
        // Alternar la clase 'active' en el elemento details
        details.classList.toggle('active');
      });
    });
