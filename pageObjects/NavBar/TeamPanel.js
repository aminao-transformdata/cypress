class TeamPanel {
  menuItemSelector = '[data-cy="nav-metrics"] > .MuiButton-label';

  get menuItem() {
    return cy.get(this.menuItemSelector);
  }

  panelSelector = '[data-cy=teams-panel]';

  get panel() {
    return cy.get(this.panelSelector);
  }

  panelCloseBtnSelector = '[data-cy=closer-drawer-btn]';

  get panelCloseBtn() {
    return cy.get(this.panelCloseBtnSelector);
  }

  createTeamBtnSelector = '[data-cy=create-team-btn]';

  get createTeamBtn() {
    return cy.get(this.createTeamBtnSelector);
  }

  popularTeamPagesSelector = '[data-cy=team-panel-popular]';

  get popularTeamPages() {
    return cy.get(this.popularTeamPagesSelector);
  }

  userTeamPagesSelector = '[data-cy=team-panel-user]';

  get userTeamPages() {
    return cy.get(this.userTeamPagesSelector);
  }

  teamItemSelector = (teamId) => `[data-cy=user-team-item-${teamId}] a`;

  popularTeamItem = (itemid) =>
    this.popularTeamPages.find(this.teamItemSelector(itemid));

  userTeamItem = (itemid) =>
    this.userTeamPages.find(this.teamItemSelector(itemid));
}

export default new TeamPanel();
