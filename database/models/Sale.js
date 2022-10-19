import { Model, DataTypes } from 'sequelize';
import connection from '../connection';

const initSale = (sequelize, Types) => {
  class Sale extends Model {
    static associate(models){
        Sale.belongsTo(models.Cart, { foreignKey: 'cart_id' })
    }
  }
  Sale.init(
    {
      order: Types.INTEGER,
      date: Types.DATE,
      cart: Types.INTEGER
    },
    {
      sequelize,
      modelName: 'Sale',
      tableName: 'sales',
      timestamps: false
    }
  );
  return Sale;
};

export default initSale(connection, DataTypes);