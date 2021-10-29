const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');


router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const result = await Tag.findAll({
      include: [{ model: Product, through: ProductTag, as: 'product_info' }],
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  // pass product tag, remember info tag
  // custom error messages? 500 as place holder
  try {
    const result = await Tag.findAll({
      include: [{ model: Product, through: ProductTag, as: 'product_info' }],
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});
  // create a new tag
router.post('/', async (req, res) => {

  try {
    const result = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});
 // update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
 
  try {
    const result = await Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
  console.log(req.params.id);
  console.log(req.body);
});
  // delete on tag by its `id` value
router.delete('/:id', async (req, res) => {

  try {
    const result = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
