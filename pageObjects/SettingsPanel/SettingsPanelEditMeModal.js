class SettingsPanelEditMeModal {
  editMeBtnSelector = '[data-cy=settings-panel-edit-me-button]';

  get editMeBtn() {
    return cy.get(this.editMeBtnSelector);
  }

  modalWrapperSelector = '[data-cy=settings-panel-me-modal]';

  get modalWrapper() {
    return cy.get(this.modalWrapperSelector);
  }

  displayNameInputSelector = '[data-cy=display-name-input]';

  get displayNameInput() {
    return cy.get(`${this.displayNameInputSelector}`);
  }

  emailInputSelector = '[data-cy=email-input]';

  get emailInput() {
    return cy.get(`${this.modalWrapperSelector} ${this.emailInputSelector}`);
  }

  submitBtnSelector = '[data-cy=submit]';

  get submitBtn() {
    return cy.get(`${this.modalWrapperSelector} ${this.submitBtnSelector}`);
  }
}

export default SettingsPanelEditMeModal;
