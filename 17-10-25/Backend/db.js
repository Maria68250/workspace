const mysql = require('mysql2');

// Configuración de la conexión
const connection = mysql.createConnection({
  host: 'localhost',      // Cambia si tu servidor MySQL está en otro host
  user: 'root',     // Reemplaza con tu usuario de MySQL
  password: '', // Reemplaza con tu contraseña de MySQL
  database: 'notas', // Reemplaza con el nombre de tu base de datos

});

connection.connect((err) => {
    if (err) {
        console.log('Error al conectar a la base de datos', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos "colegio" ')
});

module.exports = connection;
