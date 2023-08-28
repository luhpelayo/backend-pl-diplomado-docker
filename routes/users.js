const express = require("express"); // Usa require en lugar de import
const { addUser, deleteUser, getUsers, updateUser } = require("../controllers/user.js"); // Usa require en lugar de import

const router = express.Router();

router.get("/", getUsers);

router.post("/", addUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router; // Exporta el router utilizando module.exports
