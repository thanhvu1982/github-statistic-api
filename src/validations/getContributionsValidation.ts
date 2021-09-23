import { NextFunction, Request, Response } from 'express';
import joi from 'joi';

export const getContributionsValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const schema = joi.object({
    username: joi.string().required(),
    year: joi.number(),
    format: joi.string().allow('array', 'object').default('array'),
    allYear: joi.boolean(),
  });

  const { error, value } = schema.validate(req.query);
  if (error) {
    return res.status(400).json({
      error: error.details[0].message,
    });
  }
  req.query = value;
  return next();
};
