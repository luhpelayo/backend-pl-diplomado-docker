const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users.js');
const sequelize = require('./db.js');
const cors = require('cors'); // Importa el paquete cors

const app = express();
const PORT = process.env.PORT || 8800;

app.use(cors()); // Agrega esta línea para habilitar CORS
app.use(bodyParser.json());
app.use('/', userRoutes);

sequelize
  .sync()
  .then(() => {
    console.log('Base de datos conectada y sincronizada.');
    app.listen(PORT, () => {
      console.log(`Servidor Express escuchando en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });

