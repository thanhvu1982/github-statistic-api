import { GITHUB_URL } from '@/constants/config';
import { DataAllYearFormat, Day, Year } from '@/models/Github';
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

export const getYearForData = async (year: Year): Promise<Day[]> => {
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

export async function getDataForAllYears<
  Format extends DataAllYearFormat,
  Return = Format extends 'array' ? Day[] : { [key: string]: Day[] },
>(username: string, format: Format): Promise<Return> {
  const years = await getYears(username);
  const resForAllYears: Day[][] = await Promise.all(
    years.map((year) => getYearForData(year)),
  );
  if (format === 'array') {
    let data: Day[] = [];
    resForAllYears.forEach((yearData) => {
      data = [...data, ...yearData];
    });
    return data as unknown as Return;
  } else {
    const data: { [key: string]: Day[] } = {};
    resForAllYears.forEach((yearData, index) => {
      data[years[index].value] = yearData;
    });
    return data as unknown as Return;
  }
}
