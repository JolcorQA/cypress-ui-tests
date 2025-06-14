describe('Tipo de localizadores', () => {

    beforeEach(() => {
    // Esto ignora errores JS externos en la página
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        })
        cy.visit('/automation-practice-form')
    })

    it('Obtener por medio de un tag', () => {
        cy.get('input')
    })

    it('Obtener por medio de un atributo', () => {
        cy.get('[placeholder="First Name"]')
    })

    it('Obtener por medio de un atributo y tag', () => {
        cy.get('input[placeholder="First Name"]')
    })

    it('Obtener por medio de un ID', () => {
        cy.get('#firstName')
    })

    it('Obtener por medio de un class', () => {
        cy.get('.mr-sm-2.form-control')
    })

    it('Usado contains', () => {
        cy.contains('Reading')
        cy.contains('.header-wrapper', ' Widgets')
    })
    
    it('Usado parent', () => {
        //obtener el elemento del padre
        cy.get('input[placeholder="First Name"]').parent()
        cy.get('input[placeholder="First Name"]').parents() 
        cy.get('input[placeholder="First Name"]').parents().find('label')
        cy.get('form').find('label')
        cy.find('label')
    })
})