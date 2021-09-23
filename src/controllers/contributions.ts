import { GetContributionsDto } from '@/dtos/getContributionsDto';
import * as githubService from '@/services/github';
import { Request, Response } from 'express';

export const getContributions = async (req: Request, res: Response) => {
  const { username, year, format, fullYear } =
    req.query as unknown as GetContributionsDto;

  try {
    if (fullYear) {
      return res.send({
        message: await githubService.getDataForAllYears(username, format),
      });
    }

    if (year) {
      return res.send({
        message: await githubService.getDataForYear(username, year),
      });
    }

    return res.send({
      data: await githubService.getDataOverview(username),
    });
  } catch (error) {
    return res.status(400).send({
      message: 'Bad request',
    });
  }
};
