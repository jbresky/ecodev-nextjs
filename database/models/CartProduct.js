import { Model, DataTypes } from 'sequelize';
import connection from '../connection';

const initCartProduct = (sequelize, Types) => {
  class CartProduct extends Model {
    static associate(models){
        CartProduct.belongsTo(models.Cart, { foreignKey: 'cart_id' })
        CartProduct.belongsTo(models.Product, { foreignKey: 'product_id' })
    }
  }
  CartProduct.init(
    {
      cart_id: Types.INTEGER,
      product_id: Types.INTEGER,
      amount: Types.DECIMAL(11,2),
      quantity: Types.INTEGER
    },
    {
      sequelize,
      modelName: 'CartProduct',
      tableName: 'carts_has_products',
      timestamps: false
    }
  );
  return CartProduct;
};

export default initCartProduct(connection, DataTypes);