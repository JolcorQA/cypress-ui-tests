const { timeout } = require("async");
const { after } = require("lodash");

describe('Interactuando con los elementos', () => {

    beforeEach(() => {
    // Esto ignora errores JS externos en la página
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        })
    })

    it('Click' , () => {
        cy.visit('/buttons')

        cy.get('button').eq(3).click()
        cy.get('#dynamicClickMessage').should('be.visible').and('contain', 'You have done a dynamic click')
    })

    it(' Doble click' , () => {
        cy.visit('/buttons')

        cy.get('#doubleClickBtn').dblClick()
        cy.get('#dynamicClickMessage').should('be.visible').and('contain', 'You have done a double click')
    })

    it(' Right click' , () => {
        cy.visit('/buttons')

        cy.get('#rightClickBtn').rightClick()
        cy.get('#rightClickMessage').should('be.visible').and('contain', 'You have done a right click')
    })

    it.only('Force click' , () => {
        cy.visit('/dynamic-properties')
        //cy.get('#enableAfter').click({timeout:0})
        cy.get('#enableAfter').click({timeout:0, force:true})
    
    })

    it('Click por posición' , () => {
        cy.visit('/buttons')

        cy.get('button').eq(3).parent().parent().click('topRight')
        cy.get('button').eq(3).parent().parent().click('buttomLeft')
        cy.get('button').eq(3).parent().parent().click(5, 60)
    })
})