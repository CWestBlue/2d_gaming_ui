import { TwodGameUiPage } from './app.po';

describe('twod-game-ui App', () => {
  let page: TwodGameUiPage;

  beforeEach(() => {
    page = new TwodGameUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
