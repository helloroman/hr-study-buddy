describe('Notes view', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.findByText(/login/i).click().type('teacher@studybuddy.com');
    cy.findByText(/password/i)
      .click()
      .type('Test123');
    cy.findByText(/sign in/i).click();
  });

  it('Allows to create a new note and delete it', () => {
    cy.visit('/notes');
    cy.findByText(/title/i).click().type('My cypress note');
    cy.findByText(/content/i)
      .click()
      .type('cypress ipsum');
    cy.findByText(/add/i).click();
    cy.findAllByText('My cypress note').should('exist');
    cy.findAllByText('cypress ipsum').should('exist');
    cy.findAllByText('My cypress note')
      .first()
      .parent()
      .findByLabelText(/delete/i)
      .click();
    cy.findAllByText('My cypress note').should('not.exist');
  });
});
