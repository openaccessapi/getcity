const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express();
const PORT = 30001;

async function main() {
  app.use(express.static(path.join(__dirname, 'html')));

  app.get('/ws/getCity', async function (req, res) {
    let result = {
      success: false,
      location: {},
    };
    try {
      // Get your API Key here: https://rapidapi.com/openaccess/api/reverse-geocode1
      const API_KEY = 'your key here';
      const response = await fetch(
        `https://reverse-geocode1.p.rapidapi.com/city?latitude=${req.query.latitude}&longitude=${req.query.longitude}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': 'reverse-geocode1.p.rapidapi.com'
        },
      });

      result = await response.json();
      result.success = true;
      res.json(result);
    }
    catch (ex) {
      console.log(ex);
      res.status(500).send(result);
    }
  });

  app.listen(PORT, (error) => {
    if (!error)
      console.log("Server is Successfully Running, and App is listening on port " + PORT)
    else
      console.log("Error occurred, server can't start", error);
  });
}
main();