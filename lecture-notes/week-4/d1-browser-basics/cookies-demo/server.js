const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Cookies!!!');
});

const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
