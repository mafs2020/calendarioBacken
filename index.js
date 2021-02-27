const express = require('express');
const app = express();

require('./db/db');

app.use(express.json());
app.use( express.urlencoded({extended: false, limit: 100000000}) );

const rutasEvento = require('./rutas/eventos');
app.use(rutasEvento);

app.listen(3000, () => console.log('server on port 3000'));