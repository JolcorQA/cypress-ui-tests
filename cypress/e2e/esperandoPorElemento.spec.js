const { timeout } = require("async");

describe('Esperando por elementos', () => {

    beforeEach(() => {
    // Esto ignora errores JS externos en la página
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.visit('https://www.platzi.com/')
    });

    it('Esperando por un tiempo definido', () => {
        cy.wait(5000)
    })

    it('Esperando por un tiempo', () => {
        cy.get('[data-id="micro-ui.header-signup-button"] > .ButtonLayout-module_ButtonLayout__eaqR3 > span', {timeout:6000})
    })

    it('Esperando por un tiempo y hacer una aserción', () => {
        //cy.get('[data-id="micro-ui.header-signup-button"] > .ButtonLayout-module_ButtonLayout__eaqR3', {timeout:6000}).should('be.visible')
        cy.get('[data-id="micro-ui.header-signup-button"] > .ButtonLayout-module_ButtonLayout__eaqR3').should('be.visible', {timeout:6000})
    })
})


describe('Esperando por elementos', () => {

    beforeEach(() => {
    // Esto ignora errores JS externos en la página
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.visit('/')
    });

    it.only('Esperando por un tiempo definido', () => {
        cy.get('header > a > img').should('be.visible', {timeout:5000})
        cy.get(':nth-child(1) > :nth-child(1) > .card-up', {timeout:5000})
    })
})