const {By, Key, until} = require('selenium-webdriver');
const expect = require('chai').expect;

class HomePage {
    constructor(driver) {
        this.driver = driver;
    }

    open() {
        this.driver.get('http://demoqa.com/');
    }

    register() {
        this.driver.findElement(By.className('menu-item-374')).click()
    }

    verifyTitle() {
        this.driver.getTitle().then(function (title) {
            console.log('Page title is: ' + title);
            expect(title).to.equal("Demoqa | Just another WordPress site");
        });
    }
};


module.exports = HomePage;