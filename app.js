const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const calcRoute = require('./routes/sum.route');
const resRoute = require('./routes/res.route');
const multiRoute = require('./routes/multi.route');
const divRoute = require('./routes/div.route');

const app = express();

app.use(bodyParser.json());
//  no permitira objetos anidados
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/calcultion', calcRoute, resRoute,multiRoute, divRoute);

app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});

module.exports = app;