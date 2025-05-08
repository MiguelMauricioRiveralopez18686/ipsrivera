-- Crear la base de datos ipsivera si no existe.
CREATE DATABASE IF NOT EXISTS ips_ivera;

-- Seleccionar la base de datos para usarla.
USE ipsrivera;

-- Crear la tabla pacientes.
CREATE TABLE pacientes (
    id_paciente INT AUTO_INCREMENT PRIMARY KEY,
    tipo_documento ENUM('CC', 'TI', 'CE','Pasaporte','PEP') NOT NULL,
    numero_documento VARCHAR(20) UNIQUE NOT NULL,
    nom_paciente VARCHAR(25) NOT NULL,
    apellido_paciente VARCHAR(25) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    genero ENUM('Masculino', 'Femenino', 'Otro') NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    telefono VARCHAR(20),
    correo_electronico VARCHAR(100) UNIQUE,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear la tabla especialidades.
CREATE TABLE especialidades (
    id_especialidad INT AUTO_INCREMENT PRIMARY KEY,
    nombre_especialidad VARCHAR(100) UNIQUE NOT NULL
);

-- Crear la tabla médicos especialistas.
CREATE TABLE medicosespecialistas (
    id_medico INT AUTO_INCREMENT PRIMARY KEY,
    tipo_documento_medico ENUM('CC', 'TI', 'CE','Pasaporte','PEP') NOT NULL,
    numero_documento_medico VARCHAR(20) UNIQUE NOT NULL,
    nom_medico VARCHAR(25) NOT NULL,
    apellido_medico VARCHAR(25) NOT NULL,
    id_especialidad INT NOT NULL,
    correo_electronico VARCHAR(100) UNIQUE,
    telefono VARCHAR(20),
    FOREIGN KEY (id_especialidad) REFERENCES especialidades(id_especialidad)
);

-- Crear la tabla Citas Médicas.
CREATE TABLE citasmedicas (
    cita_id INT AUTO_INCREMENT PRIMARY KEY,
    paciente_id INT NOT NULL,
    medico_id INT NOT NULL,
    fecha_hora_cita DATETIME NOT NULL,
    motivo_cita TEXT,
    estado_cita ENUM('Pendiente', 'Confirmada', 'Cancelada', 'Realizada') DEFAULT 'Pendiente',
    fecha_solicitud TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (paciente_id) REFERENCES Pacientes(Id_paciente),
    FOREIGN KEY (medico_id) REFERENCES MedicosEspecialistas(Id_medico)
);

-- Crear la tabla Tipos de Exámenes de Laboratorio.
CREATE TABLE tiposexamenes (
    tipo_examen_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_examen VARCHAR(100) UNIQUE NOT NULL,
    descripcion_examen TEXT
);

-- Crear la tabla Solicitudes de Exámenes de Laboratorio.
CREATE TABLE solicitudesexamenes (
    solicitud_id INT AUTO_INCREMENT PRIMARY KEY,
    paciente_id INT NOT NULL,
    tipo_examen_id INT NOT NULL,
    fecha_solicitud TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_programacion DATE,
    hora_programacion TIME,
    estado_solicitud ENUM('Pendiente', 'Programada', 'Realizada', 'Cancelada') DEFAULT 'Pendiente',
    observaciones TEXT,
    FOREIGN KEY (paciente_id) REFERENCES Pacientes(Id_paciente),
    FOREIGN KEY (tipo_examen_id) REFERENCES TiposExamenes(tipo_examen_id)
);

-- Crear el usuario 'mrl' con la contraseña '18061986Mrl'
-- El '%' permite que el usuario se conecte desde cualquier host.
CREATE USER 'mrl'@'%' IDENTIFIED BY '18061986Mrl';

-- Otorgar todos los privilegios sobre la base de datos ipsrivera al usuario 'mrl'
-- Esto incluye SELECT, INSERT, UPDATE, DELETE, etc., sobre todas las tablas de la base de datos.
GRANT ALL PRIVILEGES ON ips_rivera.* TO 'mrl'@'%';

-- Actualizar los privilegios para que los cambios surtan efecto inmediatamente.
FLUSH PRIVILEGES;

-- Mostrar los privilegios otorgados al usuario 'mrl' para verificar la configuración.
SHOW GRANTS FOR 'mrl'@'%'