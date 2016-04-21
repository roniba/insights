/// <reference path="../../../reference.ts" />
'use strict';

class TempAppDriver extends WixBaseViewUnitDriver {

  render(name = '') {
    this.renderFromTemplate(`<temp-app name="name"></temp-app>`, {name});
  }

  getContainerElement() {
    return this.findByDataHook('container');
  }

  getCounterElement() {
    return this.findByDataHook('counter');
  }
}

describe('Component: tempApp', () => {
  let driver: TempAppDriver;

  beforeEach(() => {
    module('tempAppInternal');
    driver = new TempAppDriver();
  });

  afterEach(() => {
    driver.disconnectFromBody();
  });

  it('should display name', () => {
    driver.render('kukuchumuku');
    expect(driver.element.text()).toContain('This is kukuchumuku');
  });

  it('should increase counter on click', () => {
    driver.render();
    expect(driver.getCounterElement().text()).toBe('0');

    driver.getContainerElement().click();
    expect(driver.getCounterElement().text()).toBe('1');
  });
});
