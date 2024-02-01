const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.getAll);
router.get('/:id', mainController.getById);
router.post('/', mainController.save);
router.put('/:id', mainController.update);
router.delete('/:id', mainController.delete);
router.patch('/', (req, res) => {
  res.status(405).json({ message: 'Requisição inválida' });
});

module.exports = router;
