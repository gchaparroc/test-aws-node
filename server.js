const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Aratoca Charala con express'));

app.listen(3000);
console.log('Servidor corriendo en puerto 3000');