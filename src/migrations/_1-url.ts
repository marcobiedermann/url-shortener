import { DataTypes, QueryInterface } from 'sequelize';

function down(queryInterface: QueryInterface): Promise<void> {
  return queryInterface.dropTable('urls');
}

async function up(queryInterface: QueryInterface): Promise<void> {
  await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');

  return queryInterface.createTable('urls', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });
}

export { down, up };
