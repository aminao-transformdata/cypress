class Subscriptions {
  constructor(index) {
    this.index = index;
  }

  wrapperSelector = () => `[data-cy=subscription-${this.index}]`;

  get wrapper() {
    console.log('this.index', this.index);
    return cy.get(this.wrapperSelector());
  }

  titleSelector = () => `${this.wrapperSelector()} [data-cy="title"]`;

  get title() {
    return cy.get(this.titleSelector());
  }

  dateSelector = () => `${this.wrapperSelector()} [data-cy="date"]`;

  get date() {
    return cy.get(this.dateSelector());
  }

  currentValueSelector = () =>
    `${this.wrapperSelector()} [data-cy="current-value"]`;

  get currentValue() {
    return cy.get(this.currentValueSelector());
  }

  latestChangeNumberSelector = () =>
    `${this.wrapperSelector()} [data-cy="value-change"]`;

  get latestChangeNumber() {
    return cy.get(this.latestChangeNumberSelector());
  }

  latestChangePercentSelector = () =>
    `${this.wrapperSelector()} [data-cy="pct-change"]`;

  get latestChangePercent() {
    return cy.get(this.latestChangePercentSelector());
  }

  periodTypeSelector = () =>
    `${this.wrapperSelector()} [data-cy="period-type"]`;

  get periodType() {
    return cy.get(this.periodTypeSelector());
  }

  showMoreBtnSelector = '[data-cy=show-more-subscriptions]';

  get showMoreBtn() {
    return cy.get(this.showMoreBtnSelector);
  }
}

export default Subscriptions;
