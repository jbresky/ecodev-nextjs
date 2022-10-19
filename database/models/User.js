import { Model, DataTypes } from 'sequelize';
import connection from '../connection';

const initUser = (sequelize, Types) => {
  class User extends Model {
    // static associate(models){
    //   User.(models.Operation, { foreignKey: 'userId' })
    // }
  }
  User.init(
    {
      email: Types.STRING,
      first_name: Types.STRING,
      last_name: Types.STRING,
      password: Types.STRING,
      avatar: Types.STRING
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      timestamps: false
    }
  );
  return User;
};

export default initUser(connection, DataTypes);