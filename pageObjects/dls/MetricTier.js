import BaseChildClass from './BaseChildClass';

class MetricTier extends BaseChildClass {
  iconSelector = () => `${this.parentSelector} [data-cy=tier-icon]`;

  get icon() {
    return cy.get(this.iconSelector());
  }
}

export default MetricTier;
