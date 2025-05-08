// Función para validar el correo electrónico mediante una expresión regular simple
function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Seleccionamos el formulario y agregamos el listener para el submit
  document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir envío del formulario para realizar validaciones

    // Reiniciar mensajes de error
    document.getElementById('errorNombre').textContent = '';
    document.getElementById('errorEmail').textContent = '';
    document.getElementById('errorPassword').textContent = '';
    document.getElementById('errorConfirmPassword').textContent = '';

    // Obtener valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let valid = true;

    // Validación del campo nombre
    if (nombre === '') {
      document.getElementById('errorNombre').textContent = 'El nombre es obligatorio.';
      valid = false;
    }

    // Validación del campo email
    if (email === '') {
      document.getElementById('errorEmail').textContent = 'El correo electrónico es obligatorio.';
      valid = false;
    } else if (!validarEmail(email)) {
      document.getElementById('errorEmail').textContent = 'Ingresa un correo electrónico válido.';
      valid = false;
    }

    // Validación del campo contraseña
    if (password === '') {
      document.getElementById('errorPassword').textContent = 'La contraseña es obligatoria.';
      valid = false;
    } else if (password.length < 6) {
      document.getElementById('errorPassword').textContent = 'La contraseña debe tener al menos 6 caracteres.';
      valid = false;
    }

    // Validación de confirmar contraseña
    if (confirmPassword === '') {
      document.getElementById('errorConfirmPassword').textContent = 'Debes confirmar la contraseña.';
      valid = false;
    } else if (password !== confirmPassword) {
      document.getElementById('errorConfirmPassword').textContent = 'Las contraseñas no coinciden.';
      valid = false;
    }

    // Si todas las validaciones pasan, se puede enviar el formulario (por ejemplo, usando AJAX o redirigiendo)
    if (valid) {
      // Por ejemplo, mostramos un mensaje de éxito
      alert("Registro completado exitosamente.");
      // Aquí se podría enviar el formulario a un servidor mediante AJAX o proseguir con el comportamiento por defecto.
      // this.submit();  // Descomentar si se desea proceder con el envío tradicional.
    }
  });