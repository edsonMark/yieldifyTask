  /**
   * Protractor e2e test spec
   * Started e2e file test
   */

  //Task//

  //Variables
  const Register = require('../Register/register_pageObject.js');
  //

  beforeEach (() => {
    browser.manage().deleteAllCookies();
    browser.get('https://www.marksandspencer.com/');
    browser.driver.manage().window().maximize();
    browser.driver.manage().timeouts().implicitlyWait(1500);
  });

  function DisplayForm() {
    Register.lnkRegister.click();
  }

  describe('Register form', () => {

    it('Should be displayed when the "Register" link is clicked', () => {
      browser.pause();
      DisplayForm();
      expect(Register.txtFirstname.isDisplayed()).toBe(true);
      expect(Register.txtLastname.isDisplayed()).toBe(true);
      expect(Register.txtEmail.isDisplayed()).toBe(true);
      expect(Register.txtPassword.isDisplayed()).toBe(true);
      expect(Register.txtConfirmPswd.isDisplayed()).toBe(true);
      expect(Register.btnCreateAccount.isDisplayed()).toBe(true);
    });

    it('Should validate mandatory and or empty fields', () => {

      var EC = protractor.ExpectedConditions;

      DisplayForm();
      Register.fillForgetForm(' ', ' ', ' ', ' ', ' ');
      browser.wait(EC.textToBePresentInElement($('Register.txtFirstname'), 'This field is required.'), 5000);
  ;//firstname
    });

    it('Should not allow invalid email', () => {

      var EC = protractor.ExpectedConditions;

      DisplayForm();
      Register.fillForgetForm('', '', 'invalid', '', '');
      browser.wait(EC.textToBePresentInElement($('Register.txtFirstname'), 'This field is required.'), 5000);
    });

  });