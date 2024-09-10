const express = require("express");

const app = express();

app.get('/search', (req, res) => {
  if (req.query.q === 'javascript books') {
    res.send('Libros de Javascript')
  } else {
    res.send('Pagina normal')
  }

})


app.listen(3000);
console.log(`Server running on ${3000}`);
