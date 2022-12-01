/*
 * Cypress will clear localStorage between it() cases, we can use this to
 * preserve the auth localStorage key when we need to.
 */
const LOCAL_STORAGE_MEMORY = {};
Cypress.Commands.add('saveLocalStorage', () => {
  Object.keys(localStorage).forEach((key) => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add('restoreLocalStorage', () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

// Cypress.Commands.add('clearLocalStorage', () => {
//   localStorage.clear();
//   LOCAL_STORAGE_MEMORY = {};
// });
