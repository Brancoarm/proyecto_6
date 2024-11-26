const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio.'],
    },
    email: {
        type: String,
        required: [true, 'El correo electrónico es obligatorio.'],
        unique: true,
        match: [
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            'Por favor, introduce un correo válido.',
        ],
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria.'],
        minlength: [6, 'La contraseña debe tener al menos 6 caracteres.'],
    },
});

// Middleware para encriptar la contraseña antes de guardar
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model('User', userSchema);
