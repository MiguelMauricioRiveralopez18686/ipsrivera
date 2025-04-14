// ===== Validación del Formulario y Envío con AJAX =====
const contactForm = document.getElementById('contactForm');
const formMensaje = document.getElementById('formMensaje');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Evitar el envío normal
  
  // Validación simple de campos
  const nombre = contactForm.nombre.value.trim();
  const email = contactForm.email.value.trim();
  const asunto = contactForm.asunto.value.trim();
  const mensaje = contactForm.mensaje.value.trim();
  
  if(!nombre || !email || !asunto || !mensaje) {
    formMensaje.style.color = 'red';
    formMensaje.textContent = 'Todos los campos son obligatorios.';
    return;
  }
  
  // Opcional: expresion regular para validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMensaje.style.color = 'red';
    formMensaje.textContent = 'Por favor, ingresa un correo electrónico válido.';
    return;
  }
  
  // Los datos a enviar (puedes utilizar FormData o un objeto)
  const datos = {
    nombre: nombre,
    email: email,
    asunto: asunto,
    mensaje: mensaje
  };
  
  // Enviar datos utilizando Fetch API (AJAX)
  fetch('procesar_contacto.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  })
  .then(response => response.json())
  .then(data => {
    if(data.success){
      formMensaje.style.color = 'green';
      formMensaje.textContent = data.message;
      contactForm.reset();
    } else {
      formMensaje.style.color = 'red';
      formMensaje.textContent = data.message;
    }
  })
  .catch(error => {
    formMensaje.style.color = 'red';
    formMensaje.textContent = 'Ocurrió un error al enviar el formulario.';
    console.error('Error:', error);
  });
});