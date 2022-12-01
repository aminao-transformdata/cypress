import { addCustomCommand } from 'cy-verify-downloads';
import 'cypress-downloadfile/lib/downloadFileCommand';
import './utils/auth';
import compareColor from './utils/compareColor';
import enableGQLListeners from './utils/enableGQLListeners';
import './utils/inViewPort';
import './utils/localStorage';

Cypress.Commands.add('visitHome', () => {
  cy.visit('/');
});

Cypress.Commands.overwrite('log', (subject, message) =>
  cy.task('log', message)
);

Cypress.Commands.add('enableGQLListeners', enableGQLListeners);

Cypress.Commands.overwrite(
  'should',
  (originalFn, subject, expectation, ...args) => {
    const customMatchers = {
      'have.backgroundColor': compareColor(args[0], 'backgroundColor'),
      'have.color': compareColor(args[0], 'color'),
      'have.borderColor': compareColor(args[0], 'borderColor'),
    };

    // See if the expectation is a string and if it is a member of Jest's expect
    if (typeof expectation === 'string' && customMatchers[expectation]) {
      // @ts-ignore
      return originalFn(subject, customMatchers[expectation]);
    }
    // @ts-ignore
    return originalFn(subject, expectation, ...args);
  }
);

// cy-verify-downloads
addCustomCommand();
