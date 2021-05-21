const express = require('express');
const router = express.Router();

const PetController = require('../controllers/petController.js');

router.get('/pet', PetController.Index);
router.post('/pet', PetController.Insert);
router.put('/pet', PetController.Update);
router.delete('/pet/:IDPET', PetController.Delete);

module.exports = router;