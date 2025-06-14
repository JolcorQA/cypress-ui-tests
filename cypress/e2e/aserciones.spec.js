const { first } = require("lodash");

describe('Aserciones', () => {

    beforeEach(() => {
    // Esto ignora errores JS externos en la página
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.visit('/automation-practice-form')
    });
    it('Asercion 1', () => {
        cy.url().should('include', 'demoqa.com')
        cy.get('#firstName').should('be.visible').end('have.attr', 'placeholder', 'First Name')
    })

    it('Asercion 2', () => {
        cy.url().should('include', 'demoqa.com')
        cy.get('#firstName').then((element) => {
            expect(element).to.be.visible
            expect(element).to.have.attr('placeholder', 'First Name')
        })
    })

    it('Asercion 3', () => {
        cy.url().should('include', 'demoqa.com')
        cy.get('#firstName').then((element) => {
            assert.equal(element.attr('placeholder'), 'First Name')
        })
    })
})