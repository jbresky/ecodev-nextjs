import { Model, DataTypes } from 'sequelize';
import connection from '../connection';

const initProduct = (sequelize, Types) => {
  class Product extends Model {
    static associate(models){
      Product.belongsToMany(models.User, { foreignKey: 'product_id' })
      Product.belongsTo(models.Category, {as: 'category'}, { foreignKey: 'category_id' })
      Product.belongsToMany(models.Cart, { foreignKey: 'product_id' })
    }
  }
  Product.init(
    {
      name: Types.STRING,
      price: Types.DECIMAL(11, 2),
      image: Types.STRING,
      description: Types.STRING,
      insale: Types.INTEGER,
      off: Types.INTEGER,
      highlight: Types.INTEGER,
      category_id: Types.INTEGER
    },
    {
      sequelize,
      modelName: 'Product',
      tableName: 'products',
      timestamps: false
    }
  );
  return Product;
};

export default initProduct(connection, DataTypes);