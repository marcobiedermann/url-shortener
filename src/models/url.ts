import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize';

export interface UserCreationAttributes {
  longUrl: string;
}

class Url extends Model {
  public id!: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

Url.init(
  {
    id: {
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    longUrl: {
      type: DataTypes.STRING,
    },
    shortUrl: {
      type: DataTypes.STRING,
    },
    visits: {
      defaultValue: 0,
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    underscored: true,
  },
);

export default Url;
