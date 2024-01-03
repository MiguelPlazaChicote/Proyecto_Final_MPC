
// FETCH HEADER



// FETCH FOOTER


fetch('./components/footer.html')

.then(response => response.text())

.then (data => {

    document.querySelector('footer').innerHTML = data;

})

// --- POP UP MENU MOVIL ---

let cuerpo = document.querySelector(".menu-ov");

function MenuDesplegable(){

    cuerpo.classList.toggle("active");

}

// CUSTOM CURSOR

let cursor = document.querySelector('.cursor');
let cursorinner = document.querySelector('.cursor2');
let a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  let x = e.clientX;
  let y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})

// MENU RESPONSIVE

let nav = document.querySelector('#header-content');
let abrir= document.querySelector('#abrir');
let cerrar= document.querySelector('#cerrar');

abrir.addEventListener("click", () => {

    let nav = document.querySelector('#header-content');
    let abrir= document.querySelector('#abrir');
    let cerrar= document.querySelector('#cerrar');

    nav.classList.add("visible")
})

cerrar.addEventListener("click", () => {

    let nav = document.querySelector('#header-content');
    let abrir= document.querySelector('#abrir');
    let cerrar= document.querySelector('#cerrar');

    nav.classList.remove("visible")
})

// SLIDER_02

let sliderItem = document.querySelector(".section-tendencias-01__img")
let sliderImages = [
    "https://images.unsplash.com/photo-1700539944790-5fc5406f55ad?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1700539944694-f44e08b51735?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
]
let sliderNum = 0;

sliderItem.src = sliderImages[0]

let sliderTexts = [
  { 
    titulo: "Dano",
    descripcion: "Dano es un rapero español conocido por su habilidad lírica, su versatilidad en el rap y su presencia en la escena hip hop en España. Nacido en Zaragoza, ha estado involucrado en la música durante varios años, consolidándose como una figura importante en el rap español. Su estilo se caracteriza por letras agudas y reflexivas que abordan temas diversos, desde experiencias personales hasta observaciones sociales y críticas culturales. Dano ha lanzado varios álbumes y mixtapes a lo largo de su carrera, mostrando una evolución constante en su arte y explorando diferentes sonidos dentro del espectro del rap. Además de su trabajo musical en solitario, ha colaborado con otros artistas de renombre en la escena del rap español, lo que ha contribuido a su reconocimiento y a la expansión de su audiencia. Su impacto en el rap español se ha sentido a través de su música innovadora y su contribución al género, estableciéndose como una figura influyente en la escena hip hop en España."
  },
  {
    titulo: "Ill Pekeño y Ergo Pro",
    descripcion: "Ill Pekeño: Es un rapero madrileño \nreconocido por su habilidad lírica y su estilo enérgico. Ha ganado popularidad por sus letras perspicaces que abordan temas sociales, políticos y personales. Su música a menudo contiene mensajes profundos y reflexivos. Ha colaborado con varios artistas y ha sido parte importante de la escena del rap en España. \nErgo Pro: Otro rapero español, Ergo Pro, se destaca por su enfoque introspectivo en sus letras. Su estilo lírico a menudo explora temas emocionales y personales, ofreciendo una perspectiva introspectiva sobre la vida y la sociedad. Ha sido reconocido por su autenticidad y por su capacidad para transmitir mensajes significativos a través de su música."
  },
  // Agrega más objetos con títulos y descripciones para cada imagen
];

function sliderNext() {
    // -- Le damos un valor en style al elemento img para que cambie nada más darle click a siguiente.
    sliderItem.style.opacity = "0"
    sliderItem.style.transform = "translateX(0em)"


    // -- Creamos un temporizador para que la imagen no cambie hasta que no se termine la animación.

    setTimeout ( () => {

        sliderNum++

        if (sliderNum >= sliderImages.length) {
            sliderNum = 0;
        }

        sliderItem.src = sliderImages[sliderNum];

        sliderItem.style.opacity = "1"


        // --- Le damos un valor nuevo en style al elemento img para cuando la imagen ya haya cargado que por ejemplo "aparezca".

        updateText(sliderNum);

    },500)
        
    // -- Cerramos el temporizador y le damos un tiempo de ejecución en milisegundos.
}

function sliderPrev() {

    // -- Le damos un valor en style al elemento img para que cambie nada más darle click a anterior.
    sliderItem.style.opacity = "0"
    sliderItem.style.transform = "translateX(0em)"


    // -- Creamos un temporizador para que la imagen no cambie hasta que no se termine la animación.
    setTimeout ( () => {

        if (sliderNum <= 0) {
            sliderNum = sliderImages.length - 1;
        } else {
            sliderNum--
        }

        sliderItem.src = sliderImages[sliderNum];

        sliderItem.style.opacity = "1"
        // --- Le damos un valor nuevo en style al elemento img para cuando la imagen ya haya cargado que por ejemplo "aparezca".
        // -- Cerramos el temporizador y le damos un tiempo de ejecución en milisegundos.

        updateText(sliderNum);
    },500)
}

function updateText(index) {
  let tituloElement = document.getElementById('artista_titulo');
  let descripcionElement = document.getElementById('artista_descripcion');

  tituloElement.textContent = sliderTexts[index].titulo;
  descripcionElement.textContent = sliderTexts[index].descripcion;
}

