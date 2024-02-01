const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  nome: String,
  idade: Number
});

const DataModel = mongoose.model('Data', dataSchema);

module.exports = DataModel;
