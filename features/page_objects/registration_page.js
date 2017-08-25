const {By, Key, until} = require('selenium-webdriver');
const expect = require('chai').expect;

class RegistrationPage {
  constructor(driver) {
    this.driver = driver;
  }

  verifyURL() {
     this.driver.getCurrentUrl().then(function(url) {
        expect(url).to.equal("http://demoqa.com/registration/");
     });
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