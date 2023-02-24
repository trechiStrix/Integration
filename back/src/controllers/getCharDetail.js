var getCharDetail = (res, ID) => {
    fetch(`https://rickandmortyapi.com/api/character/${ID}`)
    .then((response) => response.json())
    .then((data) => {
        let character = {
            image: data.image,
            name: data.name,
            gender: data.gender,
            status: data.status,
            origin: data.origin,
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


module.exports = getCharDetail;