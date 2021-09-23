import * as githubService from './github';

const username = 'misa198';

describe('Gets years', () => {
  it('Returns a array of years', async () => {
    const years = await githubService.getYears(username);
    const url = years[0].url;
    const value = years[0].value;
    expect(years.length).toBeGreaterThan(0);
    expect(url).not.toEqual('');
    expect(url).not.toBeNull();
    expect(url).not.toBeUndefined();
    expect(value).not.toEqual('');
    expect(value).not.toBeNull();
    expect(value).not.toBeUndefined();
  });
});

describe('Gets data for year', () => {
  it('Returns data for one year', async () => {
    const data = await githubService.getYearForData({
      value: '2020',
      url: '/misa198?tab=overview&from=2020-12-01&to=2020-12-31',
    });
    const day = data[0];
    expect(data.length).toBeGreaterThan(0);
    expect(day.date).not.toEqual('');
    expect(day.date).not.toBeNull();
    expect(day.date).not.toBeUndefined();
    expect(day.value).toBeGreaterThanOrEqual(0);
  });
});

describe('Gets data for all years', () => {
  it('Returns data for all years (array)', async () => {
    const dataArray = await githubService.getDataForAllYears(username, 'array');
    const day = dataArray[0];
    expect(dataArray.length).toBeGreaterThan(0);
    expect(day.date).not.toEqual('');
    expect(day.date).not.toBeNull();
    expect(day.date).not.toBeUndefined();
    expect(day.value).toBeGreaterThanOrEqual(0);
  });

  it('Returns data for all years (object)', async () => {
    const dataArray = await githubService.getDataForAllYears(
      username,
      'object',
    );
    const years = Object.keys(dataArray);
    const yearData = dataArray[years[0]];
    expect(years.length).toBeGreaterThan(0);
    expect(yearData.length).toBeGreaterThan(0);
    expect(yearData[0].date).not.toEqual('');
    expect(yearData[0].date).not.toBeNull();
    expect(yearData[0].date).not.toBeUndefined();
    expect(yearData[0].value).toBeGreaterThanOrEqual(0);
  });
});
