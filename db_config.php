<?php
// db_config.php
// Archivo de configuración de conexión a la base de datos

$host = 'localhost';          // Host de la base de datos
$usuario = 'mrl';             // Usuario de la base de datos
$contrasena = '18061986Mrl';  // Contraseña de la base de datos
$base_de_datos = 'ips_rivera'; // Nombre de la base de datos

// Crear conexión
$conexion = new mysqli($host, $usuario, $contrasena, $base_de_datos);

// Verificar conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

// Establecer codificación de caracteres
$conexion->set_charset("utf8");

return $conexion;
?>