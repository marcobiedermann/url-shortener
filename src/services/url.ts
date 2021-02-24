import { nanoid } from 'nanoid';
import { WhereOptions } from 'sequelize';
import { Url } from '../models';
import { UserCreationAttributes } from '../models/url';

function createUrl(values: UserCreationAttributes): Promise<Url> {
  const shortUrl = nanoid(10);

  return Url.create({
    ...values,
    shortUrl,
  });
}

async function getUrl(where: WhereOptions): Promise<Url> {
  const url = await Url.findOne({
    where,
  });

  if (!url) {
    throw new Error(`URL not found`);
  }

  return incrementUrlVisits(url);
}

function incrementUrlVisits(url: Url): Promise<Url> {
  return url.increment('visits', {
    by: 1,
  });
}

export { createUrl, getUrl };
