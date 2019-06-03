const express = require('express');
const router = express.Router();

const controller = require('./../controller/filmes');
const queryValidation = require('../middlewares/queryValidation');

router.use('/lista', queryValidation);

router.get('/lista', controller.buscarFilmes);
router.get('/:id', controller.encontrarPorId);

module.exports = router;
