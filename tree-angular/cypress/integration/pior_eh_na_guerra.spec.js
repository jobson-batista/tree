describe('Testes De Integração', function() {

    const email = (Math.random() * (200 - 1) + 1) + 'admin@tree.com.br';
    const password = 'admin123';

    context('Sem Usuários', () => {

        it('Criado', () => {
            cy.request({
                url: '/users',
                body: {
                    email: email,
                    password: password,
                    firstName: 'JOBSON',
                    lastName: 'BATISTA',
                },
                method: 'POST',
            }).its('status').should('equal', 201)
        });

        it('Atualizar usuário com ID 1', () => {
            cy.request({
                url: '/users/1',
                body: {
                    email: email,
                    password: password,
                    firstName: 'Allan',
                    lastName: 'Poe',
                },
                method: 'PUT',
            }).its('status').should('equal', 200)
        });

        it('Existe usuário(s) cadastrado(s)', () => {
            cy.request({
                url: '/users',
                method: 'GET',
            }).its('status').should('equal', 200)
        });

        it('Deletar usuário com ID 1', () => {
            cy.request({
                url: '/users/1',
                method: 'DELETE',
            }).its('status').should('equal', 200)
        });
    });

    context('Emprego', () => {

        it('Criado', () => {
            cy.request({
                url: '/jobs',
                body: {
                    title: 'Estágio em Desenvolvimento Web',
                    description: 'Trabalhar com Angular e NodeJS.',
                    type: 'Estágio',
                    contactEmail: email,
                    salary: 1250,
                    subType: 'Estágio'
                },
                method: 'POST',
            }).its('status').should('equal', 201)
        });

        it('Existe Job(s) cadastrado(s)', () => {
            cy.request({
                url: '/jobs',
                failOnStatusCode: false,
            }).its('status').should('equal', 200)
        });
    });

    context('Evento', () => {

        it('Criado', () => {
            cy.request({
                url: '/events',
                body: {
                    title: 'Estágio em Desenvolvimento Web',
                    description: 'Trabalhar com Angular e NodeJS.',
                    type: 'Evento',
                    contactEmail: email,
                    organizer: 'Coordenador Geral',
                    place: 'Auditorio Campus IV UFPB'
                },
                method: 'POST',
            }).its('status').should('equal', 201)
        });

        it('Existe Evento(s) cadastrado(s)', () => {
            cy.request({
                url: '/events',
                failOnStatusCode: false,
            }).its('status').should('equal', 200)
        });
    });

    context('Pós Graduação', () => {

        it('Criado', () => {
            cy.request({
                url: '/specializations',
                body: {
                    title: 'Mestrado em Eng. de Software',
                    description: 'Área de Eng. de Software',
                    type: 'Especialização',
                    contactEmail: email,
                    institution: 'UFCG - Campus ' + (Math.random()),
                    subType: 'Mestrado',
                    scholarship: 2500
                },
                method: 'POST',
            }).its('status').should('equal', 201)
        });

        it('Existe Pós-Graduação(ões) cadastrado(s) ', () => {
            cy.request({
                url: '/specializations',
                failOnStatusCode: false,
            }).its('status').should('equal', 200)
        });
    });
})