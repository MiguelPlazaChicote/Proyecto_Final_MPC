
// FETCH FOOTER

// Llamamos al método fetch dándole cómo argumento la dirección components/footer.html
fetch('./components/footer.html')

// Entonces: se recupera la respuesta y se procesa como texto
.then(response => response.text())

// Entonces: utilizamos los datos importantes ya procesados utilizando el objeto de datos para ejecutar una función
.then (data => {

   // le asignamos a la etiqueta footer que queramos el HTML interno del valor del objeto anterior
  document.querySelector('footer').innerHTML = data;

})

// CUSTOM CURSOR

// Declaramos las variables para el custom cursor
let cursor = document.querySelector('.cursor');
let cursorinner = document.querySelector('.cursor2');
let a = document.querySelectorAll('a');

// Rastrea en movimiento del ratón en el eje x y en el eje, del cursor grande que se mueve con más lentitud
document.addEventListener('mousemove', function(e){

  let x = e.clientX;
  let y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`

})

// Rastrea en movimiento del ratón en el eje x y en el eje, del cursor pequeño que este sigue el movimiento del propio ratón
document.addEventListener('mousemove', function(e){

  let x = e.clientX;
  let y = e.clientY;
  cursorinner.style.left = x + 'px'
  cursorinner.style.top = y + 'px'

})


// Para que el cursor del ratón, interactúe con los elementos al hacer click
document.addEventListener('mousedown', function(){

  cursor.classList.add('click')
  cursorinner.classList.add('cursorinnerhover')
  
})

// Para que el cursor del ratón, interactúe con los elementos después de hacer click
document.addEventListener('mouseup', function(){

  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')

})

a.forEach(item => {

  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  })

  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  })

})

// MENU RESPONSIVE

// Declaramos la variable menuResponsive
let menuResponsive = document.querySelector('#header-content');

// Se crea un evento con el id abrir, que este evento se activara cuando le hagamos click, para abrir el menú responsive
abrir.addEventListener("click", () => {
  document.body.classList.toggle('menu-abierto');
  menuResponsive.classList.toggle("visible");
})

// igual que el anterior pero este es para cerrar el menú responsive, el id es cerrar
cerrar.addEventListener("click", () => {
  document.body.classList.toggle('menu-abierto');
  menuResponsive.classList.toggle("visible");
})
