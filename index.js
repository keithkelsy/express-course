const express = require('express');

const app = express();

app.get('/products', (req, res) => { 
    res.send('Lista de productos')
})

app.post('/products', (req, res) => { 
    res.send('Creando lista de productos')
})

app.put('/products', (req, res) => { 
    res.send('Actualizando productos')
})

app.delete('/products', (req, res) => { 
    res.send('Eliminando lista de productos')
})

app.patch('/products', (req, res) => { 
    res.send('Actualizando una parte del producto')
})

app.listen(3000);
console.log(`Server running on ${3000}`);

