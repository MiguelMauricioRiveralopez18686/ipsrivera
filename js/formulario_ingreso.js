document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMsg = document.getElementById('errorMsg');

    // Validación simple
    if (!email || !password) {
      errorMsg.textContent = "Todos los campos son obligatorios.";
      return;
    }

    // Validación de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorMsg.textContent = "Ingresa un correo válido.";
      return;
    }

    // Si pasa las validaciones
    errorMsg.textContent = "";
    alert("¡Inicio de sesión exitoso!");
    // Aquí podrías redirigir o enviar datos al servidor
  });