let express = require('express');
let app = express();

app.get('/', (req, res)=> {
    res.send('Hello World');
}).listen(3000);

exports.app = app;