// opportunities.spec.ts created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

it('Testar tela da Oportunidades', () => {
    cy.visit('/');
    cy.get('[data-test=goOportunities]').first().click();
    cy.contains('Encontre');
    cy.contains('oportunidades');
    cy.contains('facilmente!');
    cy.url().should('contain', '/opportunities')
    cy.get('[data-test=flat-button]').first().click();
    cy.contains('Adicionar Emprego/Estágio');
    cy.get('[data-test=job]').first().click();
    cy.url().should('contain', '/opportunities/opp-register')
});