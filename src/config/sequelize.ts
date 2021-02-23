import { Sequelize } from 'sequelize';
import config from '.';
import logger from '../utils/logger';

const {
  database: { url },
} = config;

const migrationStorageTableName = 'migrations';

function logging(message: string): void {
  logger.debug(message);
}

const sequelize = new Sequelize(url, {
  logging,
});

sequelize
  .authenticate()
  .then(() => {
    logger.info('Connection has been established successfully');
  })
  .catch((error) => {
    logger.error('Unable to connect to the database: ', error);
  });

export default sequelize;
export { migrationStorageTableName, url };
