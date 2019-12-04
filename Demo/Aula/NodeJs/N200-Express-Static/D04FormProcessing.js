const express = require('express');
const path = require('path');
const app = express(); 

app.use(express.static('forms')); 
app.set('view engine', 'pug') //specify a view template as property of app object
app.set("views", path.join(__dirname, "forms")); //define a dir for template files (override defaults views)


app.get('/', function (req, res) {
    res.render('login', { title: 'title dynamically calculated', message: 'Hello there!' }) //render data into template variables (res.render)
  })

app.get('/login', function (req, res) {

  if(req.query.username==='stefano' && req.query.password==='123'){
      res.render('welcome', { username: req.query.username}) //render data into template variables (res.render)
  }else{
    res.render('accessDenied');
  }
    
})

app.listen(3000, () => console.log('Static Server listen on port 3000'));

/** Request parameters:
 * https://flaviocopes.com/express-request-parameters/
 * 
 * 
 */