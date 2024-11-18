describe('Página de Login', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/client/index.html');
  });

  it('Deve carregar a página de login', () => {
    cy.get('[data-cy="form-title"]').contains('Login');
  });

  it('Deve preencher e enviar o formulário de login com sucesso', () => {
    cy.get('[data-cy="email-input"]').type('teste@exemplo.com');
    cy.get('[data-cy="password-input"]').type('123456');
    cy.get('[data-cy="submit-button"]').click();
    
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Login bem-sucedido!');
    });
  });

  it('Deve mostrar erro ao tentar submeter sem preencher os campos', () => {
    cy.get('[data-cy="submit-button"]').click();
    cy.get(':invalid').should('have.length', 3);
  });
});