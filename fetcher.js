const request = require('request');
const fs = require('fs');
request('http://www.example.edu', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  fs.writeFile('./index.html', body, err => {
    if (err) {
      console.error(err)
      return
    }
  });
});
