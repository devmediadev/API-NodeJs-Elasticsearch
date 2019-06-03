const { DOCS_PAGE } = require('./../service/constants');

function formatarListaFilmes(result) {
    const listData = result
        .then(function(data) {
            const PAGES = Math.ceil(data.hits.total / DOCS_PAGE);
            const CUTTING_AVG = data.aggregations.avg_score.value / 2;

            return {
                total: data.hits.total,
                pages: PAGES,
                data: data.hits.hits
                    .filter(filme => filme._score >= CUTTING_AVG)
                    .map(filme => ({
                        _id: filme._id,
                        title: filme._source.title,
                        original_title: filme._source.original_title,
                        poster_path: filme._source.poster_path,
                        tagline: filme._source.tagline,
                        overview: filme._source.overview
                    }))
            };
        })
        .catch(err => {
            throw err;
        });

    return listData;
}

function formatarDetalhesFilme(data) {
    const detalhes = data
        .then(function(data) {
            return {
                _id: data._id,
                title: data._source.title,
                original_title: data._source.original_title,
                poster_path: data._source.poster_path,
                release_date: data._source.release_date,
                tagline: data._source.tagline,
                overview: data._source.overview,
                genres: data._source.genres
            };
        })
        .catch(err => {
            throw err;
        });

    return detalhes;
}

module.exports = { formatarListaFilmes, formatarDetalhesFilme };
