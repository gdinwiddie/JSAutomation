const {By, Key, until} = require('selenium-webdriver');
const expect = require('chai').expect;
const Page = require('./page');

class RegistrationPage extends Page {
    constructor(driver) {
        super(driver);
        this.URL = "http://demoqa.com/registration/";
    }

  enterFirstName(name) {
    var enterFirstName = this.driver.findElement(By.id('name_3_firstname'))
    enterFirstName.click()
    enterFirstName.clear()
    enterFirstName.sendKeys(name)
  }

  enterLastName(name) {
    var enterLastName = this.driver.findElement(By.id('name_3_lastname'))
    enterLastName.click()
    enterLastName.clear()
    enterLastName.sendKeys(name)
  }
};

module.exports = RegistrationPage;