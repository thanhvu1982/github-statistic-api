import axios from 'axios';
import cheerio from 'cheerio';
import { GITHUB_URL } from '../constants/config';
import { PinnedProject } from '../models/PinnedProject';

export const getPinnedProjects = async (
  username: string,
): Promise<PinnedProject[]> => {
  const res = await axios.get(`${GITHUB_URL}/${username}`);
  if (res.status === 404) throw new Error('User not found');
  const $ = cheerio.load(res.data);
  const pinnedProjectsList = $('.pinned-item-list-item-content');

  const pinnedProjects: PinnedProject[] = [];

  pinnedProjectsList.each((i) => {
    const pinnedProject = pinnedProjectsList.eq(i);
    const href = pinnedProject.find('a')[0].attribs.href.trim();
    const owner = href.split('/')[1];
    const name = href.split('/')[2];
    const description = $(pinnedProject.find('p.pinned-item-desc')[0]).text().trim();
    const stars = $(pinnedProject.find('a.pinned-item-meta')[0]).text().trim();
    const forks = $(pinnedProject.find('a.pinned-item-meta')[1]).text().trim();
    const language = pinnedProject
      .find('span[itemprop="programmingLanguage"]')
      .text()
      .trim();
    const color = pinnedProject
      .find('span.repo-language-color')[0]
      .attribs.style.trim()
      .split(': ')[1];

    pinnedProjects.push({
      url: `${GITHUB_URL}${href}`,
      owner,
      name,
      description,
      stars: stars || '0',
      forks: forks || '0',
      language,
      color,
    });
  });

  return pinnedProjects;
};
