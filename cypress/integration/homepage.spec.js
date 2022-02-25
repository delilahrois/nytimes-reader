describe('homepage tests', () => {

  beforeEach(() => {

    cy.visit('http://localhost:3000')
    cy.intercept('GET', `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`, {fixture: '../fixtures/data.json'})

  })

  it('should feature a header', () => {

    cy.get('.header-link').contains('NY Times Reader 🗽')

  })

  it('should have a newsfeed full of articles', () => {

    cy.get('.feed').should('exist')
    cy.get('.feed > :nth-child(1)').should('exist')
    cy.get('.feed > :nth-child(11)').should('exist')

  })

  it('should display a menu with different filter options', () => {

    cy.get('.menu').should('exist')
    cy.get('.keys > :nth-child(10)').should('exist')
    cy.get('.keys > :nth-child(15)').should('exist')
    cy.get('.keys > :nth-child(6)').should('exist')


  })

  it('should have a menu title', () => {

    cy.get('h2').contains('Menu')

  })

  it('should allow filtering of the feed when a button is selected', () => {

    cy.get('.keys > :nth-child(11)').click()
    cy.get(':nth-child(1) > .article-txt > .title-link').click()
    cy.get('.section').contains('movies')

  })

  it('should not show content unrelated to the selected button', () => {

    cy.get('.keys > :nth-child(11)').click()
    cy.get(':nth-child(1) > .article-txt > .title-link').click()
    cy.get('.section').should('not.have.value', 'travel')

  })
})