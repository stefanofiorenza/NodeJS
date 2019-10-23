const express = require('express');

const app = express();

// get data in json
app.get('/api/v1/basic', (req, res) => {
    res.status(200).send({
      success: 'true',
      message: 'some data from express endpoint'
    })
  });


const PORT = 5000;

app.listen(PORT, () => {
    console.log('server running on port '+PORT);    
});