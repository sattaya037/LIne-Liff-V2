const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser  = require('body-parser');
const myLiffId = process.env.MY_LIFF_ID;
var train = require('./train');

app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/send-id', function(req, res) {
    res.json({id: myLiffId});
});
app.get('/intent', function (req, res) {
    res.json(train.intent());
});
app.post('/new', function (req, res) {

    train.intent().push(req.body)
    res.status(201).json(req.body)
    
});
app.listen(port, () => console.log(`app listening on port ${port}!`));