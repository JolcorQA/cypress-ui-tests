describe('Tipo de Guardar elementos', () => {

    beforeEach(() => {
    // Esto ignora errores JS externos en la página
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.visit('/automation-practice-form')
    });
  it('Repeticion', () => {
        //obtener el elemento del padre
        cy.get('input[placeholder="First Name"]').parent()
        //Obtenemos los elementos padres
        cy.get('input[placeholder="First Name"]').parents() 
        cy.get('input[placeholder="First Name"]').parents().find('label')
        cy.get('form').find('label')
        //cy.find('label')
    })
    
    it('Evitar repeticion', () => {
        cy.get('input[placeholder="First Name"]').parents('form').then((form) => {
            const input = form.find('input')
            const labels = form.find('label')
            const divs = form.find('div')

            expect(input.length).to.eq(15)
            expect(divs.length).to.eq(70)
            expect(labels.length).to.eq(16)
        })
        cy.get('form').find('label')
    })
})