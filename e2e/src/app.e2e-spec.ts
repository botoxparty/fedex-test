import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Fedex Test - Adam Hammad', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should allow you to enter a search term', () => {
    page.enterSearchTerm('puppies');
    expect(page.getInputField().getAttribute('value')).toEqual('puppies');
    page.search();
    browser.waitForAngular();

    expect(page.getGridItems().count()).toBe(25);
  });

  it('should not allow swear words', () => {
    page.enterSearchTerm('what the fuck');
    page.search();
    browser.waitForAngular();
    expect(page.getInputError().getText()).toEqual(
      'Must not include any swear words'
    );
  });

  it('should increment and decrement the page', () => {
    page.enterSearchTerm('puppies');

    expect(page.getInputField().getAttribute('value')).toEqual('puppies');

    page.search();
    browser.waitForAngular();
    expect(page.getGridItems().count()).toBe(25);

    page.nextPage();
    browser.waitForAngular();
    expect(page.getPaginatorText()).toEqual('26 – 50 of 5000');

    page.previousPage();
    browser.waitForAngular();
    expect(page.getPaginatorText()).toEqual('1 – 25 of 5000');
  });

  it('should go to the end and the start', () => {
    page.enterSearchTerm('puppies');

    expect(page.getInputField().getAttribute('value')).toEqual('puppies');

    page.search();
    browser.waitForAngular();
    expect(page.getGridItems().count()).toBe(25);

    page.endPage();
    browser.waitForAngular();
    expect(page.getPaginatorText()).toEqual('4976 – 5000 of 5000');

    page.startPage();
    browser.waitForAngular();
    expect(page.getPaginatorText()).toEqual('1 – 25 of 5000');
  });

  it('should change the amount of items per page', () => {
    page.enterSearchTerm('puppies');
    page.search();
    browser.waitForAngular();

    page.setItemsPerPage(50);
    browser.waitForAngular();

    expect(page.getGridItems().count()).toBe(50);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
