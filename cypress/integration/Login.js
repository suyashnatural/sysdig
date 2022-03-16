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
})