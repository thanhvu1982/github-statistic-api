import * as githubService from './github';

const username = 'misa198';

describe('Get years', () => {
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
