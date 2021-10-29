const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
  // find all categories
  // be sure to include its associated Products
  router.get('/', async (req, res) => {
    try {
      const result = await Category.findAll({ include: [{ model: Product }] });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const result = await Category.findAll({
      where: {
        id: req.params.id,
      },
      include: [{ model: Product }],
    });

    if (!result) {
      res.status(500).json({ message: "Non-exsistant product" });
      return;
    };

router.post('/', (req, res) => {
  // create a new category
  router.post('/', async (req, res) => {
    try {
      const result = await Category.create({
        category_name: req.body.category_name,
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({message: "Improper catefory input"});
    }
  });

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
