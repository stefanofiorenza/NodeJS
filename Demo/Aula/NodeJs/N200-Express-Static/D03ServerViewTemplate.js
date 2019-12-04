const express = require('express');
const app = express(); 


app.use(express.static('views')); 
app.set('view engine', 'pug') //specify a view template as property of app object

app.get('/', function (req, res) {
    res.render('index', { title: 'title dynamically calculated', message: 'Hello there!' }) //render data into template variables (res.render)
  })


app.listen(3000, () => console.log('Static Server listen on port 3000'));

/**
 * For more info wath pug tutorials here:
 * https://flaviocopes.com/pug
 * 
 * 
 */