describe('full page tests', () => {

  beforeEach(() => {

    cy.visit('http://localhost:3000')
    cy.get(':nth-child(1) > .article-txt > .title-link').click()

  })

  it('should have a picture about the article', () => {

    cy.get('.article-img').should('exist')

  })

  it('should show the title and byline', () => {

    cy.get('.title').should('exist')
    cy.get('.page-header > :nth-child(4)').should('exist')

  })

  it('should feature an abstract about the article', () => {

    cy.get('.content > :nth-child(1)').should('exist')

  })

  it('should link to the full article on NY Times site', () => {

    cy.get('.content > :nth-child(2) > a').should('have.attr', 'href')

  })
})