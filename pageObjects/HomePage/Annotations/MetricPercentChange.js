import BaseChildClass from '../../dls/BaseChildClass';

class MetricPercentChange extends BaseChildClass {
  wrapperSelector = () =>
    `${this.parentSelector} [data-cy="metric-percent-change"]`;

  get wrapper() {
    return cy.get(this.wrapperSelector);
  }

  iconSelector = () => `${this.wrapperSelector()} [data-cy=icon]`;

  get icon() {
    return cy.get(this.iconSelector());
  }

  pctChangeSelector = () => `${this.wrapperSelector()} [data-cy=pct-change]`;

  get pctChange() {
    return cy.get(this.pctChangeSelector());
  }
}

export default MetricPercentChange;
