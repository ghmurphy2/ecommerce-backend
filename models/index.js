// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
// group routes by model id, delete on cascade categories
// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: { model: ProductTag, unique: false },
  as: 'product_info',
});
ProductTag.belongsTo(Product, {
  foreignKey: 'product_id',
});
Product.hasMany(ProductTag, {
  foreignKey: 'product_id',
});
ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id',
});


// Tags belongToMany Products (through ProductTag)
// require no delete on cascade
Tag.belongsToMany(Product, {
  through: { model: ProductTag, unique: false },
  as: 'product_info',
});
Tag.hasMany(ProductTag, {
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
