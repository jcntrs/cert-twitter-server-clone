const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { check } = require('express-validator');

router.post('/',
    [
        check('names', 'El nombre es obligatorio').not().isEmpty(),
        check('surnames', 'El apellido es obligatorio').not().isEmpty(),
        check('email', 'El email debe ser válido').isEmail(),
        check('password', 'La contraseña debe contener al menos 6 caracteres').isLength({ min: 6 })
    ],
    userController.createUser
);

module.exports = router;