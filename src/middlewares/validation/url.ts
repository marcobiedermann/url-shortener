import { celebrate, Joi, Segments } from 'celebrate';

const validateCreateUrl = celebrate({
  [Segments.BODY]: Joi.object({
    longUrl: Joi.string().required(),
  }),
});

const validateGetUrl = celebrate({
  [Segments.PARAMS]: Joi.object({
    shortUrl: Joi.string().required(),
  }),
});

export { validateCreateUrl, validateGetUrl };
