var dns = require('dns');

/*
//1) call a function ex. dnsresolve4
dns.resolve4('www.google.com', callBackFunction); //2) pass a function with 2 inputs (err, result) 
                                                  // that will be called (callback) when 1st one complete its action

//3) in callback function implement custom logic
function callBackFunction(err, addresses) {  
  if (err) throw err;
  console.log('addresses: ' + JSON.stringify(addresses));
}
*/

/** More common code design (concise)*/
/*
dns.resolve4('www.google.com', function(err, addresses) {  
  if (err) throw err;
  console.log('addresses: ' + JSON.stringify(addresses));
});
*/

/* with arrow functions */
dns.resolve4('www.google.com', (err, addresses) =>{  
  if (err) throw err;
  console.log('addresses: ' + JSON.stringify(addresses));
});


