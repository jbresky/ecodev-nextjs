import { Model, DataTypes } from 'sequelize';
import connection from '../connection';

const initFav = (sequelize, Types) => {
  class Fav extends Model {
    static associate(models){
      Fav.belongsTo(models.Product, { foreignKey: 'cart_id' })
      Fav.belongsTo(models.User, { foreignKey: 'user_id'})
    }
  }
  Fav.init(
    {
      user_id: Types.INTEGER,
      product_id: Types.INTEGER
    },
    {
      sequelize,
      modelName: 'Fav',
      tableName: 'user_favorites',
      timestamps: false
    }
  );
  return Fav;
};

export default initFav(connection, DataTypes);