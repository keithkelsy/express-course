const express = require("express");

const app = express();



app.use((req, res, next) => {
  console.log(`Route: ${req.url} Method: ${req.method}`);
  next()
}) 


const logger = () => {
  
}
const isAuthenticated = () => {
  
}


app.get('/profile', (req, res) => {
  res.send('Profile Page')
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.get('/', (req, res) => {
  res.send('Main page')
})

app.use((req, res, next) => {
  if (req.query.login === 'kkelsy@unal.edu.co') {
    next()
  }
  else {
    res.send('403 - No estás autorizado')
  }
  next()
})

app.get('/dashboard', (req, res) => {
  res.send('Dashboard page  ')
})

app.listen(3000);
console.log(`Server running on ${3000}`);
