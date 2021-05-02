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

    it('inloggen ', function () {

    cy.get('.nav__toggle-label').click()
    cy.get('.sl-sign-in-or-register > .nav__list-item__link > span > p').click()

    //email & password
    cy.get('#signin-email', { timeout: 10000 }).should('be.visible');
    cy.get('#signin-email').type('test@test.nl')
    cy.get('#signin-password').type('Password123')

    //aanmelden
    cy.get('[data-testid=Button-primary-new] > :nth-child(2) > span').click()
    //cookies
    cy.get('div.cookie-notice button').contains('ACCEPTEER ALLES').click({force: true})
    
    //go to adress wijzigen 
    cy.get('.nav__toggle-label').click()
  cy.get('.myAccount > .nav__list-item__link > span > p').click()

   // cy.wait(3000)
   cy.get('.myaccount > .nav__list-item__link > span > p', { timeout: 10000 }).should('be.visible');
    //go to mijn gegevens
   
    cy.get('.myaccount > .nav__list-item__link > span > p').click()
    
    //newsletter
    cy.get('#email-address337').type('test@test.nl')
    
    cy.get('.checkbox > .checkbox__label').click()
    cy.get('.newsletter__submit').click()
  cy.get('.newsletter > .button--close').click()
    
    cy.get('.my-account__navigation > :nth-child(2) > a').click()
    cy.wait(1000)

    cy.get('.my-account__navigation > :nth-child(3) > a').click()
 //cy.get('.myaccount\/addressbook > .nav__list-item__link > span > p', { timeout: 10000 }).should('be.visible');
//cy.get('.myaccount\/addressbook > .nav__list-item__link > span > p').click()
    
    cy.wait(3000)
 
    cy.get('[data-testid=address-add-button]').click()


    cy.get('#firstName').type('testfirstname')
    cy.get('#lastName').type('testlastname')
    cy.get('#address1').type('testStraat')
    cy.get('#address2').type('123')
    cy.get('#city').type('testCity')
    cy.get('#zipCode').type('1111 AA')
    cy.get('#phone1').type('0612345678')
    //SAVE
  //  cy.get('[data-testid=address-save-button]').click()
    
    


   // cy.get('[data-testid=address-save-button]').click();
    //cy.get('#birthDay').click();
    //cy.get('#birthDay').contains('1').click();

    })
})