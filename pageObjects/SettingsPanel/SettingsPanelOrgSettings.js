class SettingsPanelOrgSettings {
  manageTeamsLinkSelector = '[data-cy=manage-teams-btn]';

  get manageTeamsLink() {
    return cy.get(this.manageTeamsLinkSelector);
  }

  mqlServerListLinkSelector = '[data-cy=mql-list-btn]';

  get mqlServerListLink() {
    return cy.get(this.mqlServerListLinkSelector);
  }

  apiExplorerLinkSelector = '[data-cy=api-explorer-btn]';

  get apiExplorerLink() {
    return cy.get(this.apiExplorerLinkSelector);
  }

  mqlQueryLogsLinkSelector = '[data-cy=mql-query-logs-btn]';

  get mqlQueryLogsLink() {
    return cy.get(this.mqlQueryLogsLinkSelector);
  }

  modelLinkSelector = '[data-cy=model-btn]';

  get modelLink() {
    return cy.get(this.modelLinkSelector);
  }

  securityLinkSelector = '[data-cy=security-btn]';

  get securityLink() {
    return cy.get(this.securityLinkSelector);
  }

  manageUsersLinkSelector = 'Manage Users';

  get manageUsersLink() {
    return cy.contains(this.manageUsersLinkSelector);
  }
}

export default new SettingsPanelOrgSettings();
