const express = require('express');
const Fruit = require('./fruits-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const all = await Fruit.getAll()
    res.json(all)
  } catch (err) {
    next(err)
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const fruit = await Fruit.getBy(req.params.id)
    res.json(fruit)
  } catch (err) {
    next(err)
  }
});

router.post('/', async (req, res, next) => {
  try {
    const inserted = await Fruit.postNew(req.body)
    res.status(201).json(inserted)
  } catch (err) {
    next(err)
  }
});

module.exports = router;
