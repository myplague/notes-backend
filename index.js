const express = require('express');
const app = express();
const PORT = 4001;



app.get('/', function(req, res) {
    res.send('hello')
});






app.listen(PORT, function() {
    console.log('app esta escuchando' + PORT);
});
