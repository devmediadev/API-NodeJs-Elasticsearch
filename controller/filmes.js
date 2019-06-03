const { listarFilmes, detalharFilme } = require('./../repository/filmes');

function buscarFilmes (req, res, next) {
    listarFilmes(req.query.buscar, req.query.page)
        .then(data => res.json(data).end())
        .catch(err => next(err));
}

function encontrarPorId (req, res, next) {
    detalharFilme(req.params.id)
        .then(data => res.json(data))
        .catch(err => next(err));
}

module.exports = { buscarFilmes, encontrarPorId };
