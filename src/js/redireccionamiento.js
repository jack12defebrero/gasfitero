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



// boton flotante de whatsapp
/* This code snippet is adding an event listener to a button with the id "whatsapp-btn". When this
button is clicked, a SweetAlert modal is triggered. The modal displays a message thanking the user
for contacting the company and offers to redirect them to WhatsApp for better communication. */
document.querySelector('#whatsapp-btn').addEventListener('click', function (event) {
    event.preventDefault();
    Swal.fire({
      title: '¡Hola! Gracias por contactarnos. Para brindarte una mejor atención, te vamos a redirigir a WhatsApp para que puedas comunicarte con nuestra empresa de manera más ágil y directa. ¡Estamos listos para ayudarte!',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, con mucho gusto',
      cancelButtonText: 'Cancelar',
      backdrop: 'rgba(0,0,0,0.8)',
      preConfirm: () => {
        return new Promise((resolve) => {
          Swal.showLoading();
          setTimeout(() => {
            window.open('https://wa.link/tevkyx');
            resolve();
          }, 2000);
        });
      },
      showClass: {
        popup: 'animate__animated animate__lightSpeedInLeft'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          showClass: {
            popup: 'animate__animated animate__jackInTheBox'
          },
          hideClass: {
            popup: 'animate__animated animate__backOutRight'
          },
          title: 'Operación cancelada',
          icon: 'error',
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
          backdrop: 'rgba(234, 28, 28, 0.32)',
          allowOutsideClick: false,
        });
      }
  
    });
  });