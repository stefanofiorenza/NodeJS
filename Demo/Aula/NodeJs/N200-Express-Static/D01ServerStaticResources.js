const express = require('express');
const app = express(); //1) create express object

//1) feed function in middleware
app.use(express.static('public')); //2) enable a path on server where to search resources from url path


//3) default to index.html if no additional path is provided
app.get('/', (req, res) => {
    res.sendFile('./public/index.html', { root: __dirname });
});


app.listen(3000, () => console.log('Static Server listen on port 3000'));