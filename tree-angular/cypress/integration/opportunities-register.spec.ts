
describe('Fluxo de cadastro de oportunidades', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
    });

    it('Cadastro de Oportunidades - Job', () => {
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
        cy.get('#titleId').type('Vaga para desenvolvedor Júnior')
        cy.get('#emailId').type('job')
        cy.get('#wageId').type('300000')
        cy.get('#desc').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue sapien in tincidunt ornare. Suspendisse potenti. Nunc volutpat consectetur urna in congue. Praesent ac consectetur nibh. Ut sed lacinia nisi, sed porttitor nunc. Quisque in leo eu dolor tincidunt malesuada. Nunc lacinia accumsan dui non feugiat.')
        cy.contains('Estágio')
        cy.get('[data-test=work-ex]').first().click()
        cy.contains('Emprego')
        cy.get('[data-test=job]').first().click()
        cy.get('#emailId').type('@gmail.com')
        cy.get('#dateId').click()
        cy.contains('15').click()
        cy.get('[data-test=submit]').first().click();
    });

    it('Cadastro de Oportunidades - Event', () => {
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
        cy.contains('Título')
        cy.get('#titleId').type('Mulher Tech Sim Senhor')
        cy.contains('Email de contato')
        cy.get('#emailId').type('evento@gmail.com')
        cy.contains('Endereço')
        cy.get('#adressOrTypeId').type('Rodovia BR 230 Km 14 s/n Morada Nova, PB, 58109-303')
        cy.contains('Descrição')
        cy.get('#desc').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue sapien in tincidunt ornare. Suspendisse potenti. Nunc volutpat consectetur urna in congue. Praesent ac consectetur nibh. Ut sed lacinia nisi, sed porttitor nunc. Quisque in leo eu dolor tincidunt malesuada. Nunc lacinia accumsan dui non feugiat.')
        cy.get('[data-test=submit]').first().click({ force: true });
        cy.get('#dateId').click()
        cy.contains('10').click()
        cy.get('#endDateId').click()
        cy.contains('25').click()
        cy.get('[data-test=submit]').first().click();
    });

    it('Cadastro de Oportunidades - Specialization', () => {
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
        cy.get('#titleId').type('Vaga de Mestrado em Tecnologia da Informação')
        cy.contains('Tipo')
        cy.get('#typeId').type('Mestrado')
        cy.contains('Email de contato')
        cy.get('#emailId').type('especializacao@gmail.com')
        cy.contains('Instituição')
        cy.get('#adressOrTypeId').type('UFPB')
        cy.contains('Bolsa')
        cy.get('#scholarshipId').type('300000')
        cy.contains('Descrição')
        cy.get('#desc').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue sapien in tincidunt ornare. Suspendisse potenti. Nunc volutpat consectetur urna in congue. Praesent ac consectetur nibh. Ut sed lacinia nisi, sed porttitor nunc. Quisque in leo eu dolor tincidunt malesuada. Nunc lacinia accumsan dui non feugiat.')
        cy.get('[data-test=submit]').first().click({ force: true });
    });


});

