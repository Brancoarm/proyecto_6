const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); // Asegúrate de que el modelo de usuario esté correctamente configurado

// Registro de usuario
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validar que todos los campos estén presentes
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
        }

        // Comprobar si el usuario ya existe
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'El correo ya está registrado.' });
        }

        // Crear un nuevo usuario
        const newUser = await User.create({ name, email, password });
        res.status(201).json({ message: 'Usuario registrado con éxito.', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error registrando al usuario.', error: error.message });
    }
};

// Inicio de sesión de usuario
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validar que todos los campos estén presentes
        if (!email || !password) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
        }

        // Comprobar si el usuario existe
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }

        // Verificar la contraseña
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Contraseña incorrecta.' });
        }

        // Generar token JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Inicio de sesión exitoso.', token });
    } catch (error) {
        res.status(500).json({ message: 'Error en el inicio de sesión.', error: error.message });
    }
};

// Verificar token del usuario
const verifyToken = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]; // Token en formato "Bearer <token>"

        if (!token) {
            return res.status(401).json({ message: 'No se proporcionó un token.' });
        }

        // Verificar token JWT
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Token no válido.' });
            }
            res.status(200).json({ message: 'Token válido.', userId: decoded.id });
        });
    } catch (error) {
        res.status(500).json({ message: 'Error verificando el token.', error: error.message });
    }
};

// Actualizar información del usuario
const updateUser = async (req, res) => {
    try {
        const { id } = req.body; // Se debe proporcionar el ID del usuario
        const { name, email, password } = req.body;

        // Comprobar si el usuario existe
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }

        // Actualizar los campos
        if (name) user.name = name;
        if (email) user.email = email;
        if (password) user.password = await bcrypt.hash(password, 10); // Reencriptar nueva contraseña

        await user.save();
        res.status(200).json({ message: 'Usuario actualizado con éxito.', user });
    } catch (error) {
        res.status(500).json({ message: 'Error actualizando el usuario.', error: error.message });
    }
};

module.exports = { registerUser, loginUser, verifyToken, updateUser };
