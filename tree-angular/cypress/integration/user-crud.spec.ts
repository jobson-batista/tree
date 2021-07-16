describe('Fluxo de cadastro de usuário',()=> {

    beforeEach(() => {
        cy.viewport(1920, 1080);
    });

    it('Cadastro de Usuário', () => {
        cy.visit('/');
        cy.get('[class=signup-button]').click();
        cy.get('[name=firstname]').type('Daniel');
        cy.get('[name=lastname]').type('Faustino');
        cy.get('[name=email_user]').type('dandan@email.com');
        cy.get('[name=password]').type('P@ssword123');
        cy.get('[class=button]').click();
        cy.wait(1000);
    });
})

describe('Fluxo de Login de usuário', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
    });
    
    it('Login de usuário - Fluxo de Exceção', () => {
        cy.get('[name=email_user]').type('johndoe');
        cy.get('[name=password]').type('P@ssword123');
        cy.get('[class=button]').click();
        cy.wait(1000);
    });

    it('Login de usuário - Fluxo Correto', () => {
        cy.get('[name=email_user]').clear();
        cy.get('[name=password]').clear();
        cy.get('[name=email_user]').type('dandan@email.com');
        cy.get('[name=password]').type('P@ssword123');
        cy.get('[class=button]').click();
        cy.wait(1000);
    });
});