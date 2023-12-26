// cypress/support/index.ts
import './commands'

declare global
{
    namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      loginToEcom(uname:string,pwd:string): Chainable<Element>;
        }
    }
}