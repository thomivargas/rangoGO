import logger from "../utils/logger.js";
import User from '../models/user.model.js';

// Crear un usuario
export const create = async (req, res) => {
    const { username, password, profileImageURL } = req.body;
    try {
      
      const newUser = new User({
        username,
        password,
        profileImageURL,
      });
      await newUser.save();
      logger.info("🟢 Usuario creado");
      res.status(201).json('Usuario creado: ' + newUser);
    } catch (err) {
      res.status(500).json({ error: 'Error al crear usuario' });
    }
};

// Leer todos los usuarios
export const index = async (req, res) => {
    try {
      const users = await User.find();
      logger.info("🟢 Get de todos los usuarios");
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener usuarios' });
    }
};

// Leer un usuario por ID
export const show = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
      logger.info("🟢 Usuario" + user + "actualizado");
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener usuario' });
    }
};

// Eliminar un usuario
export const destroy = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
        logger.info("🟢 Usuario" + user + "eliminado");
        res.json({ message: 'Usuario eliminado' });
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar usuario' });
    }
};