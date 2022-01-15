const express = require('express')
const app = express()
const phishing = require('./controller/phishing')

app.get('katash', (req, res) => res.send('katash'))
app.use(phishing);


module.exports = app;
