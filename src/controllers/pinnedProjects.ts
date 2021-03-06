import { Request, Response } from 'express';
import { GetContributionsDto } from '../dtos/GetContributionsDto';
import * as pinnedProjectsService from '../services/pinnedProjects';

export const getPinnedProjects = async (req: Request, res: Response) => {
  try {
    const { username } = req.query as unknown as GetContributionsDto;
    const pinnedProjects = await pinnedProjectsService.getPinnedProjects(
      username,
    );
    res.status(200).send({
      data: pinnedProjects,
    });
  } catch (error) {
    res.status(400).send({ error: 'Bad request' });
  }
};
