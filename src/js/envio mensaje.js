document.getElementById('message').addEventListener('input', function() {
    var message = document.getElementById('message').value;
    document.getElementById('user-message').innerText = 'Mensaje a enviar: ' + message;
  });

  document.getElementById('send-whatsapp').addEventListener('click', function() {
    var name = document.getElementById('full-name').value;
    var message = document.getElementById('message').value;
    var phoneNumber = '946186285'; // Reemplaza con tu número de teléfono de WhatsApp

    var whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent('Nombre: ' + name + '\nTrabajo a realizar: ' + message)}`;

    window.open(whatsappURL, '_blank');
  });
