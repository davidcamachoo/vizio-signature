const express = require('express');
require("dotenv").config();

const signChallenge = require('./signChallenge.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/signChallenge', (req, res) => {
  const { keyId } = req.body
  const signature = signChallenge(keyId);

  if (keyId === process.env.KEY_ID) {
    res.send(signature);
  } else {
    res.send("Invalid params")
  }
})

app.listen(port, () => {
  console.log(`Server is running on the port: ${port}.`);
});