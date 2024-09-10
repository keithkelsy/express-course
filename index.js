const express = require("express");

const app = express();

app.use((req, res) => {
  console.log('Pasó por aquí');
})

app.get('/profile', (req, res) => {
  res.send('Profile page')
})

app.listen(3000);
console.log(`Server running on ${3000}`);
