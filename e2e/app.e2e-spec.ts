import { BowlBlasterPage } from './app.po';

describe('bowl-blaster App', function() {
  let page: BowlBlasterPage;

  beforeEach(() => {
    page = new BowlBlasterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
