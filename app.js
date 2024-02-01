const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://root:password@localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true });

const mainRoute = require('./routes/mainRoute');

app.use('/', mainRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
