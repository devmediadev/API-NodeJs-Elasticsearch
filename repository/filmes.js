const elasticsearch = require('./../lib/elasticSearch');
const Filme = require('../data/filmeDao');
const { queryLista, queryDetalhe } = require('./../service/queryBuilder');
const { formatarListaFilmes, formatarDetalhesFilme } = require('../service/dataFormater');

function listarFilmes (keystring, from = 0) {
    const query = queryLista(keystring, from);
    const filme = Filme.create(elasticsearch.client);
    const result = filme.listaFilmes(query);

    return formatarListaFilmes(result);
}

function detalharFilme (id) {
    const query = queryDetalhe(id);
    const filme = Filme.create(elasticsearch.client);
    const result = filme.detalharFilme(query);

    return formatarDetalhesFilme(result);
}

module.exports = { listarFilmes, detalharFilme };
