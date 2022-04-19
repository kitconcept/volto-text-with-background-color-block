context('Block Acceptance Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewport('macbook-16');
    cy.createContent({
      contentType: 'Document',
      contentId: 'document',
      contentTitle: 'Document',
      path: '/',
    });
    cy.autologin();
  });

  it('As editor I can add a Text With Background Color block', () => {
    cy.visit('/document/edit');
    cy.get('.block.inner.text .public-DraftEditor-content').click();
    cy.get('.button .block-add-button').click({ force: true });
    cy.findByLabelText('Text').click();
    cy.get('.blocks-chooser .mostUsed .button.textWithBackgroundColor').click();
    cy.get('#toolbar-save').click();
  });
}
