const express = require('express');
const app = express();
const port = 3001;

const mongoose = require('mongoose');

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

mongoose.connect('mongodb://localhost:27017/arvato')
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(error => console.error('Failed to connect to MongoDB:', error));
