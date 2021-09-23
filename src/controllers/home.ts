import { DOCS_URL, GITHUB_REPOSITORY_URL } from '@/constants/config';
import { Request, Response } from 'express';

export const index = (req: Request, res: Response) => {
  return res.send({
    github: GITHUB_REPOSITORY_URL,
    docs: DOCS_URL,
  });
};
