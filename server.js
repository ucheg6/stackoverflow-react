const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('dist'));

const PORT = process.env.PORT || 5001;

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => {
  console.log('Server started on port: ', PORT);
});