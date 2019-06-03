const express = require('express');
const router = express.Router();

const cors = require('./../middlewares/cors');
const filmesRouter = require('./filmes');

router.use(cors);
router.use('/filmes', filmesRouter);

router.get('/', (req, res) => {
    res.send('API de Busca de filmes');
});

module.exports = router;
