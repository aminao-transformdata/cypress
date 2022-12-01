import ChangePasswordButton from './ChangePasswordButton';
import SettingsPanelMe from './SettingsPanelMe';

class SettingsPanel {
  SettingsPanelMe = new SettingsPanelMe();

  ChangePasswordButton = new ChangePasswordButton();

  apiKeysLinkSelector = '[data-cy=api-keys-btn]';

  installCTAWrapperSelector = '[data-cy=install-cta-wrapper]';

  installLinkSelector = '[data-cy=install-link]';

  editMyProfileTitleSelector = '[data-cy="title"]';

  verifyCloseIconIsVisibleSelector =
    'button[class="MuiButtonBase-root MuiIconButton-root outlined MuiIconButton-sizeSmall"]';

  emailPrefencesWrapperSelector = '[data-cy="email-input"]';

  get apiKeysLink() {
    return cy.get(this.apiKeysLinkSelector);
  }

  get installCTAWrapper() {
    return cy.get(this.installCTAWrapperSelector);
  }

  get installLink() {
    return cy.get(this.installLinkSelector);
  }

  get emailPrefencesWrapper() {
    return cy.get(this.emailPrefencesWrapperSelector);
  }

  get editMyProfileTitle() {
    return cy.get(this.editMyProfileTitleSelector);
  }

  get verifyCloseIcon() {
    return cy.get(this.verifyCloseIconIsVisibleSelector);
  }
}

export default new SettingsPanel();
