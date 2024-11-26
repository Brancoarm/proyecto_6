const express = require('express');
const { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } = require('../controllers/productController');
const router = express.Router();

// Endpoint para crear un producto
router.post('/create', createProduct);

// Endpoint para obtener todos los productos
router.get('/readall', getAllProducts);

// Endpoint para obtener un producto por ID
router.get('/readone/:id', getProductById);

// Endpoint para actualizar un producto por ID
router.put('/update/:id', updateProduct);

// Endpoint para eliminar un producto por ID
router.delete('/delete/:id', deleteProduct);

module.exports = router;

/**
 * @swagger
 * /api/product/create:
 *   post:
 *     summary: Crea un nuevo producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del producto
 *               description:
 *                 type: string
 *                 description: Descripción del producto
 *               price:
 *                 type: number
 *                 description: Precio del producto
 *               user:
 *                 type: string
 *                 description: ID del usuario que crea el producto
 *     responses:
 *       201:
 *         description: Producto creado con éxito
 *       400:
 *         description: Error en la solicitud
 */
router.post('/create', createProduct);

/**
 * @swagger
 * /api/product/readall:
 *   get:
 *     summary: Obtiene todos los productos
 *     responses:
 *       200:
 *         description: Lista de productos
 *       500:
 *         description: Error al obtener los productos
 */
router.get('/readall', getAllProducts);

/**
 * @swagger
 * /api/product/readone/{id}:
 *   get:
 *     summary: Obtiene un producto por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto encontrado
 *       404:
 *         description: Producto no encontrado
 */
router.get('/readone/:id', getProductById);

/**
 * @swagger
 * /api/product/update/{id}:
 *   put:
 *     summary: Actualiza un producto por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nuevo nombre del producto
 *               description:
 *                 type: string
 *                 description: Nueva descripción del producto
 *               price:
 *                 type: number
 *                 description: Nuevo precio del producto
 *     responses:
 *       200:
 *         description: Producto actualizado con éxito
 *       404:
 *         description: Producto no encontrado
 */
router.put('/update/:id', updateProduct);

/**
 * @swagger
 * /api/product/delete/{id}:
 *   delete:
 *     summary: Elimina un producto por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto eliminado con éxito
 *       404:
 *         description: Producto no encontrado
 */
router.delete('/delete/:id', deleteProduct);
