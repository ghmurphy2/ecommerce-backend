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
 // find one category by its `id` value
  // be sure to include its associated Products
router.get('/:id', async (req, res) => {
 
  try {
    const result = await Category.findAll({
      where: {
        id: req.params.id,
      },
      include: [{ model: Product }],
    });

    if (!result) {
      res.status(500).json({ message: "Non-exsistant category" });
      return;
    });
  };

// create a new category
router.post('/', async (req, res) => {
  try {
    const result = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: "Improper category input" });
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    const result = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json('Invalid update');
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  router.delete('/:id', async (req, res) => {
    try {
      const result = await Category.destroy({
        where: { id: req.params.id },
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  });
});

module.exports = router;
