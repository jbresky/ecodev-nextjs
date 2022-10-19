import { Model, DataTypes } from 'sequelize';
import connection from '../connection';

const initCart = (sequelize, Types) => {
  class Cart extends Model {
    static associate(models){
        Cart.belongsToMany(models.Product, { foreignKey: 'cart_id' })
        Cart.belongsTo(models.User, { foreignKey: 'user_id'})
    }
  }
  Cart.init(
    {
      total: Types.INTEGER,
      created_at: Types.DATE,
      updated_at: Types.DATE,
      deleted_at: Types.DATE,
      user_id: Types.INTEGER
    },
    {
      sequelize,
      modelName: 'Cart',
      tableName: 'carts',
    //   timestamps: false
    }
  );
  return Cart;
};

export default initCart(connection, DataTypes);