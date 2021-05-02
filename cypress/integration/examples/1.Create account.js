describe('MyTestSuite', function() 
{
    it('Verify Title Of The Page postive', function() 
    {
        Cypress.on('uncaught:exception', (err, runnable) => {
            
            return false
          })

        cy.visit('https://nl.tommy.com/')
        cy.get('div.cookie-notice button').contains('ACCEPTEER ALLES').click({force: true})
    })
//clicking on aanmelden button
   it('open aanmelden ', function ()
   { 
    cy.get('.nav__toggle-label').click()
    cy.get('.sl-sign-in-or-register > .nav__list-item__link > span > p').click()
   // cy.waitU(8000)
    cy.get('[data-testid=register]', { timeout: 10000 }).should('be.visible');
    cy.get('[data-testid=register]').click()
    cy.get('#create-account-email', { timeout: 10000 }).should('be.visible');

    
    
    cy.get('#create-account-email').type('Hello world')
    cy.get('#create-account-password').type('Hoi')
 


  //Validation of the email error message
    const field=cy.get("#create-account-email-helper-text")
    field.contains("Sorry, dit is geen geldig e-mailadres")
  //Cleare email --> sett correct email
    cy.get('#create-account-email').clear()
    cy.get('#create-account-email').type('test1@test.nl')

  //Validation of the password error message
    const field2=cy.get("#create-account-password-helper-text")
    field.contains("Je wachtwoord moet tussen 5 en 20 tekens lang zijn")


  //Clear password --> sett correct password
    cy.get('#create-account-password').clear()
    cy.get('#create-account-password').type('Password123')

  //CHeckboxes
    cy.get('.agree-terms > [data-testid=checkbox-label]').click()
    cy.get('.create-account-newsletter > [data-testid=checkbox-label]').click()
    
    //ACCOUNT AANMAKEN
    cy.get('[data-testid=Button-primary-new] > :nth-child(2) > span').click()

    cy.get('div.cookie-notice button').contains('ACCEPTEER ALLES').click({force: true})
   })

  })