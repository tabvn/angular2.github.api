import { GithubPage } from './app.po';

describe('github App', function() {
  let page: GithubPage;

  beforeEach(() => {
    page = new GithubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
