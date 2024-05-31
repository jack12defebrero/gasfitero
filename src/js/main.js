// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}


AOS.init({
  easing: 'ease-out-back',
  duration: 1000
});


window.addEventListener('load', () =>{
  const contenedor1_loader = document.querySelector ('.contenedor1_loader');
  contenedor1_loader.style.opacity = 0;
  contenedor1_loader.style.visibility = 'hidden';
});

 // Seleccionar el botón de WhatsApp
 var whatsappBtn = document.getElementById("whatsapp-btn");
  
 // Crear la función para agregar el mensaje
 function addMessage() {
   // Verificar si se ha hecho scroll durante al menos 3 segundos
   if (window.pageYOffset > window.innerHeight * 0.5) {
     // Crear un elemento para el mensaje
     var message = document.createElement("div");
     // Establecer estilos para el mensaje
     message.textContent = "Contactate con nosotros";
     // Agregar la clase "float-message" para la animación
     message.classList.add("float-message");

     // Agregar el mensaje al lado del botón de WhatsApp
     whatsappBtn.parentNode.insertBefore(message, whatsappBtn.nextSibling);

     // Detener la función después de agregar el mensaje
     window.removeEventListener("scroll", addMessage);
   }
 }

 // Agregar un evento para llamar la función después de 3 segundos de hacer scroll
 setTimeout(function() {
   window.addEventListener("scroll", addMessage);
 }, 500);