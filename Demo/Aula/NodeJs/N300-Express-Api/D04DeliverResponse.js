const express = require('express');
const app = express();
var cookieParser = require('cookie-parser');

//middleware enables cookie parser -> allows syntax req.cookies['cookieName']
app.use(cookieParser());



// 1) empty response (only status code matters)
  app.get('/api/v1/response/status', (req, res) => {
      //res.status(200).end();
      res.status(300).end();
      //res.status(404).end();
      //res.status(500).end();
  });


  // 2.1) redirect to url (login for example)
  app.get('/api/v1/response/redirect', (req, res) => {
    res.redirect("/api/v1/response/redirected");
  });

  // 2.2) redirect to url (login for example)
  app.get('/api/v1/response/redirected', (req, res) => {
    res.status(200).send({message:'redirected'})
  });

  // 3) json
  app.get('/api/v1/response/json', (req, res) => {
      res.status(200).send({message:'jsonData'})
  });

  // 4) binary
  app.get('/api/v1/response/binaries', (req, res) => {
    res.sendFile('./files/galeon-file.data', { root: __dirname }); //root path is current dir
  });



/** Cookies
 * See How to open cookies on chrome
 * https://developers.google.com/web/tools/chrome-devtools/storage/cookies#open
 */

// 5.1) cookie: add cookie in response (and redirect)
app.get('/api/v1/response/cookies', (req, res) => {

  let token="r34r34ol5i3po483453jklfjsdfkloi34p09583409gdeorwgjpo54w68230ó9i5t54tnkqldbvg";

  res
    .status(201)
    .cookie('access_token', 'Bearer ' + token, {
      expires: new Date(Date.now() + 8 * 3600000) // cookie will be removed after 8 hours
    })
    .cookie('test', 'test')
    .redirect(301, '/api/v1/response/parse-cookie');
});

// 5.2) read cookie from request
app.get('/api/v1/response/parse-cookie', (req, res) => {
  console.log("Token: "+req.cookies['access_token']);  
  res.status(200).end();
  //send({message:'echo token', token:req.cookies.access_token});  
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log('server running on port '+PORT);    
});