const Product = require('../models/productModel'); // Asegúrate de tener el modelo de productos configurado correctamente

// Crear un producto
const createProduct = async (req, res) => {
    try {
        const { name, description, price, user } = req.body;

        if (!name || !description || !price || !user) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
        }

        const newProduct = await Product.create({ name, description, price, user });
        res.status(201).json({ message: 'Producto creado con éxito.', product: newProduct });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el producto.', error: error.message });
    }
};

// Obtener todos los productos
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los productos.', error: error.message });
    }
};

// Obtener un producto por ID
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado.' });
        }

        res.status(200).json({ product });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el producto.', error: error.message });
    }
};

// Actualizar un producto
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price } = req.body;

        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado.' });
        }

        if (name) product.name = name;
        if (description) product.description = description;
        if (price) product.price = price;

        await product.save();
        res.status(200).json({ message: 'Producto actualizado con éxito.', product });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el producto.', error: error.message });
    }
};

// Eliminar un producto
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        // Buscar y eliminar el producto por su ID
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado.' });
        }

        res.status(200).json({ message: 'Producto eliminado con éxito.' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el producto.', error: error.message });
    }
};


module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};
