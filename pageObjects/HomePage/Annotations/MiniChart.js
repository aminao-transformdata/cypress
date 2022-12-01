import BaseChildClass from '../../dls/BaseChildClass';

class MiniChart extends BaseChildClass {
  wrapperSelector = () => `${this.parentSelector} [data-cy=mini-chart]`;

  get wrapper() {
    return cy.get(this.wrapperSelector());
  }
}

export default MiniChart;
