import { Model, DataTypes } from 'sequelize';
import connection from '../connection';

const initCategory = (sequelize, Types) => {
  class Category extends Model {
    static associate(models){
      Category.hasMany(models.Product, { foreignKey: 'category_id' })
    }
  }
  Category.init(
    {
      name: Types.STRING,
    },
    {
      sequelize,
      modelName: 'Product',
      tableName: 'products',
      timestamps: false
    }
  );
  return Category;
};

export default initCategory(connection, DataTypes);