function Filme (client) {
    this.client = client;
}

Filme.prototype.listaFilmes = function (query) {
    return this.client.search(query);
};

Filme.prototype.detalharFilme = function (query) {
    return this.client.get(query);
};

function create (client) {
    return new Filme(client);
}

module.exports = { create };
