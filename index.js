const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const myLiffId = process.env.MY_LIFF_ID;
var train = require('./train');

app.use(express.static('public'));

app.get('/send-id', function(req, res) {
    res.json({id: myLiffId});
});
app.get('/intent', function (req, res) {
    res.json(train.intent());
});
app.post('/newintent', function (req, res) {
	var json = req.body;
	res.send('Add new ' + json.name + ' Completed!');
});
app.listen(port, () => console.log(`app listening on port ${port}!`));