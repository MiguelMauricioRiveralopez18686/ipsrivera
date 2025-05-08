<?php
// 1. Conexión a la base de datos (asegúrate de que los detalles sean correctos)
$conexion = include 'db_config.php';

// 2. Recoger los datos del formulario
// isset() se utiliza para verificar si la variable está definida y no es NULL
$tipo_documento = isset($_POST['tipo_documento']) ? $_POST['tipo_documento'] : '';
$numero_documento = isset($_POST['numero_documento']) ? $_POST['numero_documento'] : '';
$nom_paciente = isset($_POST['nom_paciente']) ? $_POST['nom_paciente'] : '';
$apellido_paciente = isset($_POST['apellido_paciente']) ? $_POST['apellido_paciente'] : '';
$fecha_nacimiento = isset($_POST['fecha_nacimiento']) ? $_POST['fecha_nacimiento'] : '';
$genero = isset($_POST['genero']) ? $_POST['genero'] : '';
$direccion = isset($_POST['direccion']) ? $_POST['direccion'] : '';
$telefono = isset($_POST['telefono']) ? $_POST['telefono'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';

// 3. Validar los datos (¡IMPORTANTE!  La validación del lado del servidor es crucial)
$errores = array(); // Un array para almacenar los mensajes de error

if (empty($tipo_documento)) {
    $errores['tipo_documento'] = "Por favor, seleccione un tipo de documento.";
}

if (empty($numero_documento) || strlen($numero_documento) < 5 || strlen($numero_documento) > 20) {
    $errores['numero_documento'] = "Por favor, ingrese un número de documento válido (entre 5 y 20 caracteres).";
}

if (empty($nom_paciente) || strlen($nom_paciente) < 2 || strlen($nom_paciente) > 25) {
    $errores['nom_paciente'] = "Por favor, ingrese un nombre válido (entre 2 y 25 caracteres).";
}

if (empty($apellido_paciente) || strlen($apellido_paciente) < 2 || strlen($apellido_paciente) > 25) {
    $errores['apellido_paciente'] = "Por favor, ingrese un apellido válido (entre 2 y 25 caracteres).";
}

if (empty($fecha_nacimiento)) {
    $errores['fecha_nacimiento'] = "Por favor, ingrese su fecha de nacimiento.";
}

if (empty($genero)) {
    $errores['genero'] = "Por favor, seleccione su género.";
}

if (empty($direccion) || strlen($direccion) < 5 || strlen($direccion) > 100) {
    $errores['direccion'] = "Por favor, ingrese una dirección válida (entre 5 y 100 caracteres).";
}

if (empty($telefono) || strlen($telefono) < 7 || strlen($telefono) > 15 || !preg_match('/^\d+$/', $telefono)) {
    $errores['telefono'] = "Por favor, ingrese un teléfono válido (entre 7 y 15 caracteres, solo números).";
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errores['email'] = "Por favor, ingrese un correo electrónico válido.";
}

// 4. Si no hay errores, insertar los datos en la base de datos
if (empty($errores)) {
    $sql = "INSERT INTO pacientes (tipo_documento, numero_documento, nom_paciente, apellido_paciente, fecha_nacimiento, genero, direccion, telefono, email)
            VALUES ('$tipo_documento', '$numero_documento', '$nom_paciente', '$apellido_paciente', '$fecha_nacimiento', '$genero', '$direccion', '$telefono', '$email')";

    if ($conexion->query($sql) === TRUE) {
        echo "¡Registro de paciente exitoso!";
        // Puedes redirigir a otra página aquí, por ejemplo:
        // header("Location: registro_exitoso.html");
        // exit();
    } else {
        echo "Error al registrar el paciente: " . $conexion->error;
    }
} 
?>