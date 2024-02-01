const DataModel = require('../models/DataModel');

async function findDataById(id) {
  return DataModel.findById(id);
}

exports.getAll = async (req, res) => {
  try {
    const allData = await DataModel.find();
    res.json(allData);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar dados', error: error });
  }
};

exports.getById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await findDataById(id);
    
    if (!data) {
      return res.status(404).json({ message: 'ID não encontrado' });
    }

    const dataModel = { nome: data.nome, idade: data.idade };

    res.json(dataModel);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar dado por ID', error: error});
  }
};

exports.save = async (req, res) => {
  try {
    const { nome, idade } = req.body;
    const newData = new DataModel({ nome, idade });
    const savedData = await newData.save();
    res.json({ message: 'Dados salvos com sucesso', data: savedData });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao salvar dados', error: error });
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await await findDataById(id);
    
    if (!data) {
      return res.status(404).json({ message: 'ID não encontrado' });
    }
    
    const { nome, idade } = req.body;
    data.nome = nome;
    data.idade = idade;

    const savedData = await data.save();
    res.json({ message: 'Dados atualizados com sucesso', data: savedData });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar dados', error: error });
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await DataModel.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'ID não encontrado' });
    } else {
      return res.json({ message: 'Dado removido com sucesso' });       
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover dado por ID', error: error});
  }
};
