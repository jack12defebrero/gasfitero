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