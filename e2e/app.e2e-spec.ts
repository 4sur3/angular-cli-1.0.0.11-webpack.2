import { Angular2SeedCliPage } from './app.po';

describe('angular2-seed-cli App', function() {
  let page: Angular2SeedCliPage;

  beforeEach(() => {
    page = new Angular2SeedCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
