const status = require('http-status');

function handler500(err, req, res) {
    if (err) res.status(status.INTERNAL_SERVER_ERROR).send(err);
}

function handler404(req, res) {
    res.status(status.NOT_FOUND).send('Página não Encontrada');
}

module.exports = { handler500, handler404 };
