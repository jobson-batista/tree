const express = require('express');
const app = express();

app.use( (req, res, next) => {
    res.status(200).send({
        user: 'Bill Gates',
        msg: 'Hello World!'
    });
});

module.exports = app;