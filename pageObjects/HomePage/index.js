// import GetStartedCards from '../organisms/Onboarding/GetStartedCards/GetStartedCards';
import Annotations from './Annotations/Annotations';
import Metrics from './Metrics/Metrics';
import Pagination from './Pagination';
import Subscriptions from './Subscriptions';

class HomePage {
  Annotations = (index = 0) => new Annotations(index);

  AnnotationPagination = new Pagination('annotations');

  Subscriptions = (index = 0) => new Subscriptions(index);

  Metrics = (index = 0) => new Metrics(index);

  MetricsPagination = new Pagination('metrics');

  // GetStartedCards = GetStartedCards;

  searchInputSelector = '[data-cy=header-metric-search-box] input';

  get searchInput() {
    return cy.get(this.searchInputSelector);
  }

  onboardingHeaderSelector = '[data-cy=onboarding-header]';

  get onboardingHeader() {
    return cy.get(this.onboardingHeaderSelector);
  }

  onboardingSubheaderSelector = '[data-cy=onboarding-subheader]';

  get onboardingSubheader() {
    return cy.get(this.onboardingSubheaderSelector);
  }

  visit = () => {
    cy.visit('/');
    // return cy.wait('@gql/UseHomePageQuery');
  };

  waitForQueries = () => {
    cy.wait('@gql/HomePageAnnotationsQuery');
    cy.wait('@gql/MetricSubscriptionsQuery');
    cy.wait('@gql/TopCompanyMetricsQuery');
  };
}

export default new HomePage();
