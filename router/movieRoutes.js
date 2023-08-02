const express = require('express');
const router = express.Router();
const movieController = require('../controllers/controller');

router.get('/', movieController.getAllMovies);


router.put('/:id', movieController.updateMovie);

module.exports = router;
