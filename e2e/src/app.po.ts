import { browser, by, element, Key } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  async enterSearchTerm(search: string) {
    const input = this.getInputField();
    input.click();
    if (!search) {
      await input.clear();
    } else {
      await input.clear();
      await input.sendKeys(search);
    }
  }

  async search() {
    await this.getInputField().sendKeys(Key.ENTER);
  }

  setItemsPerPage(limit: number) {
    element(by.xpath('//*[@id="mat-select-0"]')).click();
    element(by.css(`#mat-option-1[ng-reflect-value="${limit}"]`)).click();
  }

  nextPage() {
    element(
      by.xpath('/html/body/app-root/mat-paginator/div/div/div[2]/button[3]')
    ).click();
  }

  previousPage() {
    element(
      by.xpath('/html/body/app-root/mat-paginator/div/div/div[2]/button[2]')
    ).click();
  }

  startPage() {
    element(
      by.xpath('/html/body/app-root/mat-paginator/div/div/div[2]/button[1]')
    ).click();
  }

  endPage() {
    element(
      by.xpath('/html/body/app-root/mat-paginator/div/div/div[2]/button[4]')
    ).click();
  }

  getInputField() {
    return element(by.xpath('//*[@id="mat-input-0"]'));
  }

  getInputError() {
    return element(by.css('mat-error'));
  }

  getPaginatorText() {
    return element(
      by.xpath('/html/body/app-root/mat-paginator/div/div/div[2]/div')
    ).getText();
  }

  getGrid() {
    return element(by.className('grid'));
  }

  getGridItems() {
    return element.all(by.className('grid__item'));
  }
}
