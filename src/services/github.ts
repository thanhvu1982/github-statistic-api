import { GITHUB_URL } from '@/constants/config';
import { Year } from '@/models/Year';
import axios from 'axios';
import cheerio from 'cheerio';

export const getYears = async (username: string): Promise<Year[]> => {
  const res = await axios.get(`${GITHUB_URL}/${username}`);
  const $ = cheerio.load(res.data);
  const years: Year[] = $('.js-year-link')
    .get()
    .map((a) => {
      const linkElement = $(a);
      return {
        value: linkElement.text().trim(),
        url: linkElement.attr('href') as string,
      };
    });
  return years;
};
