const express = require('express');
const app = express();


// E1: Echo data in querystring
app.get('/api/v1/basic/querystring', (req, res) => {

    res.status(200).send({
      firstname: req.query.firstname,
      lastname: req.query.lastname
    })
});

// E2: Echo data in path parameters ()
app.get('/api/v1/basic/users/:firstname/:lastname', (req, res) => {
 
    res.status(200).send({
      firstname: req.params.firstname,
      lastname: req.params.lastname
    })
});



//  E3: Echo data in http Post body

//enable configuration to parse http post body
configExpressForHttpPostBodyParsing();

app.post('/api/v1/basic', (req, res) => {

    res.status(200).send({
      firstname: req.body.firstname,
      lastname: req.body.lastname
    })
});

// E4: Echo headers
app.get('/api/v1/basic/headers', (req, res) => {

  res.status(200).send({
    accept: req.headers.accept,
    contentType: req.get('Content-Type') 
  })

});


// E5: All unmapped get endpoints return not found
app.get('*', function(req, res) {
    res.status(404).send();
});


const PORT = 5000;

app.listen(PORT, () => {
    console.log('server running on port '+PORT);    
});



function configExpressForHttpPostBodyParsing() {
  // parse requests of content-type - application/x-www-form-urlencoded (Express 4.13++)
  app.use(express.urlencoded({ extended: true }))

  // parse requests of content-type - application/json (Express 4.13++)
  app.use(express.json());
}