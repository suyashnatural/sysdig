describe('login', function () {

    beforeEach('before each test', function () {
        cy.visit('https://app.sysdigcloud.com/')
    })

    it('Test EU Login', function () {
        cy.get('.reactsel__value-container').click()
        cy.get('#react-select-2-option-0 > span').click();
        cy.url().then(url => {
            cy.url().should('eq', 'https://eu1.app.sysdig.com/#/login')
        })
    })

    it('Test US East Login', function () {
        cy.get('.reactsel__value-container').click()
        cy.get('#react-select-2-option-1 > span').click();
        cy.url().then(url => {
            cy.url().should('eq', 'https://app.sysdigcloud.com/#/login')
        })
    })

    it('Test US West Login', function () {
        cy.get('.reactsel__value-container').click()
        cy.get('#react-select-2-option-2 > span').click();
        cy.url().then(url => {
            cy.url().should('eq', 'https://us2.app.sysdig.com/#/')
        })
    })

    it('Test Asia Pacific (AP) Login', function () {
        cy.get('.reactsel__value-container').click()
        cy.get('#react-select-2-option-3 > span').click();
        cy.url().then(url => {
            cy.url().should('eq', 'https://app.au1.sysdig.com/#/login')
        })
    })

    it('Test Invalid Login', function () {
        cy.get('[class="ember-view simple-btn simple-btn--login"]').click()
        cy.on('window:alert', (txt) => {
            expect(txt).to.contains('Please fill out this field.');
        })
    })

    it('Test Forgot Password Link - Invalid', function () {
        cy.get('[class="ember-view login__link"]').click()
        cy.get('[class="ember-view ember-text-field login__form-field"]').type('abcd.com').type('{enter}')
        cy.on('window:alert', (txt) => {
            expect(txt).to.contains("Please include an '@' in the email email address. 'abcd.com' is missing an '@'. ");
        })
    })

    it('Test Forgot Password Link - Valid', function () {
        cy.get('[class="ember-view login__link"]').click()
        cy.get('[class="ember-view ember-text-field login__form-field"]').type('abcd@gmail.com').type('{enter}')
        cy.get('[class="login__feedback-message"]').invoke('text').then((text) => {
            expect(text.trim()).equal('We just sent the password reset email to abcd@gmail.com!Please check your inbox and follow the instructions to reset your password.')
        })
    })
})