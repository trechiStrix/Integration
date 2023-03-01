const express = require('express');
const server = express();
const PORT = 3001;

server.lister(PORT, () => {
   console.log('Server raised in port ' + PORT);
});