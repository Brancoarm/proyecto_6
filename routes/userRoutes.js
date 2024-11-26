const express = require('express');
const { registerUser, loginUser, verifyToken, updateUser } = require('../controllers/userController');
const router = express.Router();

// Endpoint para registrar un usuario
router.post('/register', registerUser);

// Endpoint para iniciar sesión
router.post('/login', loginUser);

// Endpoint para verificar el token del usuario
router.get('/verifytoken', verifyToken);

// Endpoint para actualizar la información del usuario
router.put('/update', updateUser);

module.exports = router;

/**
 * @swagger
 * /api/user/register:
 *   post:
 *     summary: Registra un nuevo usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del usuario
 *               email:
 *                 type: string
 *                 description: Correo electrónico del usuario
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario
 *     responses:
 *       201:
 *         description: Usuario registrado con éxito
 *       400:
 *         description: Error en la solicitud
 */
router.post('/register', registerUser);

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: Inicia sesión un usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Correo del usuario
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *       400:
 *         description: Error en la solicitud
 */
router.post('/login', loginUser);

/**
 * @swagger
 * /api/user/verifytoken:
 *   get:
 *     summary: Verifica la validez del token del usuario
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *         description: Token JWT en formato Bearer
 *     responses:
 *       200:
 *         description: Token válido
 *       401:
 *         description: Token inválido o ausente
 */
router.get('/verifytoken', verifyToken);

/**
 * @swagger
 * /api/user/update:
 *   put:
 *     summary: Actualiza la información de un usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: ID del usuario
 *               name:
 *                 type: string
 *                 description: Nuevo nombre del usuario
 *               email:
 *                 type: string
 *                 description: Nuevo correo del usuario
 *               password:
 *                 type: string
 *                 description: Nueva contraseña del usuario
 *     responses:
 *       200:
 *         description: Usuario actualizado con éxito
 *       404:
 *         description: Usuario no encontrado
 */
router.put('/update', updateUser);

