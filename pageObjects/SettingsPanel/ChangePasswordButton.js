class ChangePasswordButton {
  buttonSelector = '[data-cy=settings-change-password-btn]';

  get button() {
    return cy.get(this.buttonSelector);
  }

  successAlertSelector = '[data-cy=auth0-change-password-alert-success]';

  get successAlert() {
    return cy.get(this.successAlertSelector);
  }

  errorAlertSelector = '[data-cy=auth0-change-password-alert-error]';

  get errorAlert() {
    return cy.get(this.errorAlertSelector);
  }
}

export default ChangePasswordButton;
