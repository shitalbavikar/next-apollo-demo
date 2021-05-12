/// <reference types="cypress" />

describe('Cypress', () => {
    it('is working', () => {
      expect(true).to.equal(true);
    });
  
    it('looks inside the head content using `cy.document()`', () => {
      // yields the window.document object
      // if you click on DOCUMENT from the command log,
      // it outputs the entire #document to the console
      cy.document();
    });
  
    describe('Users page', () => {
      beforeEach(() => {
        // runs before each test in the block
        cy.visit('http://localhost:3000/userApp');
      });
  
      it('should have page title', () => {
        cy.get('[data-test="users-list-title"]');
      });
  
      it('renders user-card details', () => {
        cy.get('[data-test=users-list-wrapper]').children();
      });
      it('renders 20 user cards on page load', () => {
        cy.get('[data-test=users-list-wrapper]').children().should('have.length', 20)
      });
  
      it("has a 'Load More' button", () => {
        cy.get('[data-test=users-action-wrapper]').find('button').should('have.text', 'Load more');
      });
      
      it("Load More button click loads next 20 records and page scroll down to display new records", () => {
        cy.get('[data-test=users-action-loadMore]').click();
        cy.get('[data-test=users-list-wrapper]').children().should('have.length', 40);
        cy.get('[data-test=users-action-wrapper]').scrollIntoView();
      });
    });
  });