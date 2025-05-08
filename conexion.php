<?php
$host = 'localhost';          // El host de la base de datos (generalmente localhost)
$usuario = 'mrl';           // El nombre de usuario de la base de datos
$contrasena = '18061986Mrl';  // La contraseña de la base de datos
$base_de_datos = 'ips_rivera'; // El nombre de la base de datos que creaste

// Crear una conexión a la base de datos
$conexion = new mysqli($host, $usuario, $contrasena, $base_de_datos);

// Verificar si la conexión fue exitosa
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

// Opcional: Establecer el conjunto de caracteres a UTF-8 (recomendado para la mayoría de las aplicaciones)
$conexion->set_charset("utf8");

// La variable $conexion contiene la conexión a la base de datos,
// y se puede utilizar para realizar consultas.
// Ejemplo de consulta:
// $sql = "SELECT * FROM Pacientes";
// $resultado = $conexion->query($sql);

// No olvides cerrar la conexión cuando hayas terminado de usarla:
// $conexion->close();
?>
