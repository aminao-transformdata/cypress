import TeamPanel from './TeamPanel';

class NavBar {
  TeamPanel = TeamPanel;

  homeBtnSelector = '[data-cy=nav-home]';

  settingsPanelBtnSelector = '[data-cy=nav-settings]';

  loginBtnSelector = '[data-cy=nav-login]';

  metricsSearchLink = '[data-cy="nav-metrics"]';

  boardsPageLink = '[data-cy="nav-board"] > .MuiButton-label';

  get homeBtn() {
    return cy.get(this.homeBtnSelector);
  }

  get settingsPanelBtn() {
    return cy.get(this.settingsPanelBtnSelector);
  }

  get loginBtn() {
    return cy.get(this.loginBtnSelector);
  }

  get metricCollectionsPanelBtn() {
    return cy.get(this.metricsSearchLink);
  }

  get teamsPanelBtn() {
    return cy.get(this.boardsPageLink);
  }

  queryLinkSelector = '[data-cy="nav-explore"]';

  get queryLinkPage() {
    return cy.get(this.queryLinkSelector);
  }
}

export default new NavBar();
