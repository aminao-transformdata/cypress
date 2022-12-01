import InstallPageSection from './InstallPageSection';

class InstallPage {
  anonDataCy = 'anon-install';

  AnonInstallPageSection = new InstallPageSection({
    type: 'anon',
  });

  OrgSetupSection = new InstallPageSection({
    type: 'org',
  });

  CreateAccountSection = new InstallPageSection({
    type: 'personal',
  });

  DatawarehouseSection = new InstallPageSection({
    type: 'data-warehouse',
  });

  CrateApiKeySection = new InstallPageSection({
    type: 'api-key',
  });

  GithubSection = new InstallPageSection({
    type: 'github',
  });

  CLISection = new InstallPageSection({
    type: 'cli',
  });

  SlackSection = new InstallPageSection({
    type: 'slack',
  });

  MetricUsageSection = new InstallPageSection({
    type: 'metric-usage',
  });

  anonPageWrapperSelector = `[data-cy=${this.anonDataCy}]`;

  get anonPageWrapper() {
    return cy.get(this.anonPageWrapperSelector);
  }

  anonLoginLinkSelector = `[data-cy=login]`;

  get anonLoginLink() {
    return cy.get(this.anonLoginLinkSelector);
  }
}

export default new InstallPage();
