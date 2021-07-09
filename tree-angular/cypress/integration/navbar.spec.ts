describe('Fluxo navbar', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
  });

  it('Checar pagína inicial', () => {
    cy.visit('/');
    cy.contains('Início');
  });

  it('Checar pagína de Oportunidades', () => {
    cy.visit('/');
    cy.get('[data-test=goOportunities]').first().click();
    cy.contains('Encontre');
    cy.contains('oportunidades');
    cy.contains('facilmente!');
    cy.url().should('contain', '/opportunities')
  });

  it('Checar pagína de Comunidade', () => {
    cy.visit('/');
    cy.get('[data-test=goCommunity]').first().click();
    cy.contains('Encontre as');
    cy.contains('pessoas');
    cy.contains('que compõe nossa equipe!');
    cy.url().should('contain', '/community');
  });

  it('Checar pagína de Como funciona', () => {
    cy.visit('/');
    cy.get('[data-test=goHowItWorks]').first().click();
    cy.contains('Como Funciona');
    cy.contains('Vamos ajudar você a encontrar a oportunidade que deseja!');
    cy.url().should('contain', '/how-it-works');
  });

  it('Checar pagína de Login', () => {
    cy.visit('/');
    cy.get('[data-test=goLogin]').first().click();
    cy.contains('Entrar');
    cy.contains('Ainda não possui uma conta?');
    cy.url().should('contain', '/register');
  });

  it('Checar pagína de Registro', () => {
    cy.visit('/');
    cy.get('[data-test=goRegister]').first().click();
    cy.contains('Cadastrar-se');
    cy.contains('Já possui uma conta?');
    cy.url().should('contain', '/register');
  });
});
