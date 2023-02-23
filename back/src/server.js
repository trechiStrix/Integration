var http = require('http');
var characters = require('./utils/data');
const PORT = 3001;

http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes('rickandmorty/character')){

        let id = req.url.split('/').at(-1);

        let characterFilter = characters.find((char)=>char.id === Number(id));

        res.writeHead(200, {"Content-type": "aplication/json"}).end(JSON.stringify(characterFilter))
    } 
    
}).listen(PORT, 'localhost')