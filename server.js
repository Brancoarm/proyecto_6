const express = require('express');
const mongoose = require('mongoose'); // Solo se declara aquí
const dotenv = require('dotenv');
const cors = require('cors');
const setupSwaggerDocs = require('./swagger');

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas principales
app.get('/', (req, res) => {
    res.send('¡Bienvenido a la API Backend con Autenticación!');
});

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

// Rutas para usuarios
app.use('/api/user', userRoutes);

// Rutas para productos
app.use('/api/product', productRoutes);

// Configuración de Swagger
setupSwaggerDocs(app);

// Conexión a MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Conexión a MongoDB establecida.'))
    .catch((err) => console.error('Error conectando a MongoDB:', err));

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
