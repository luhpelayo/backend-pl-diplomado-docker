const Usuario = require('../models/usuarios.js'); // Usa require en lugar de import

const getUsers = async (_, res) => {
  try {
    const usuarios = await Usuario.findAll();
    return res.status(200).json(usuarios);
  } catch (error) {
    return res.json(error);
  }
};

const addUser = async (req, res) => {
  try {
    const nuevoUsuario = await Usuario.create({
      nombre: req.body.nombre,
      email: req.body.email, // Ajusta el campo a "email"
      fone: req.body.fone,   // Ajusta el campo a "fone"
      data_nascimento: req.body.data_nascimento, // Ajusta el campo a "data_nascimento"
    });
    return res.status(200).json('Usuario creado con éxito.');
  } catch (error) {
    return res.json(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) {
      return res.status(404).json('Usuario no encontrado.');
    }

    await usuario.update({
      nombre: req.body.nombre,
      email: req.body.email, // Ajusta el campo a "email"
      fone: req.body.fone,   // Ajusta el campo a "fone"
      data_nascimento: req.body.data_nascimento, // Ajusta el campo a "data_nascimento"
    });

    return res.status(200).json('Usuario actualizado con éxito.');
  } catch (error) {
    return res.json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) {
      return res.status(404).json('Usuario no encontrado.');
    }

    await usuario.destroy();

    return res.status(200).json('Usuario eliminado con éxito.');
  } catch (error) {
    return res.json(error);
  }
};

module.exports = { getUsers, addUser, updateUser, deleteUser }; // Exporta las funciones
