const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Backend Auth Project API',
            version: '1.0.0',
            description: 'API para autenticación de usuarios y gestión de productos',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./routes/*.js'], // Asegúrate de que apunta a las rutas correctas
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwaggerDocs = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log('Swagger Docs disponibles en http://localhost:3000/api-docs');
};

module.exports = setupSwaggerDocs;
