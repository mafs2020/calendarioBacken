const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
// databases
require('./db/db');

// middlware
app.use(express.json());
app.use( express.urlencoded({extended: false, limit: 100000000}) );
app.use(cors());
app.use(morgan('dev'));
// rutas
const rutasEvento = require('./rutas/eventos');
app.use(rutasEvento);

app.listen(3000, () => console.log('server on port 3000'));