import SettingsPanelEditMeModal from './SettingsPanelEditMeModal';

class SettingsPanelMe {
  SettingsPanelEditMeModal = new SettingsPanelEditMeModal();

  wrapperSelector = '[data-cy=settings-panel-me]';

  get wrapper() {
    return cy.get(this.wrapperSelector);
  }

  avatarSelector = '[data-cy=avatar]';

  get avatar() {
    return cy.get(`${this.wrapperSelector} ${this.avatarSelector}`);
  }

  usernameSelector = '[data-cy="username"]';

  get username() {
    return cy.get(this.usernameSelector);
  }

  emailSelector = '[data-cy="email"]';

  get email() {
    return cy.get(this.emailSelector);
  }
}

export default SettingsPanelMe;
