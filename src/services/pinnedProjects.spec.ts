import * as pinnedProjectsService from './pinnedProjects';

const username = 'misa198';

describe('Get pinned projects', () => {
  it('Returns an array of pinned projects', async () => {
    const pinnedProjects = await pinnedProjectsService.getPinnedProjects(
      username,
    );
    expect(pinnedProjects).toBeInstanceOf(Array);
    expect(pinnedProjects[0]).toHaveProperty('url');
    expect(pinnedProjects[0]).toHaveProperty('name');
    expect(pinnedProjects[0]).toHaveProperty('description');
    expect(pinnedProjects[0]).toHaveProperty('language');
    expect(pinnedProjects[0]).toHaveProperty('stars');
    expect(pinnedProjects[0]).toHaveProperty('forks');
    expect(pinnedProjects[0]).toHaveProperty('color');
  });
});
