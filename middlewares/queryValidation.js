const { DOCS_PAGE } = require('./../service/constants');
const status = require('http-status');

function queryValidation (req, res, next) {
    if (
        isNaN(req.query.page) ||
    req.query.page < 0 ||
    req.query.page === undefined
    ) {
        req.query.page = 0;
    } else {
        req.query.page -= 1;
    }

    req.query.page *= DOCS_PAGE;

    if (
        req.query.buscar === undefined ||
    req.query.buscar.length === ' '
    ) {
        res.status(status.BAD_REQUEST).send('Parametro "buscar" está vazio');
    } else {
        next();
    }
}

module.exports = queryValidation;
