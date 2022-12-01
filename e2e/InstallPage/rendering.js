// PRIORITY: High
import HomePage from '../../pageObjects/HomePage';
import InstallPage from '../../pageObjects/InstallPage/InstallPage';
import NavBar from '../../pageObjects/NavBar/NavBar';
import SettingsPanel from '../../pageObjects/SettingsPanel/SettingsPanel';

describe('Install Page Rendering', () => {
  before(() => {
    cy.enableGQLListeners();
    cy.loginAsUser('/', { userType: 'orgAdmin' });
    HomePage.waitForQueries();
  });
  beforeEach(() => {
    cy.enableGQLListeners();
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });
  context('Logged In', () => {
    it('Shows instructions on how to install Transform', () => {
      NavBar.settingsPanelBtn.click();
      SettingsPanel.installLink.click();
      cy.wait('@gql/InstallPageQuery');
      cy.wait('@gql/UseOnboardingTasksQuery');
      cy.url().should('contain', 'install');
      InstallPage.OrgSetupSection.title.should(
        'contain',
        'Create Your Organization'
      );
      InstallPage.OrgSetupSection.statusChip.should(
        'have.attr',
        'data-name',
        'circleCheckGreen'
      );

      InstallPage.CreateAccountSection.title.should(
        'contain',
        'Create an Account'
      );
      InstallPage.CreateAccountSection.statusChip.should(
        'have.attr',
        'data-name',
        'circleCheckGreen'
      );

      InstallPage.DatawarehouseSection.title.should(
        'contain',
        'Connect to Your Data Warehouse'
      );
      InstallPage.DatawarehouseSection.statusChip.should(
        'have.attr',
        'data-name',
        'circleCheckGreen'
      );

      InstallPage.CrateApiKeySection.title.should(
        'contain',
        'Create an API Key'
      );
      InstallPage.CrateApiKeySection.statusChip.should(
        'have.attr',
        'data-name',
        'circleCheckGreen'
      );

      InstallPage.GithubSection.title.should(
        'contain',
        'Set Up Your GitHub Repository'
      );
      InstallPage.GithubSection.statusChip.should(
        'have.attr',
        'data-name',
        'circleCheckGreen'
      );

      InstallPage.CLISection.title.should(
        'contain',
        'Install the Transform CLI'
      );
      InstallPage.CLISection.statusChip.should(
        'have.attr',
        'data-name',
        'circleCheckGreen'
      );

      InstallPage.SlackSection.title.should('contain', 'Shared Slack Channel');
      InstallPage.SlackSection.statusChip.should('contain', 'Recommended');

      InstallPage.MetricUsageSection.title.should(
        'contain',
        'Metric Usage in Transform'
      );
      InstallPage.MetricUsageSection.statusChip.should(
        'have.attr',
        'data-name',
        'circleCheckGreen'
      );
    });
  });
  context('Anon', () => {
    it('Shows instructions on how to create a user or login', () => {
      NavBar.loginBtn.click();
      cy.visit(`${Cypress.config().baseUrl}/install`);
      cy.url().should('contain', 'install');
      InstallPage.AnonInstallPageSection.title.should(
        'contain',
        'Create Your Account'
      );
      InstallPage.AnonInstallPageSection.statusChip.should(
        'contain',
        'Incomplete'
      );

      InstallPage.anonLoginLink.should('contain', 'log in here');
    });
  });
});
