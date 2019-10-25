const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const body_parser = require('body-parser');
const myLiffId = process.env.MY_LIFF_ID;
var train = require('./train');

app.use(express.static('public'));
server.use(body_parser.json());

app.get('/send-id', function(req, res) {
    res.json({id: myLiffId});
});
app.get('/intent', function (req, res) {
    res.json(train.intent());
});
app.post('/newintent', function (req, res) {
    const item = req.body;
    console.log('Adding new item: ', item);
 
    // add new item to array
    data.push(item)
 
    // return updated list
    res.json(data);
    
});
app.listen(port, () => console.log(`app listening on port ${port}!`));