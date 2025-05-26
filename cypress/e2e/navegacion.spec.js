describe('Primera Prueba', () => {

    it('Navegar en nuestra primera pagina', () => {
        cy.visit('https://www.platzi.com')
    })

    it('Recagar pagina', () => {
        cy.reload()
    })
    
    it('Recagar pagina forma forzada', () => {
        cy.visit('https://www.google.com')
        cy.reload(true)
    })
    
    it.only('Navergar hacia atras', () => {
        cy.visit('https://www.google.com')
        cy.visit('https://www.google.com/search?q=platzi&sca_esv=d93e8101beac56bb&sxsrf=AE3TifNivOlljvGOHlVj3_9a2zBjByJhXA%3A1748207841897&ei=4YgzaIrDNuabwbkPgKn94Ac&gs_ssp=eJzj4tVP1zc0zKiqKMvJzjNQYDRgdGDwYivISSypygQAby4H-g&oq=pla&gs_lp=Egxnd3Mtd2l6LXNlcnAiA3BsYSoCCAAyEBAuGIAEGNEDGMcBGCcYigUyChAAGIAEGEMYigUyDRAAGIAEGLEDGEMYigUyDRAAGIAEGLEDGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyDRAAGIAEGLEDGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyDRAAGIAEGLEDGEMYigUyHRAuGIAEGNEDGMcBGIoFGJcFGNwEGN4EGOAE2AEBSPAJUJ8BWJ8BcAF4AJABAJgBeqABeqoBAzAuMbgBAcgBAPgBAZgCA6ACmwrCAhMQLhiABBiwAxjRAxjHARgnGIoFwgILEAAYgAQYsAMYsQPCAg4QABiABBiwAxixAxiDAcICCBAAGIAEGLADwgINEAAYgAQYsAMYQxiKBcICDhAAGLADGOQCGNYE2AEBwgITEC4YgAQYsAMYQxjIAxiKBdgBAZgDAIgGAZAGE7oGBggBEAEYCZIHBzAuMi42LTGgB_wHsgcDMC4xuAeIAcIHCzAuMS4wLjEuNi0xyAeAAQ&sclient=gws-wiz-serp')
        // cy.go('back')
        cy.go(-1)
    })
    
    it('Navergar hacia adelante', () => {
        cy.visit('https://www.google.com')
        cy.visit('https://www.google.com/search?q=platzi&sca_esv=d93e8101beac56bb&sxsrf=AE3TifNivOlljvGOHlVj3_9a2zBjByJhXA%3A1748207841897&ei=4YgzaIrDNuabwbkPgKn94Ac&gs_ssp=eJzj4tVP1zc0zKiqKMvJzjNQYDRgdGDwYivISSypygQAby4H-g&oq=pla&gs_lp=Egxnd3Mtd2l6LXNlcnAiA3BsYSoCCAAyEBAuGIAEGNEDGMcBGCcYigUyChAAGIAEGEMYigUyDRAAGIAEGLEDGEMYigUyDRAAGIAEGLEDGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyDRAAGIAEGLEDGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyDRAAGIAEGLEDGEMYigUyHRAuGIAEGNEDGMcBGIoFGJcFGNwEGN4EGOAE2AEBSPAJUJ8BWJ8BcAF4AJABAJgBeqABeqoBAzAuMbgBAcgBAPgBAZgCA6ACmwrCAhMQLhiABBiwAxjRAxjHARgnGIoFwgILEAAYgAQYsAMYsQPCAg4QABiABBiwAxixAxiDAcICCBAAGIAEGLADwgINEAAYgAQYsAMYQxiKBcICDhAAGLADGOQCGNYE2AEBwgITEC4YgAQYsAMYQxjIAxiKBdgBAZgDAIgGAZAGE7oGBggBEAEYCZIHBzAuMi42LTGgB_wHsgcDMC4xuAeIAcIHCzAuMS4wLjEuNi0xyAeAAQ&sclient=gws-wiz-serp')
        cy.go('back')
        cy.go('forward')
        // cy.go(1)
    })
    

})