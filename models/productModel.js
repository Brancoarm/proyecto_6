const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre del producto es obligatorio.'],
    },
    description: {
        type: String,
        required: [true, 'La descripción del producto es obligatoria.'],
    },
    price: {
        type: Number,
        required: [true, 'El precio del producto es obligatorio.'],
        min: [0, 'El precio no puede ser negativo.'],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

module.exports = mongoose.model('Product', productSchema);
