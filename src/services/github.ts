import { GITHUB_URL } from '@/constants/config';
import { Day, Year } from '@/models/Github';
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

export const getYearData = async (year: Year): Promise<Day[]> => {
  const res = await axios.get(`${GITHUB_URL}${year.url}`);
  const $ = cheerio.load(res.data);
  const days = $('.ContributionCalendar-day');
  const data: Day[] = [];
  days.each((_i, day) => {
    const { attribs } = day;
    data.push({
      date: attribs['data-date'],
      value: parseInt(attribs['data-count'] ?? '0', 0),
    });
  });
  return data;
};
