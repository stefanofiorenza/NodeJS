const express = require('express');
const app = express(); 


//it is possible to define more than one dir (they will be searched according to definition)
app.use(express.static('public')); 
app.use(express.static('files')); 
app.use(express.static('static'));

//map external path to internal
app.use('/ext', express.static(__dirname + '/public'));

app.listen(3000, () => console.log('Static Server listen on port 3000'));