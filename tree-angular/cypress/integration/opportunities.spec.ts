// opportunities.spec.ts created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

it('Tela de Oportunidades - Job', () => {
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

it('Tela de Oportunidades - Event', () => {
    cy.visit('/');
    cy.get('[data-test=goOportunities]').first().click();
    cy.contains('Encontre');
    cy.contains('oportunidades');
    cy.contains('facilmente!');
    cy.url().should('contain', '/opportunities')
    cy.get('[data-test=flat-button]').first().click();
    cy.contains('Adicionar Evento');
    cy.get('[data-test=event]').first().click();
    cy.url().should('contain', '/opportunities/opp-register')
});

it('Tela de Oportunidades - Specialization', () => {
    cy.visit('/');
    cy.get('[data-test=goOportunities]').first().click();
    cy.contains('Encontre');
    cy.contains('oportunidades');
    cy.contains('facilmente!');
    cy.url().should('contain', '/opportunities')
    cy.get('[data-test=flat-button]').first().click();
    cy.contains('Adicionar Especialização');
    cy.get('[data-test=specialization]').first().click();
    cy.url().should('contain', '/opportunities/opp-register')
});

it('Tela de Registro de Oportunidades - Job', () => {
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
    cy.get('[data-test=option-event]').first().click();
    cy.get('[data-test=option-specialization]').first().click();
});

it('Tela de Registro de Oportunidades - Validação forms-Job', () => {
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
    cy.contains('Título');
    cy.get('[data-test=opp-title]').first().click()
    cy.contains('Email de contato')
    cy.get('[data-test=opp-email]').first().click()
    cy.contains('Salário')
    cy.get('[data-test=opp-salary]').first().click()

});

it('Tela de Registro de Oportunidades - Event', () => {
    cy.visit('/');
    cy.get('[data-test=goOportunities]').first().click();
    cy.contains('Encontre');
    cy.contains('oportunidades');
    cy.contains('facilmente!');
    cy.url().should('contain', '/opportunities')
    cy.get('[data-test=flat-button]').first().click();
    cy.contains('Adicionar Evento');
    cy.get('[data-test=event]').first().click();
    cy.url().should('contain', '/opportunities/opp-register')
    cy.get('[data-test=option-specialization]').first().click();
    cy.get('[data-test=option-job]').first().click();
});

it('Tela de Oportunidades - Specialization', () => {
    cy.visit('/');
    cy.get('[data-test=goOportunities]').first().click();
    cy.contains('Encontre');
    cy.contains('oportunidades');
    cy.contains('facilmente!');
    cy.url().should('contain', '/opportunities')
    cy.get('[data-test=flat-button]').first().click();
    cy.contains('Adicionar Especialização');
    cy.get('[data-test=specialization]').first().click();
    cy.url().should('contain', '/opportunities/opp-register')
    cy.get('[data-test=option-job]').first().click();
    cy.get('[data-test=option-event]').first().click();
});

