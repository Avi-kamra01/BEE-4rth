const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.set('view engine', 'ejs');

app.get('/G25',(req,res) => {
    res.render('index');
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});