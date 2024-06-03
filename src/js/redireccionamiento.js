// ?hecho por: jack  sera ridereeccionado a mi red social
//?lo cual esto se uso como un boton en el HTML:  para 
//?el visitante si esta interezado en un sitio web lo cual se puso el 
//?El nombre del desarrollador "Mi persona"

/* This JavaScript code snippet is setting up an event listener for a click on an element with the id
"By". When this element is clicked, a SweetAlert modal is triggered. The modal presents a message
with options for the user to choose which social media platform they want to be redirected to. The
options include Facebook and Instagram. Depending on the user's choice, the script will redirect
them to the corresponding social media profile of the developer, either Facebook or Instagram. The
modal also includes animations for showing and hiding, as well as loading indicators before the
redirection occurs. */
const link = document.getElementById("By");
link.addEventListener("click", (event) => {
    event.preventDefault();
    Swal.fire({
        title: "Hola, soy Jack y usted será:",
        text: "Elija la red social del desorrollador a la que desea ser redirigido:",
        icon: "question",
        backdrop: "rgb(0,0,0,0.8)",
        confirmButtonText: "Facebook",
        showCancelButton: true,
        
        cancelButtonText: "Instagram",
        denyButtonText: "Cancelar",
        allowOutsideClick: false,
        showDenyButton: true,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.showLoading();
            setTimeout(() => {
                Swal.close(); // Cierra el SweetAlert antes de redirigir
                window.open("https://www.facebook.com/jack.inganaupa.5", '_blank');
            }, 800);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.showLoading();
            setTimeout(() => {
                Swal.close(); // Cierra el SweetAlert antes de redirigir
                window.open("https://www.instagram.com/dubi_jack/", '_blank');
            }, 800);
        }
    });
});



