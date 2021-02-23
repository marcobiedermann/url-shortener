import { WhereOptions } from 'sequelize/types';
import { Url } from '../models';

function createUrl(): Promise<Url> {
  return Url.create();
}

function getUrl(where: WhereOptions): Promise<Url | null> {
  return Url.findOne({
    where,
  });
}

export { createUrl, getUrl };
