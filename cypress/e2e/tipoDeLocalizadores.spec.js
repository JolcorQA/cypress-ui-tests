describe('Tipo de localizadores', () => {

    beforeEach(() => {
    // Esto ignora errores JS externos en la página
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.visit('/automation-practice-form')
    });

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
        cy.get('.firstName')
    })

})