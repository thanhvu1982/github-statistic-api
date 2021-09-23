import { GetContributionsDto } from '@/dtos/getContributionsDto';
import * as contributionsService from '@/services/contributions';
import { Request, Response } from 'express';

export const getContributions = async (req: Request, res: Response) => {
  const { username, year, format, allYear } =
    req.query as unknown as GetContributionsDto;

  try {
    if (allYear) {
      return res.send({
        message: await contributionsService.getDataForAllYears(
          username,
          format,
        ),
      });
    }

    if (year) {
      return res.send({
        message: await contributionsService.getDataForYear(username, year),
      });
    }

    return res.send({
      data: await contributionsService.getDataOverview(username),
    });
  } catch (error) {
    return res.status(400).send({
      message: 'Bad request',
    });
  }
};
