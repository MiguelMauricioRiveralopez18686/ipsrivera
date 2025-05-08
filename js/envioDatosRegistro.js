
  const formulario = document.getElementById('RegistroUsuarios');

  formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Validaciones básicas
    if (!nombre || !email || !password) {
      alert('Por favor completa todos los campos.');
      return;
    }

    // Cifrar la contraseña antes de enviarla
    bcrypt.hash(password, 10, function(err, hashedPassword) {
      if (err) {
        alert('Error al cifrar la contraseña.');
        return;
      }

      // Preparar los datos para enviarlos
      const data = {
        nombre,
        email,
        password: hashedPassword
      };

      // URL de la Web App de Google Apps Script
      const scriptURL = 'https://script.google.com/macros/s/AKfycbzsMNSAeAmcHnKlcpy2vSKiM7sYfVLe_QM-RJVdpyHks-gQEJ0Q7qt-QSosZ4z-KlIhYg/exec';

      fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(responseData => {
        if (responseData.status === 'success') {
          alert('Registro exitoso.');
          formulario.reset();
        } else if (responseData.status === 'error') {
          alert(responseData.message); // Muestra el mensaje "El correo ya está registrado."
        } else {
          alert('Ocurrió un error inesperado.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error de conexión con el servidor.');
      });
    });
  });