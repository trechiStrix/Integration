const axios = require('axios');

var getCharById = (res, ID) => {
    axios.get(`https://rickandmortyapi.com/api/character/${ID}`)
    .then((response) => response.data)
    .then((data) => {
        let character = {
            id: data.id,
            image: data.image,
            name: data.name,
            gender: data.gender,
            species: data.species
        };
        res
        .writeHead(200, {"Content-type": "aplication/json"})
        .end(JSON.stringify(character));
    })
    .catch(err => {
        res
        .writeHead(500, {"Content-type": "text/plain"})
        .end('Error')
    })
}

module.exports = getCharById;