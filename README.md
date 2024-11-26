Backend Auth Project
Descripción
Este proyecto es un backend que implementa un sistema de autenticación y autorización utilizando Node.js, Express.js y JWT. También incluye la gestión de productos mediante operaciones CRUD conectadas a una base de datos alojada en MongoDB Atlas. La API está documentada con Swagger para facilitar las pruebas y el desarrollo.
________________________________________
Requisitos previos
Asegúrate de tener instalado en tu máquina:
•	Node.js (v16 o superior)
•	npm (v8 o superior)
•	MongoDB Atlas (para la base de datos remota)
•	Postman o Swagger (opcional, para probar los endpoints)

Instalación y configuración
1.	Clona el repositorio:
git clone https://github.com/tu-usuario/backend-auth-project.git
cd backend-auth-project
2.	Instala las dependencias:
npm install
3.	Crea un archivo .env en la raíz del proyecto:

•	Este archivo almacenará las variables de entorno necesarias para que la aplicación se conecte a la base de datos y maneje la autenticación.


•	Ejemplo de configuración:
# Configuración del servidor
PORT=3000

# URI de conexión a MongoDB Atlas
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/backendAuthProject?retryWrites=true&w=majority

# Llave secreta para JWT
JWT_SECRET=supersecretkey
Notas:
•	Reemplaza <username> y <password> con el usuario y contraseña de tu clúster de MongoDB Atlas (por ejemplo, brancoriffom y ABCDEF123.
•	Puedes consultar la URI exacta desde MongoDB Atlas.
4.	Inicia el servidor:
npm run dev
5.	Documentación de la API:

•	Abre tu navegador y visita: http://localhost:3000/api-docs para acceder a Swagger.

•	Endpoints principales
Método	      Ruta	                    Descripción
POST	/api/user/register	        Registra un nuevo usuario.
POST	/api/user/login	            Inicia sesión y devuelve un JWT.
GET	    /api/user/verifytoken	    Verifica la validez del JWT.
POST	/api/product/create	        Crea un nuevo producto.
GET	    /api/product/readall	    Obtiene todos los productos.
GET	    /api/product/readone/:id	Obtiene un producto por su ID.
PUT	    /api/product/update/:id	    Actualiza un producto por su ID.
DELETE	/api/product/delete/:id	    Elimina un producto por su ID.

Modelos de datos

Usuario (userModel.js)
{
    "_id": "64a5b3f1c4e88b7f9f2a123",
    "name": "Branco",
    "email": "branco@example.com",
    "password": "hashed_password",
    "__v": 0
}
Producto (productModel.js)
{
    "_id": "64a5b3f1c4e88b7f9f2a456",
    "name": "Producto de prueba",
    "description": "Descripción de prueba",
    "price": 1000,
    "user": "64a5b3f1c4e88b7f9f2a123",
    "__v": 0
}

Pruebas

1.	Registrar un usuario:
POST /api/user/register
{
    "name": "Juan",
    "email": "juan@example.com",
    "password": "123456"
}
1.	Iniciar sesión:
POST /api/user/login
{
    "email": "juan@example.com",
    "password": "123456"
}
2.	Crear un producto:
POST /api/product/create
{
    "name": "Producto A",
    "description": "Un producto de prueba",
    "price": 2000,
    "user": "64a5b3f1c4e88b7f9f2a123" // ID del usuario registrado
}
________________________________________
Despliegue
1.	Subir a Render:
o	Configura el proyecto en Render y añade las variables de entorno (MONGO_URI, JWT_SECRET) en el panel de configuración.
2.	URL del despliegue:
o	Una vez desplegado, actualiza este README con la URL de tu API pública.
________________________________________
Tecnologías utilizadas
•	Node.js: Entorno de ejecución para el backend.
•	Express.js: Framework para manejar rutas y lógica de la API.
•	MongoDB y Mongoose: Base de datos NoSQL y ORM.
•	JWT: Autenticación y autorización.
•	Swagger: Documentación interactiva de la API.
________________________________________
Contribuciones
Si deseas contribuir:
1.	Haz un fork del proyecto.
2.	Crea una nueva rama:
git checkout -b feature/nueva-funcionalidad
3.	Haz un commit de tus cambios:
git commit -m "Descripción de los cambios"
4.	Haz un push a tu rama:
git push origin feature/nueva-funcionalidad
5.	Crea un Pull Request.

