// Se controlará lo que se hará en el html
// Se crea una variable y en el querySelector se le pasa la clase que se va a agregar.
// *Se usa document para rescatar del html*
let toggleBtn = document.querySelector('.toggleBtn');
// Se crea otra varible para el contenedor principal.
let container = document.querySelector('.container');

// Ahora, se va manipular el toggleBtn, cada vez que se le de clic al toggleBtn efectuará la función
toggleBtn.onclick = function(){
    // En el container se enlistan todas las clases que se tengan en él y se ubica "toggle".
    // En automáico cuando se activa se pasa a activo y si se vuelve a presionar automáticamente volverá a su estado normal, no se requiere programar lo reverso.
    container.classList.toggle('active');
}