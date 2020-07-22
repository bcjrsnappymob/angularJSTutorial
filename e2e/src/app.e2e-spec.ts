import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('Tour of Heroes App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.get('https://tourofheroesangular.netlify.app/dashboard');
  });

  it('dashboard should not be empty', () => {
    expect(element(by.className('module hero')).getText()).not.toBeUndefined();
  });

  it('should have a page title', () => {
    expect(element(by.css('h1')).getText()).toMatch('Tour of Heroes');
  });

  it('should have a dashboard title', () => {
    expect(element(by.css('h3')).getText()).toMatch('Top Heroes');
  });

  it('should navigate to heroes page', () => {
    const heroesButton = element.all(by.css('nav a')).last();
    expect(heroesButton.getText()).toContain('Heroes');
    if (heroesButton.click()){
      browser.get('https://tourofheroesangular.netlify.app/heroes');
      expect(element(by.css('li')).getText()).not.toBeUndefined();
    }
  });

  it('should navigate to dashboard from heroes page', () => {
    browser.get('https://tourofheroesangular.netlify.app/heroes');
    expect(element(by.css('li')).getText()).not.toBeUndefined();
    const dashboardButton = element.all(by.css('nav a')).first();
    expect(dashboardButton.getText()).toContain('Dashboard');
    if (dashboardButton.click()){
      browser.get('https://tourofheroesangular.netlify.app/dashboard');
      expect(element(by.css('h3')).getText()).toMatch('Top Heroes');
    }
  });

  it('should navigate to hero details page', () => {
    const heroDetailsButton = element.all(by.css('.heroes li a'));
    expect(heroDetailsButton.getText()).not.toBeUndefined();
    if (heroDetailsButton.click()){
      browser.get('https://tourofheroesangular.netlify.app/detail/11');
      expect(element(by.css('button')).getText()).toContain('go back');
    }
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
