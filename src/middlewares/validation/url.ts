import { celebrate, Joi, Segments } from 'celebrate';

const validateCreateUrl = celebrate({
  [Segments.BODY]: Joi.object({
    longUrl: Joi.string().required(),
  }),
});

const validateGetUrl = celebrate({
  [Segments.PARAMS]: Joi.object({
    urlId: Joi.string().required(),
  }),
});

export { validateCreateUrl, validateGetUrl };
