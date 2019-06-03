require('../lib/environment').variables();

const index = process.env.ES_INDEX;
const type = process.env.ES_TYPE;

function queryLista(keystring, from) {
    const _source = ['title', 'overview', 'tagline', 'poster_path'];
    return {
        index,
        type,
        _source,
        from,
        body: {
            query: {
                bool: {
                    must_not: [
                        {
                            script: {
                                script: "doc['overview'].empty"
                            }
                        },
                        {
                            match: {
                                adult: true
                            }
                        }
                    ],
                    should: [
                        {
                            match: {
                                title: {
                                    query: keystring,
                                    boost: 2
                                }
                            }
                        },
                        {
                            match: {
                                title: {
                                    query: keystring,
                                    fuzziness: 'AUTO'
                                }
                            }
                        }
                    ]
                }
            },
            aggs: {
                avg_score: {
                    avg: {
                        script: '_score'
                    }
                }
            }
        }
    };
}

function queryDetalhe(id) {
    let _source = [
        'title',
        'original_title',
        'poster_path',
        'release_date',
        'tagline',
        'overview',
        'genres'
    ];
    return {
        index,
        type,
        id,
        _source
    };
}

module.exports = { queryLista, queryDetalhe };
