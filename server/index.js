const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use('/', express.static(__dirname + '/../client/dist'));
app.use('/gallery', express.static(__dirname + '/../client/dist'));
app.use('/disc', express.static(__dirname + '/../client/dist'));
app.use('/videos', express.static(__dirname + '/../client/dist'));
app.use(express.static(__dirname + '/../client/dist'));
app.listen(3000, function() {
  console.log('listening on port 3000!');
});