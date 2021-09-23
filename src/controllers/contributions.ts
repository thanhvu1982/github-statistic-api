import { GetContributionsDto } from '@/dtos/getContributionsDto';
import { GetYearsDto } from '@/dtos/GetYearsDto';
import * as contributionsService from '@/services/contributions';
import { Request, Response } from 'express';

export const getYears = async (req: Request, res: Response) => {
  try {
    const { username } = req.query as unknown as GetYearsDto;

    const years = await contributionsService.getYears(username);
    return res.send({
      data: years,
    });
  } catch (error) {
    return res.status(400).send({
      error: 'Bad request',
    });
  }
};

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
